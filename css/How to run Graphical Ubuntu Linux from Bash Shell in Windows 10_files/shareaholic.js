!function(a){function b(){return"Microsoft Internet Explorer"===a.navigator.appName&&v.test(a.navigator.userAgent)&&a.XDomainRequest}function c(c,d){var e;b()?(e=new a.XDomainRequest,e.open("get",c)):(e=new XMLHttpRequest,e.open("get",c,!0)),e.ontimeout=function(){d(new Error("Timeout getting publisher config"))},e.onerror=function(){d(new Error("Error getting publisher config"))},e.onprogress=function(){},e.onload=function(){var a={};try{a=JSON.parse(e.responseText)}catch(a){return d(new Error("Error parsing responseText "+a.message))}d(null,a)},setTimeout(function(){e.send()},0)}function d(b,d,e){var f=x[b];if(!f)return e(new Error("Missing endpoint for environment "+b));var g=a.location.protocol.toString();"file:"===g&&(g="https:"),f=g+f+"/"+d+".json",c(f,e)}function e(a,b){a.document.body?b():setTimeout(function(){e(a,b)},10)}function f(a){var b,c,d=!1;try{b=JSON.parse(localStorage.getItem("SHR_V2_OVERRIDES"))}catch(a){}return b&&b.script&&!window.SHR_OVERRIDE_MODE&&(c=document.createElement("script"),c.setAttribute("data-shr-assetbase",b.script.assetbase),c.setAttribute("data-shr-entrypoint",b.script.entrypoint),c.src=b.script.src,window.SHR_OVERRIDE_MODE=!0,e(a,function(){a.document.body.appendChild(c)}),d=!0),d}function g(){for(var b,c,d=a.document.getElementsByTagName("script"),e=d.length;e--;){if(c=d[e],c.hasAttribute(q))return c;t.test(c.src)&&(b=c)}return b}function h(a,b,c,d,e){function f(){h.onload=function(){var a=this.contentWindow,c=a.document.head;setTimeout(function(){p&&b.push({text:'window.settings.siteid="'+p+'";'});for(var e=0;e<b.length;e++){var f=b[e],g=a.document.createElement("script");g.type="text/javascript",f.text?g.text=f.text:f.src&&(g.src=f.src),c.appendChild(g)}setTimeout(d.bind(null,a),100),this.dataset.loaded="YES"}.bind(this),1)},h.contentWindow.document.open(),g=h.contentWindow.document;var a="https://65156d2850a2480086d4f28a20d8208e@sentry.shareaholic.com/12",c='<script>try{Raven.config("'+a+'", {sampleRate: 0.005}).install()}catch(e){}<\/script>';g.write('<!doctype html><html><head><title></title></head><body><script src="https://cdn.ravenjs.com/3.15.0/raven.min.js"><\/script>'+c+"</body></html>"),g.close()}d=d||function(){};var g,h=a.document.createElement("iframe"),i="SHR-"+Math.round(1e3*Math.random())+1;return h.id=i,c.appendChild(h),e?e(h,f):(h.style.display="none",h.frameBorder="0",setTimeout(f,1)),h}function i(){var a,b,c=!0;return"Microsoft Internet Explorer"===navigator.appName&&(a=navigator.userAgent,b=new RegExp("MSIE ([5-8]{1,}[.0-8]{0,})"),null!=b.exec(a)&&(c=!1)),c}function j(b){var c,d=null;try{d=localStorage.getItem("SHR_LOCAL")}catch(a){}c=b.bookmarklet||d?b.assetbase:/[0-9a-f]{5,40}/.test(w)?(b.assetbase||r)+w+"/":b.assetbase||r;var e="";return c&&0!==c.indexOf("http")&&"file:"===a.location.protocol.toString()&&(e="https:"),e+c}function k(a){for(var b,c,d=/^data-shr-/,e={},f=0,g=a.attributes,h=g.length;f<h;f++)c=g[f],d.test(c.nodeName)&&(b=c.nodeName.replace(d,""),e[b]=c.value);return e.entrypoint=e.entrypoint||s,e.namespace=e.namespace||u,e.assetbase=j(e),e}function l(a,b){function c(c){d(b.environment||"production",c,function(a,b){e(c,b||{})}),a.init=function(){},p=c}var e=a.init;b.siteid?c(b.siteid):a.init=c}function m(b,c){var d=setInterval(function(){var e=document.getElementById(b);e.attributes["data-loaded"]&&"YES"===e.attributes["data-loaded"].nodeValue&&(e.contentWindow.SHR_FRAME||(clearInterval(d),e.parentNode.removeChild(e),n(a,c)))},1500)}function n(a,b){function c(){}function d(a,b,c){a[b]=function(){var d=Array.prototype.slice.call(arguments);a.push(c.concat(d)),a[b].args=d}}var j,n={};if(!i())return{err:"NOT SUPPORTED"};if(b)y=b;else{if(!(j=g(a)))return{err:"COULD NOT LOCATE SCRIPT TAG"};j.parentNode.removeChild(j),y=k(j)}if(!y.assetbase)return{err:"NO ASSET BASE CONFIGURED"};var o=[{text:"window.SHR_FRAME = true;"},{text:"window.settings = "+JSON.stringify(y)+";"},{src:y.assetbase+y.entrypoint||"shrMain.min.js"}];return y.namespace===u&&(c.prototype.Bookmarklet=!0,c.isV2=!0,d(c,"init",["init"]),d(c,"init_bookmarklet",["share",{service:"all"}]),l(c,y),n=c),n.commands=[],n.push=function(a){n.commands.push(a)},f(a)?(n.override=!0,n):(e(a,function(){m(h(a,o,a.document.body).id,y)}),n)}var o,p,q="data-shr-assetbase",r="//dsms0mj1bbhn4.cloudfront.net/v2/",s="shrMain.min.js",t=/shareaholic\.js/,u="Shareaholic",v=/MSIE 9\./,w="45e3e6dd9f02ec20ff4944b09ac2252e6ded9d67",x={dev:"//s3.amazonaws.com/publisher_configurations.staging.shareaholic",stage:"//s3.amazonaws.com/publisher_configurations.staging.shareaholic",production:"//s3.amazonaws.com/publisher_configurations.shareaholic"},y={},z=window.SHR_NAMESPACE||u;a.SHR_FRAME&&"function"==typeof define&&define.amd?define(function(){return h}):(o=n(a),z=y.namespace||z,"[object Array]"===Object.prototype.toString.call(a[z])?(o.commands=a[z],a[z]=o):a[z]=a[z]||o)}(this);