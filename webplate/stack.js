/**
 * webplate-engine.js
 *
 * Author:        Chris Modem
 * Last Edited:   25 August 2013
 * Edited By:   	Chris Modem
 */// ---------- Yepnope
(function(e,t,n){function r(e){return!e||e=="loaded"||e=="complete"||e=="uninitialized"}function i(e,n,i,s,u,a){var f=t.createElement("script"),l,p;s=s||P.errorTimeout;f.src=e;for(p in i)f.setAttribute(p,i[p]);n=a?o:n||m;f.onreadystatechange=f.onload=function(){if(!l&&r(f.readyState)){l=1;n();f.onload=f.onreadystatechange=null}};c(function(){if(!l){l=1;n(1)}},s);A();u?f.onload():h.parentNode.insertBefore(f,h)}function s(e,n,r,i,s,u){var a=t.createElement("link"),f,l;i=i||P.errorTimeout;n=u?o:n||m;a.href=e;a.rel="stylesheet";a.type="text/css";for(l in r)a.setAttribute(l,r[l]);if(!s){A();h.parentNode.insertBefore(a,h);c(n,0)}}function o(){var e=d.shift();v=1;if(e)if(e.t)c(function(){(e["t"]=="c"?P.injectCss:P.injectJs)(e.s,0,e.a,e.x,e.e,1)},0);else{e();o()}else v=0}function u(e,n,i,s,u,a,f){function l(t){if(!m&&r(p.readyState)){w.r=m=1;!v&&o();if(t){e!="img"&&c(function(){b.removeChild(p)},50);for(var i in M[n])M[n].hasOwnProperty(i)&&M[n][i].onload();p.onload=p.onreadystatechange=null}}}f=f||P.errorTimeout;var p=t.createElement(e),m=0,g=0,w={t:i,s:n,e:u,a:a,x:f};if(M[n]===1){g=1;M[n]=[]}if(e=="object"){p.data=n;p.setAttribute("type","text/css")}else{p.src=n;p.type=e}p.width=p.height="0";p.onerror=p.onload=p.onreadystatechange=function(){l.call(this,g)};d.splice(s,0,w);if(e!="img")if(g||M[n]===2){A();b.insertBefore(p,y?null:h);c(l,f)}else M[n].push(p)}function a(e,t,n,r,i){v=0;t=t||"j";if(k(e))u(t=="c"?T:x,e,t,this.i++,n,r,i);else{d.splice(this.i++,0,e);d.length==1&&o()}return this}function f(){var e=P;e.loader={load:a,i:0};return e}var l=t.documentElement,c=e.setTimeout,h=t.getElementsByTagName("script")[0],p={}.toString,d=[],v=0,m=function(){},g="MozAppearance"in l.style,y=g&&!!t.createRange().compareNode,b=y?l:h.parentNode,w=e.opera&&p.call(e.opera)=="[object Opera]",E=!!t.attachEvent&&!w,S="webkitAppearance"in l.style&&!("async"in t.createElement("script")),x=g?"object":E||S?"script":"img",T=E?"script":S?"img":x,N=Array.isArray||function(e){return p.call(e)=="[object Array]"},C=function(e){return Object(e)===e},k=function(e){return typeof e=="string"},L=function(e){return p.call(e)=="[object Function]"},A=function(){if(!h||!h.parentNode)h=t.getElementsByTagName("script")[0]},O=[],M={},_={timeout:function(e,t){t.length&&(e.timeout=t[0]);return e}},D,P;P=function(e){function t(e){var t=e.split("!"),n=O.length,r=t.pop(),i=t.length,s={url:r,origUrl:r,prefixes:t},o,u,a;for(u=0;u<i;u++){a=t[u].split("=");o=_[a.shift()];o&&(s=o(s,a))}for(u=0;u<n;u++)s=O[u](s);return s}function r(e){var t=e.split("?")[0];return t.substr(t.lastIndexOf(".")+1)}function i(e,i,s,o,u){var a=t(e),l=a.autoCallback,c=r(a.url);if(a.bypass)return;i&&(i=L(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]);if(a.instead)return a.instead(e,i,s,o,u);M[a.url]&&a.reexecute!==!0?a.noexec=!0:M[a.url]=1;e&&s.load(a.url,a.forceCSS||!a.forceJS&&"css"==r(a["url"])?"c":n,a.noexec,a.attrs,a.timeout);(L(i)||L(l))&&s.load(function(){f();i&&i(a.origUrl,u,o);l&&l(a.origUrl,u,o);M[a.url]=2})}function s(e,t){function n(e,n){if(""!==e&&!e)!n&&f();else if(k(e)){n||(u=function(){var e=[].slice.call(arguments);a.apply(this,e);f()});i(e,u,t,0,r)}else if(C(e)){l=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}();for(c in e)if(e.hasOwnProperty(c)){!n&&!--l&&(L(u)?u=function(){var e=[].slice.call(arguments);a.apply(this,e);f()}:u[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t);f()}}(a[c]));i(e[c],u,t,c,r)}}}var r=!!e.test,s=r?e.yep:e.nope,o=e.load||e.both,u=e.callback||m,a=u,f=e.complete||m,l,c;n(s,!!o||!!e.complete);o&&n(o);!o&&!!e.complete&&n("")}var o,u,a=this.yepnope.loader;if(k(e))i(e,0,a,0);else if(N(e))for(o=0;o<e.length;o++){u=e[o];k(u)?i(u,0,a,0):N(u)?P(u):C(u)&&s(u,a)}else C(e)&&s(e,a)};P.addPrefix=function(e,t){_[e]=t};P.addFilter=function(e){O.push(e)};P.errorTimeout=1e4;if(t.readyState==null&&t.addEventListener){t.readyState="loading";t.addEventListener("DOMContentLoaded",D=function(){t.removeEventListener("DOMContentLoaded",D,0);t.readyState="complete"},0)}e.yepnope=f();e.yepnope.executeStack=o;e.yepnope.injectJs=i;e.yepnope.injectCss=s})(this,document);(function(e){e.addPrefix("css",function(e){e.forceCSS=!0;return e})})(this.yepnope);yepnope.addPrefix("less",function(e){e.forceCSS=!0;e.attrs={rel:"stylesheet",type:"text/less"};return e});(function(e,t,n){yepnope.injectCss=function(e,t,n,r,i,s){var o=document.createElement("link"),u=function(){if(!l){l=1;o.removeAttribute("id");setTimeout(t,0)}},a="yn"+ +(new Date),f,l,c;t=s?yepnope.executeStack:t||function(){};r=r||yepnope.errorTimeout;o.href=e;o.rel="stylesheet";o.type="text/css";o.id=a;for(c in n)o.setAttribute(c,n[c]);if(!i){f=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];f.parentNode.insertBefore(o,f);o.onload=u;function h(){try{var e=document.styleSheets;for(var t=0,n=e.length;t<n;t++)if(e[t].ownerNode.id==a&&e[t].cssRules.length)return u();throw new Error}catch(r){setTimeout(h,20)}}h()}}})(this,this.document);var $ar_path=window.location.href.split("/"),$protocol=$ar_path[0],$host=$ar_path[2],$base_url=$protocol+"//"+$host,$crt_script=document.getElementById("webplate-stack"),$crt_script_src=$crt_script.getAttribute("src").replace("webplate/stack.js",""),$root=$crt_script_src,$js_path=$root+"webplate/core/js/",$css_path=$root+"webplate/core/css/",$less_path=$root+"webplate/core/less/",$icomoon_path=$root+"webplate/core/icomoon/",$js_extras_path=$root+"webplate/extras/js/",$css_extras_path=$root+"webplate/extras/css/",$less_extras_path=$root+"webplate/extras/less/",$is_less=!1,$ar_js_core=[$js_path+"min/webplate-jquery.min.js",$js_path+"min/webplate-modernizr.min.js"],$ar_js_extras=[],$ar_css_core=[$css_path+"webplate.css",$icomoon_path+"style.css"],$ar_css_extras=[];yepnope([{load:$ar_js_core,complete:function(){jQuery.web_lock_submit=function(e){$(e).live("keypress",function(e){if(e.keyCode==13)return!1})};jQuery.web_exists=function(e){return $(e).length>0?!0:!1};jQuery.web_get_extension=function(e){return e.split(".").pop().toLowerCase()};jQuery.web_crt_db_date=function(){$current_time=new Date;$year=$current_time.getFullYear();$month=$current_time.getMonth()+1;$month<10&&($month="0"+$month);$day=$current_time.getDate();$day<10&&($day="0"+$day);return $year+"-"+$month+"-"+$day};jQuery.web_check_date=function(e){return e.substr(4,1)=="-"&&e.substr(7,1)=="-"&&$.scrap_is_integer(e.substr(0,4))==1&&$.scrap_is_integer(e.substr(5,2))==1&&$.scrap_is_integer(e.substr(8,2))==1&&e.length==10?!0:!1};jQuery.web_is_time=function(e){if(e!=""){var t="0123456789.:",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_is_integer=function(e){if(e!=""){var t="0123456789.",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_is_full_integer=function(e){if(e!=""){var t="0123456789",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_has_white_space=function(e){return e.indexOf(" ")!=-1?!0:!1};jQuery.web_allowed_doc=function(e,t){t==null&&(t=["png","jpg","jpeg","gif","tif","tiff","bmp","doc","docx","xls","xlsx","pdf","txt","csv"]);$file_ext=e.split(".").pop().toLowerCase();return jQuery.inArray($file_ext,t)==-1?!1:!0};jQuery.web_input_mirror=function(e,t){$($selector).keyup(function(){$ref_input=$(this).val();$ref_value=$ref_input.replace(/ /g,"_").toLowerCase();$(t).text($ref_value)})};jQuery.web_is_email=function(e){return e.indexOf("@")!=-1&&e.indexOf(".")!=-1?!0:!1};jQuery.web_is_password=function(e){if(e.length>5){$num_check=/^[0-9]+$/;$letter_check=/^[a-zA-Z-]+$/;$error=!1;e.match($num_check)&&($error=!0);e.match($letter_check)&&($error=!0);return $error==1?!1:!0}return!1};jQuery.web_is_image=function(e,t){t==null&&(t=["jpg","jpeg","gif","tif","tiff","bmp","png"]);$file_ext=e.split(".").pop().toLowerCase();return jQuery.inArray($file_ext,t)==-1?!1:!0};jQuery.web_is_color=function(e){if(e.length!=7)return!1;if(e.substr(0,1)!="#")return!1};jQuery.web_random_string=function(e){$chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";e==null&&(e=5);$random_string="";for(var t=0;t<e;t++){$r_num=Math.floor(Math.random()*$chars.length);$random_string+=$chars.substring($r_num,$r_num+1)}return $random_string};jQuery.web_show_overlay=function(){$(".webplate-overlay").fadeIn()};jQuery.web_remove_overlay=function(){$(".webplate-overlay").fadeOut()};jQuery.web_show_modal=function(e){if($(e).is(":hidden")==1){e==""&&(e=".modal-basic");$modal_height=$(e).height();$(".webplate-overlay").fadeIn();$(e).css({top:-($modal_height+50)}).show();$(e).animate({top:0},"fast")}};jQuery.web_hide_modal=function(){$(".modal:visible .close").live("click",function(){$modal_height=$(".modal:visible").height();$(".webplate-overlay").fadeOut();$(".modal:visible").animate({top:-($modal_height+50)},"fast",function(){$(".modal:visible").hide()})})};jQuery.web_log=function(e){window.console&&console.log(e)};jQuery.web_navigation=function(){$("body").prepend($(".navigation").clone().addClass("webplate-navigation").removeClass("navigation"));$(".navigation-trigger").on("click",function(e){e.preventDefault();$("html").hasClass("show-nav")?$("html").removeClass("show-nav").addClass("hide-nav"):$("html").addClass("show-nav").removeClass("hide-nav")});$(".webplate").on("click",function(e){$("html").hasClass("nav-open")&&$("html").removeClass("show-nav").addClass("hide-nav")});$(".navigation-trigger").hasClass("small-show")==0&&$(".navigation-trigger").addClass("small-show");$(".webplate-navigation a").on("click",function(){$(".webplate-navigation a.active").removeClass("active");$(this).addClass("active");$("html").removeClass("show-nav").addClass("hide-nav")});$(document).on("touchmove",function(e){$("html").hasClass("show-nav")&&e.preventDefault()});$("body").on("touchstart",".navigation-inner",function(e){e.currentTarget.scrollTop===0?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1)});$("body").on("touchmove",".navigation-inner",function(e){e.stopPropagation()})};jQuery.web_window_type=function(){$.web_window_type_execute();$(window).resize(function(){$.web_window_type_execute()})};jQuery.web_window_type_execute=function(){$("html.no-touch.show-nav").removeClass("show-nav").addClass("hide-nav");$(".webplate-shifter").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$("html").hasClass("show-nav")==1?$("html").addClass("nav-open"):$("html").removeClass("nav-open")});if($(window).width()<=700){$("html").addClass("web-small-view");$("html").removeClass("web-large-view")}else{$("html").removeClass("web-small-view");$("html").addClass("web-large-view")}};jQuery.web_forms=function(){$(document).ready(function(){$form_colour="-blue";$data_form_colour=$("body").data("forms-colour");$ar_form_colours=["red","green","blue","aero","grey","orange","yellow","pink","purple"];$data_form_colour&&$data_form_colour.length>0&&jQuery.inArray($data_form_colour,$ar_form_colours)>-1&&($form_colour="-"+$data_form_colour);$("html").addClass("web-forms-colour"+$form_colour);$("input").iCheck({checkboxClass:"icheckbox_square"+$form_colour,radioClass:"iradio_square"+$form_colour,increaseArea:"20%",labelHover:!0});$("select").wrap('<span class="drop-down"></span>')})};(function(e,t,n,r){"use strict";function i(t,n){this.options=e.extend({},u,n);this._defaults=u;this._name=s;this.$element=e(t);this.init()}var s="menuButton",o=".button-dropdown",u={propertyName:"value"};i.prototype={constructor:i,init:function(){this.toggle()},toggle:function(e,t){this.$element.data("dropdown")==="show"?this.hideMenu():this.showMenu()},showMenu:function(){this.$element.data("dropdown","show");this.$element.find("ul").show();if(this.$overlay)this.$overlay.show();else{this.$overlay=e('<div class="button-overlay"></div>');this.$element.append(this.$overlay)}},hideMenu:function(){this.$element.data("dropdown","hide");this.$element.find("ul").hide();this.$overlay.hide()}};e.fn[s]=function(t){return this.each(function(){e.data(this,"plugin_"+s)?e.data(this,"plugin_"+s).toggle():e.data(this,"plugin_"+s,new i(this,t))})};e(n).on("click","[data-buttons=dropdown]",function(t){var n=e(t.currentTarget);n.menuButton()});e(n).on("click","[data-buttons=dropdown] > a",function(e){e.preventDefault()})})(jQuery,window,document);(function(e){function t(e,t,i){var s=e[0];o=/er/.test(i)?m:/bl/.test(i)?d:h,active=i==g?{checked:s[h],disabled:s[d],indeterminate:e.attr(m)=="true"||e.attr(v)=="false"}:s[o];if(/^(ch|di|in)/.test(i)&&!active)n(e,o);else if(/^(un|en|de)/.test(i)&&active)r(e,o);else if(i==g)for(var o in active)active[o]?n(e,o,!0):r(e,o,!0);else if(!t||i=="toggle"){t||e[x]("ifClicked");active?s[y]!==c&&r(e,o):n(e,o)}}function n(t,n,i){var l=t[0],g=t.parent(),b=n==h,w=n==m,x=w?v:b?p:"enabled",T=s(l,x+o(l[y])),C=s(l,n+o(l[y]));if(l[n]!==!0){if(!i&&n==h&&l[y]==c&&l.name){var k=t.closest("form"),L='input[name="'+l.name+'"]';L=k.length?k.find(L):e(L);L.each(function(){this!==l&&e.data(this,a)&&r(e(this),n)})}if(w){l[n]=!0;l[h]&&r(t,h,"force")}else{i||(l[n]=!0);b&&l[m]&&r(t,m,!1)}u(t,b,n,i)}l[d]&&!!s(l,N,!0)&&g.find("."+f).css(N,"default");g[E](C||s(l,n));g[S](T||s(l,x)||"")}function r(e,t,n){var r=e[0],i=e.parent(),a=t==h,l=t==m,c=l?v:a?p:"enabled",g=s(r,c+o(r[y])),b=s(r,t+o(r[y]));if(r[t]!==!1){if(l||!n||n=="force")r[t]=!1;u(e,a,c,n)}!r[d]&&!!s(r,N,!0)&&i.find("."+f).css(N,"pointer");i[S](b||s(r,t)||"");i[E](g||s(r,c))}function i(t,n){if(e.data(t,a)){var r=e(t);r.parent().html(r.attr("style",e.data(t,a).s||"")[x](n||""));r.off(".i").unwrap();e(T+'[for="'+t.id+'"]').add(r.closest(T)).off(".i")}}function s(t,n,r){if(e.data(t,a))return e.data(t,a).o[n+(r?"":"Class")]}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e,t,n,r){if(!r){t&&e[x]("ifToggled");e[x]("ifChanged")[x]("if"+o(n))}}var a="iCheck",f=a+"-helper",l="checkbox",c="radio",h="checked",p="un"+h,d="disabled",v="determinate",m="in"+v,g="update",y="type",b="click",w="touchbegin.i touchend.i",E="addClass",S="removeClass",x="trigger",T="label",N="cursor",C=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);e.fn[a]=function(s,o){var u=":"+l+", :"+c,p=e(),v=function(t){t.each(function(){var t=e(this);t.is(u)?p=p.add(t):p=p.add(t.find(u))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(s)){s=s.toLowerCase();v(this);return p.each(function(){s=="destroy"?i(this,"ifDestroyed"):t(e(this),!0,s);e.isFunction(o)&&o()})}if(typeof s=="object"||!s){var N=e.extend({checkedClass:h,disabledClass:d,indeterminateClass:m,labelHover:!0},s),k=N.handle,L=N.hoverClass||"hover",A=N.focusClass||"focus",O=N.activeClass||"active",M=!!N.labelHover,_=N.labelHoverClass||"hover",D=(""+N.increaseArea).replace("%","")|0;if(k==l||k==c)u=":"+k;D<-50&&(D=-50);v(this);return p.each(function(){i(this);var s=e(this),o=this,u=o.id,p=-D+"%",v=100+D*2+"%",m={position:"absolute",top:p,left:p,display:"block",width:v,height:v,margin:0,padding:0,background:"#fff",border:0,opacity:0},k=C?{position:"absolute",visibility:"hidden"}:D?m:{position:"absolute",opacity:0},P=o[y]==l?N.checkboxClass||"i"+l:N.radioClass||"i"+c,H=e(T+'[for="'+u+'"]').add(s.closest(T)),B=s.wrap('<div class="'+P+'"/>')[x]("ifCreated").parent().append(N.insert),j=e('<ins class="'+f+'"/>').css(m).appendTo(B);s.data(a,{o:N,s:s.attr("style")}).css(k);!!N.inheritClass&&B[E](o.className);!!N.inheritID&&u&&B.attr("id",a+"-"+u);B.css("position")=="static";t(s,!0,g);H.length&&H.on(b+".i mouseenter.i mouseleave.i "+w,function(n){var r=n[y],i=e(this);if(!o[d]){if(r==b)t(s,!1,!0);else if(M)if(/ve|nd/.test(r)){B[S](L);i[S](_)}else{B[E](L);i[E](_)}if(!C)return!1;n.stopPropagation()}});s.on(b+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[y],i=e.keyCode;if(t==b)return!1;if(t=="keydown"&&i==32){if(o[y]!=c||!o[h])o[h]?r(s,h):n(s,h);return!1}t=="keyup"&&o[y]==c?!o[h]&&n(s,h):/us|ur/.test(t)&&B[t=="blur"?S:E](A)});j.on(b+" mousedown mouseup mouseover mouseout "+w,function(e){var n=e[y],r=/wn|up/.test(n)?O:L;if(!o[d]){if(n==b)t(s,!1,!0);else{/wn|er|in/.test(n)?B[E](r):B[S](r+" "+O);H.length&&M&&r==L&&H[/ut|nd/.test(n)?S:E](_)}if(!C)return!1;e.stopPropagation()}})})}return this}})(jQuery);$("body").wrapInner('<div class="webplate" />');$(".webplate").wrapInner('<div class="webplate-shifter" />');$(".webplate-shifter").wrapInner('<div class="webplate-content" />');$(".webplate").prepend('<div class="webplate-overlay" />');$(".navigation").wrapInner('<div class="navigation-inner" />');$(".is-fixed").appendTo("body");$.web_navigation();$.web_window_type();$.web_forms();Modernizr.touch&&yepnope({load:$js_path+"min/webplate-touch.min.js",complete:function(){FastClick.attach(document.body)}})}},{load:$ar_css_core,complete:function(){$css_extras=$("body").data("css-extras");if($css_extras&&$css_extras.length>0){$split_css_extras=$css_extras.split(",");$.each($split_css_extras,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);if($extension=="css")$ar_css_extras.push($css_extras_path+t);else if($extension=="less"){$ar_css_extras.push("less!"+$less_extras_path+t);$ar_css_extras.push($js_path+"min/webplate-less.min.js")}});yepnope({load:$ar_css_extras,complete:function(){$("body").show()}})}else $("body").show();$js_extras=$("body").data("js-extras");if($js_extras&&$js_extras.length>0){$split_js_extras=$js_extras.split(",");$.each($split_js_extras,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);$extension=="js"&&$ar_js_extras.push($js_extras_path+t)});yepnope({load:$ar_js_extras})}}}]);