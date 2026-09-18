<textarea id="hashasUyeGirisRuntime" style="display:none!important;">
(function(){

    if(window.hashasUyeGirisStarted) return;
    window.hashasUyeGirisStarted = true;


    /* =========================================
       HEADER FULL WIDTH
       ========================================= */

    function hashasFixHeader(){

        if(window.innerWidth < 992) return;

        var main = document.querySelector(
            '#headerNew .header-main .headerContainer'
        );

        var bottom = document.querySelector(
            '#headerNew .header-bottom .headerContainer'
        );

        if(main){
            main.classList.add('hashas-header-fullwidth');
        }

        if(bottom){
            bottom.classList.add('hashas-header-fullwidth');
        }
    }

    hashasFixHeader();

    document.addEventListener(
        'DOMContentLoaded',
        hashasFixHeader,
        {once:true}
    );

    window.addEventListener(
        'load',
        hashasFixHeader,
        {once:true}
    );


    /* =========================================
       LOADER
       ========================================= */

    var loaderStart = Date.now();

    function hashasCreateLoader(){

        if(document.getElementById('hashasPageLoader')) return;

        var loader = document.createElement('div');

        loader.id = 'hashasPageLoader';
        loader.setAttribute('aria-hidden','true');

        loader.innerHTML =
            '<div class="hashas-loader-center">' +

                '<img ' +
                    'id="hashasLoaderLogo" ' +
                    'src="https://static.ticimax.cloud/78663/uploads/images/logo/loader_logo.png" ' +
                    'alt="Haşhaş Art Design">' +

                '<div class="hashas-loader-flowers">' +
                    '<span class="hashas-mini-flower"></span>' +
                    '<span class="hashas-mini-flower"></span>' +
                    '<span class="hashas-mini-flower"></span>' +
                '</div>' +

                '<div class="hashas-loader-line"></div>' +

            '</div>';

        document.body.appendChild(loader);
    }


    function hashasCloseLoader(){

        var loader =
            document.getElementById('hashasPageLoader');

        if(!loader || loader.dataset.closing === 'true') return;

        loader.dataset.closing = 'true';

        var remaining =
            Math.max(
                700 - (Date.now() - loaderStart),
                0
            );

        setTimeout(function(){

            loader.classList.add(
                'hashas-loader-hide'
            );

            setTimeout(function(){

                if(loader && loader.parentNode){
                    loader.parentNode.removeChild(loader);
                }

            },700);

        },remaining);
    }


    if(document.body){
        hashasCreateLoader();
    }else{
        document.addEventListener(
            'DOMContentLoaded',
            hashasCreateLoader,
            {once:true}
        );
    }


    if(document.readyState === 'complete'){

        hashasCloseLoader();

    }else{

        window.addEventListener(
            'load',
            hashasCloseLoader,
            {once:true}
        );

    }

    setTimeout(
        hashasCloseLoader,
        6500
    );


    /* =========================================
       SEARCH
       ========================================= */

    function hashasStyleSearch(){

        var search =
            document.querySelector(
                '#divTopProductSearch'
            );

        if(!search) return;


        var overlay =
            search.querySelector(
                '.header-search-form-wrapper'
            );

        var box =
            search.querySelector(
                '.searchform-wrapper'
            );

        var input =
            search.querySelector(
                '#txtbxArama'
            );


        if(overlay){

            overlay.classList.add(
                'hashas-search-overlay'
            );

            overlay.classList.remove(
                'hashas-search-opening'
            );

            void overlay.offsetWidth;

            overlay.classList.add(
                'hashas-search-opening'
            );
        }


        if(box){

            box.classList.remove(
                'hashas-search-box'
            );

            void box.offsetWidth;

            box.classList.add(
                'hashas-search-box'
            );
        }


        if(input){

            input.classList.add(
                'hashas-search-input'
            );
        }
    }


    document.addEventListener(
        'click',
        function(e){

            var button =
                e.target.closest(
                    '#divTopProductSearch .newSearcBtnClick'
                );

            if(!button) return;

            setTimeout(hashasStyleSearch,50);
            setTimeout(hashasStyleSearch,200);

        },
        true
    );


})();
</textarea>


<img
    src="/hashas-uyegiris-bootstrap-404.png"
    alt=""
    style="display:none!important;width:0!important;height:0!important;"
    onerror="
        (function(el){

            var path =
                location.pathname
                .toLowerCase()
                .replace(/\/+$/,'');

            if(
                path !== '/uyegiris' ||
                window.hashasUyeGirisBootstrap
            ){
                el.onerror=null;
                el.remove();
                return;
            }

            window.hashasUyeGirisBootstrap=true;

            var source =
                document.getElementById(
                    'hashasUyeGirisRuntime'
                );

            if(source){

                var runtime =
                    document.createElement(
                        'script'
                    );

                runtime.type =
                    'text/javascript';

                runtime.text =
                    source.value;

                document.head.appendChild(
                    runtime
                );
            }

            el.onerror=null;
            el.remove();

        })(this);
    "
>
