<img
src="/uyegiris-loader-404.png"
style="display:none!important"
onerror="
if(
    location.pathname.toLowerCase().replace(/\/+$/,'')==='/uyegiris' &&
    !window.hashasUyeGirisExternal
){
    window.hashasUyeGirisExternal=true;

    var s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/gh/KULLANICIADI/hashas-site-scripts@main/uyegiris.js';
    s.async=false;
    document.head.appendChild(s);
}

this.onerror=null;
this.remove();
">
