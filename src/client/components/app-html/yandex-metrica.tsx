import React from 'react';

export const YandexMetrica = () => {
    if (process?.env?.NODE_ENV !== 'production') {
        return null;
    }

    return (
        <div dangerouslySetInnerHTML= {{
            __html: `
                <!-- Yandex.Metrika counter -->
                <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                ym(82152430, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
                });
                </script>
                <noscript><div><img src="https://mc.yandex.ru/watch/82152430" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                <!-- /Yandex.Metrika counter -->
            ` }
        }/>
    )
}
