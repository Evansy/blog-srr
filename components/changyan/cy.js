export default function() {
    var appid = "cytltFcnU";
    var conf = "prod_06fa1c42c75a51e9eb36805c1371c5b5";
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
        var cyScript = document.createElement('script');
        cyScript.id = 'changyan_mobile_js';
        cyScript.charset = 'utf-8';
        cyScript.type = 'text/javascript';
        cyScript.src = 'https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + "&conf=" + conf;
        window.document.body.appendChild(cyScript);
    } else {
        var loadJs = function(d, a) {
            var c =
                document.getElementsByTagName("head")[0] ||
                document.head ||
                document.documentElement;
            var b = document.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.setAttribute("charset", "UTF-8");
            b.setAttribute("src", d);
            if (typeof a === "function") {
                if (window.attachEvent) {
                    b.onreadystatechange = function() {
                        var e = b.readyState;
                        if (e === "loaded" || e === "complete") {
                            b.onreadystatechange = null;
                            a();
                        }
                    };
                } else {
                    b.onload = a;
                }
            }
            c.appendChild(b);
        };
        loadJs("https://changyan.sohu.com/upload/changyan.js", function() {
            window.changyan.api.config({ appid: appid, conf: conf });
        });
    }
};
