import React, { useEffect } from 'react';

const AdsPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6055563078016167";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        const adScript = document.createElement('script');
        adScript.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
        document.body.appendChild(adScript);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(adScript);
        };
    }, []);

    return (
        <div>
            <h1>Ads Page</h1>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key="-6t+ed+2i-1n-4w"
                data-ad-client="ca-pub-6055563078016167"
                data-ad-slot="8003613179"></ins>
        </div>
    );
};

export default AdsPage;