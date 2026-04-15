import { supabase } from './supabase';

const TABLE_COUPONS = 'ah_coupons';
const TABLE_USES = 'ah_coupon_uses';
const CODE_PREFIX = 'CPL';
const SITE_DOMAIN = 'copilot.dreamitbiz.com';

interface DashboardStats {
  totalMembers: number;
  newMembers7d: number;
  activeCoupons: number;
  totalCouponUses: number;
}

interface PaginatedResult<T> {
  data: T[];
  total: number;
}

/** 대시보드 KPI 통계 */
export async function fetchDashboardStats(): Promise<DashboardStats> {
  const today = new Date().toISOString().split('T')[0];
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [membersRes, newMembersRes, couponsRes] = await Promise.all([
    supabase
      .from('user_profiles')
      .select('id', { count: 'exact', head: true })
      .contains('visited_sites', [SITE_DOMAIN]),
    supabase
      .from('user_profiles')
      .select('id', { count: 'exact', head: true })
      .contains('visited_sites', [SITE_DOMAIN])
      .gte('created_at', sevenDaysAgo.toISOString()),
    supabase
      .from(TABLE_COUPONS)
      .select('id')
      .like('code', `${CODE_PREFIX}-%`),
  ]);

  const activeCouponsRes = await supabase
    .from(TABLE_COUPONS)
    .select('id', { count: 'exact', head: true })
    .like('code', `${CODE_PREFIX}-%`)
    .eq('is_active', true)
    .gte('expires_at', today);

  let totalCouponUses = 0;
  const cplCoupons = couponsRes.data || [];
  if (cplCoupons.length > 0) {
    const couponIds = cplCoupons.map((c: { id: string }) => c.id);
    const { count } = await supabase
      .from(TABLE_USES)
      .select('id', { count: 'exact', head: true })
      .in('coupon_id', couponIds);
    totalCouponUses = count || 0;
  }

  return {
    totalMembers: membersRes.count || 0,
    newMembers7d: newMembersRes.count || 0,
    activeCoupons: activeCouponsRes.count || 0,
    totalCouponUses,
  };
}

/** 최근 가입 회원 (대시보드용, 10명) */
export async function fetchRecentMembers(): Promise<any[]> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('id, display_name, email, created_at, signup_domain')
    .contains('visited_sites', [SITE_DOMAIN])
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('fetchRecentMembers error:', error);
    return [];
  }
  return data || [];
}

/** 최근 CPL 쿠폰 활동 (대시보드용) */
export async function fetchRecentCoupons(): Promise<any[]> {
  const { data: coupons, error } = await supabase
    .from(TABLE_COUPONS)
    .select('*')
    .like('code', `${CODE_PREFIX}-%`)
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('fetchRecentCoupons error:', error);
    return [];
  }

  const couponIds = (coupons || []).map((c: any) => c.id);
  if (couponIds.length === 0) return [];

  const { data: uses } = await supabase
    .from(TABLE_USES)
    .select('coupon_id')
    .in('coupon_id', couponIds);

  const countMap: Record<string, number> = {};
  (uses || []).forEach((u: { coupon_id: string }) => {
    countMap[u.coupon_id] = (countMap[u.coupon_id] || 0) + 1;
  });

  return (coupons || []).map((c: any) => ({
    ...c,
    use_count: countMap[c.id] || 0,
  }));
}

/** 회원 목록 (페이지네이션 + 검색) */
export async function fetchUsers(
  { page = 1, limit = 20, search = '' }: { page?: number; limit?: number; search?: string } = {}
): Promise<PaginatedResult<any>> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('user_profiles')
    .select('*', { count: 'exact' })
    .contains('visited_sites', [SITE_DOMAIN])
    .order('created_at', { ascending: false })
    .range(from, to);

  if (search) {
    query = query.or(`display_name.ilike.%${search}%,email.ilike.%${search}%`);
  }

  const { data, count, error } = await query;
  if (error) {
    console.error('fetchUsers error:', error);
    return { data: [], total: 0 };
  }
  return { data: data || [], total: count || 0 };
}

/** 회원 상세 (쿠폰/라이선스 이력 포함) */
export async function fetchUserDetail(userId: string): Promise<any> {
  const [profileRes, licensesRes, couponUsesRes] = await Promise.all([
    supabase.from('user_profiles').select('*').eq('id', userId).single(),
    supabase.from('user_licenses').select('*').eq('user_id', userId),
    supabase
      .from(TABLE_USES)
      .select(`*, coupon:${TABLE_COUPONS}!coupon_id (code, label, lecture_date, expires_at, duration_days)`)
      .eq('user_id', userId)
      .order('redeemed_at', { ascending: false }),
  ]);

  return {
    profile: profileRes.data,
    licenses: licensesRes.data || [],
    couponUses: couponUsesRes.data || [],
  };
}
