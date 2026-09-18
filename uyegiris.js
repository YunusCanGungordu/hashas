<textarea id="hashasUyeGirisJS" style="display:none!important;">
(function(){

    console.log("UYEGIRIS INLINE JS GERCEKTEN CALISTI");

    alert("UYEGIRIS JS CALISTI");

})();
</textarea>

<img
src="/uyegiris-inline-404.png"
style="display:none!important"
onerror="
(function(el){

    var p=location.pathname
        .toLowerCase()
        .replace(/\/+$/,'');

    if(
        p!='/uyegiris' ||
        window.hashasUyeGirisInline
    ){
        el.onerror=null;
        el.remove();
        return;
    }

    window.hashasUyeGirisInline=true;

    var t=document.getElementById(
        'hashasUyeGirisJS'
    );

    if(t){

        var s=document.createElement(
            'script'
        );

        s.text=t.value;

        document.head.appendChild(s);
    }

    el.onerror=null;
    el.remove();

})(this);
">
