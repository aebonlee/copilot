import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export default function SEOHead({ title, description, path = '' }: { title?: string; description?: string; path?: string }) {
  useEffect(() => {
    const fullTitle = title ? `${title} - ${SITE_CONFIG.name}` : SITE_CONFIG.name;
    document.title = fullTitle;

    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const descText = description || SITE_CONFIG.description;
    const ogImage = `${SITE_CONFIG.url}/og-image.png`;

    setMeta('og:title', fullTitle);
    setMeta('og:description', descText);
    setMeta('og:url', `${SITE_CONFIG.url}${path}`);
    setMeta('og:type', 'website');
    setMeta('og:site_name', SITE_CONFIG.name);
    setMeta('og:image', ogImage);
    setMeta('og:image:width', '1200');
    setMeta('og:image:height', '630');

    // Twitter Card
    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', fullTitle);
    setMetaName('twitter:description', descText);
    setMetaName('twitter:image', ogImage);

    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', descText);
  }, [title, description, path]);

  return null;
}
