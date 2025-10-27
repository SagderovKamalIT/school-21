import { useEffect } from "react";

export default function YandexMetrica() {
  useEffect(() => {
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (let j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) return;
        }
        k=e.createElement(t);
        a=e.getElementsByTagName(t)[0];
        k.async=1;
        k.src=r;
        a.parentNode.insertBefore(k,a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103670508', 'ym');

    window.ym && window.ym(103670508, 'init', {
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      accurateTrackBounce: true,
      trackLinks: true
    });
  }, []);

  return null; 
}

