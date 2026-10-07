// Shared GA4 setup: loaded once on each page, before page-specific scripts.
window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); };
window.gtag('js', new Date());
window.gtag('config', 'G-XLZRRZDY1X');

const googleTag = document.createElement('script');
googleTag.async = true;
googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-XLZRRZDY1X';
document.head.appendChild(googleTag);
