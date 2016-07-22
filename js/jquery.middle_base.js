/* __________________ SUPPORTS TOUCH OR NOT  __________________*/
/*!	Detects touch support and adds appropriate classes to html and returns a JS object  |  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au / Licensed under the MIT license  |  https://coderwall.com/p/egbgdw */
var supports=(function(){var d=document.documentElement,c="ontouchstart" in window||navigator.msMaxTouchPoints;if(c){d.className+=" touch";return{touch:true}}else{d.className+=" no-touch";return{touch:false}}})();


/* __________________ DETECTS ANDROID BROWSER (NOT THE DEVICE)  __________________*/
$(function(){var a=navigator.userAgent;var b=(a.indexOf("Mozilla/5.0")>-1&&a.indexOf("Android ")>-1&&a.indexOf("AppleWebKit")>-1&&a.indexOf("Chrome")===-1);if(b){$("html").addClass("android")}else{$("html").addClass("no-android")}});


/* __________________ FIT TEXT used on .banner h1 spans __________________*/
/*! * FitText.js 1.2  |  Copyright 2011, Dave Rupert http://daverupert.com | Released under the WTFPL license  |  http://sam.zoy.org/wtfpl/  |  Date: Thu May 05 14:23:00 2011 -0600  */

(function(a){a.fn.fitText=function(d,b){var e=d||1,c=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},b);return this.each(function(){var f=a(this);var g=function(){f.css("font-size",Math.max(Math.min(f.width()/(e*10),parseFloat(c.maxFontSize)),parseFloat(c.minFontSize)))};g();a(window).on("resize.fittext orientationchange.fittext",g)})}})(jQuery);


/* __________________ Cookie __________________*/
/*!jQuery Cookie Plugin v1.3.1 / https://github.com/carhartl/jquery-cookie  |  Copyright 2013 Klaus Hartl / Released under the MIT license */
 
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(c){var a=/\+/g;function d(f){if(b.raw){return f}try{return decodeURIComponent(f.replace(a," "))}catch(g){}}function e(f){if(f.indexOf('"')===0){f=f.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}f=d(f);try{return b.json?JSON.parse(f):f}catch(g){}}var b=c.cookie=function(n,m,r){if(m!==undefined){r=c.extend({},b.defaults,r);if(typeof r.expires==="number"){var o=r.expires,q=r.expires=new Date();q.setDate(q.getDate()+o)}m=b.json?JSON.stringify(m):String(m);return(document.cookie=[b.raw?n:encodeURIComponent(n),"=",b.raw?m:encodeURIComponent(m),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join(""))}var s=n?undefined:{};var p=document.cookie?document.cookie.split("; "):[];for(var k=0,h=p.length;k<h;k++){var j=p[k].split("=");var f=d(j.shift());var g=j.join("=");if(n&&n===f){s=e(g);break}if(!n&&(g=e(g))!==undefined){s[f]=g}}return s};b.defaults={};c.removeCookie=function(g,f){if(c.cookie(g)!==undefined){c.cookie(g,"",c.extend({},f,{expires:-1}));return true}return false}}));

/* __________________ MAIN MENU (uses cookie) __________________*/
/*! DC jQuery Vertical Accordion Menu - jQuery vertical accordion menu plugin  |  Copyright (c) 2011 Design Chemical
    Dual licensed under the MIT and GPL licenses: http://www.opensource.org/licenses/mit-license.php  | http://www.gnu.org/licenses/gpl.html */

(function(a){a.fn.dcAccordion=function(c){var e={classParent:"dcjq-parent",classActive:"active",classArrow:"dcjq-icon",classCount:"dcjq-count",classExpand:"dcjq-current-parent",eventType:"click",hoverDelay:300,menuClose:true,autoClose:true,autoExpand:false,speed:"slow",saveState:true,disableLink:true,showCount:false,cookie:"dcjq-accordion"};var c=a.extend(e,c);this.each(function(p){var h=this;l();if(e.saveState==true){d(e.cookie,h)}if(e.autoExpand==true){a("li."+e.classExpand+" > a").addClass(e.classActive)}j();if(e.eventType=="hover"){var g={sensitivity:2,interval:e.hoverDelay,over:o,timeout:e.hoverDelay,out:n};a("li a",h).hoverIntent(g);var f={sensitivity:2,interval:1000,over:m,timeout:1000,out:i};a(h).hoverIntent(f);if(e.disableLink==true){a("li a",h).click(function(q){if(a(this).siblings("ul").length>0){q.preventDefault()}})}}else{a("li a",h).click(function(q){$activeLi=a(this).parent("li");$parentsLi=$activeLi.parents("li");$parentsUl=$activeLi.parents("ul");if(e.disableLink==true){if(a(this).siblings("ul").length>0){q.preventDefault()}}if(e.autoClose==true){k($parentsLi,$parentsUl)}if(a("> ul",$activeLi).is(":visible")){a("ul",$activeLi).slideUp(e.speed);a("a",$activeLi).removeClass(e.classActive)}else{a(this).siblings("ul").slideToggle(e.speed);a("> a",$activeLi).addClass(e.classActive)}if(e.saveState==true){b(e.cookie,h)}})}function l(){$arrow='<span class="'+e.classArrow+'"></span>';var q=e.classParent+"-li";a("> ul",h).show();a("li",h).each(function(){if(a("> ul",this).length>0){a(this).addClass(q);a("> a",this).addClass(e.classParent).append($arrow)}});a("> ul",h).hide();if(e.showCount==true){a("li."+q,h).each(function(){if(e.disableLink==true){var r=parseInt(a("ul a:not(."+e.classParent+")",this).length)}else{var r=parseInt(a("ul a",this).length)}a("> a",this).append(' <span class="'+e.classCount+'">('+r+")</span>")})}}function o(){$activeLi=a(this).parent("li");$parentsLi=$activeLi.parents("li");$parentsUl=$activeLi.parents("ul");if(e.autoClose==true){k($parentsLi,$parentsUl)}if(a("> ul",$activeLi).is(":visible")){a("ul",$activeLi).slideUp(e.speed);a("a",$activeLi).removeClass(e.classActive)}else{a(this).siblings("ul").slideToggle(e.speed);a("> a",$activeLi).addClass(e.classActive)}if(e.saveState==true){b(e.cookie,h)}}function n(){}function m(){}function i(){if(e.menuClose==true){a("ul",h).slideUp(e.speed);a("a",h).removeClass(e.classActive);b(e.cookie,h)}}function k(q,r){a("ul",h).not(r).slideUp(e.speed);a("a",h).removeClass(e.classActive);a("> a",q).addClass(e.classActive)}function j(){a("ul",h).hide();$allActiveLi=a("a."+e.classActive,h);$allActiveLi.siblings("ul").show()}});function d(g,i){var f=a.cookie(g);if(f!=null){var h=f.split(",");a.each(h,function(k,m){var j=a("li:eq("+m+")",i);a("> a",j).addClass(e.classActive);var l=j.parents("li");a("> a",l).addClass(e.classActive)})}}function b(g,h){var f=[];a("li a."+e.classActive,h).each(function(j){var l=a(this).parent("li");var k=a("li",h).index(l);f.push(k)});a.cookie(g,f,{path:"/"})}}})(jQuery);





/* __________________ INITIALIZATIONS  __________________*/

$(document).ready(function () {


    /* ----  tooltips and popover (bootstrap.min.js)  -------- */

    if ($('html').hasClass('no-touch')) { // hover doesn't work on touch, so don't use

    /* ----  hover tooltip -------- */
        $('.tooltip-hover').tooltip({trigger: 'hover',container: 'body'});

    /* ----  hover popover -------- */
        $('.popover-hover').popover({ trigger: 'hover'});
    } // end if html has class no-touch


    /* ----  click tooltip -------- */
    $('.tooltip-click').tooltip({trigger: 'click',container: 'body'});

    /* ----  click popover -------- */
    $('.popover-click').popover({trigger: 'click'});


    /* ----------  fitText   -------- */
    $(".banner .line-1").fitText(.9);
    $(".banner .line-2").fitText(1.2);

    /* ----------  .primary-nav   -------- */
    $('.primary-nav').dcAccordion({
        saveState: false,
        autoClose: true,
        disableLink: true,
        speed: "fast",
        showCount: false, 
        autoExpand: false
    });

/*
    /* ----------   toggle-search   -------- */
    $('.toggle-search').click(function () {
        $('html').toggleClass('search-open');
    });
    
    
    /* ----------   toggle-menu   -------- */
    $('.toggle-menu').click(function () {
        $('#nav').slideToggle();
        $('html').toggleClass('menu-open');
    });

}); // end document ready


    /* ----------  hide left or right side navigation when the other is clicked  -------- */
   $(document).click(function (a) {
        if ($(a.target).parents().index($(".nav-left")) == -1) {
            $(".nav-left ul ul").slideUp("fast", function () {
                if ($(".nav-left ul ul").is(":visible")) {}
                $(".nav-left ul a").removeClass("active")
            })
        }
    });
    
    $(document).click(function (a) {
        if ($(a.target).parents().index($(".nav-right")) == -1) {
            $(".nav-right ul ul").slideUp("fast", function () {
                if ($(".nav-right ul ul").is(":visible")) {}
                $(".nav-right ul a").removeClass("active")
            })
        }
    });   
    

    /* ----------  hide navigation when clicked or tapped off  -------- */
    $(document).click(function (a) {
        if ($(a.target).parents().index($("#nav")) == -1) {
            $("#nav ul ul").slideUp("fast", function () {
                if ($("#nav ul ul").is(":visible")) {}
                $("#nav ul a").removeClass("active")
            })
        }
    });
    $(document).on("touchstart", function (a) {
        if ($(a.target).parents().index($("#nav")) == -1) {
            $("#nav ul ul").slideUp("fast", function () {
                if ($("#nav ul ul").is(":visible")) {}
                $("#nav ul a").removeClass("active")
            })
        }
    });



/* __________________ SCROLL TO TOP __________________*/

if ($("html").hasClass("ie8")) { // avoid IE8 bug

    $('#go-to-top').hide();
}

if ($("html").hasClass("boxshadow")) { // avoid IE8 bug

    $(document).ready(function () {

        $('#go-to-top').hide();

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#go-to-top').fadeIn();
            } else {
                $('#go-to-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('#go-to-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });

} // end if html has class boxshadow



/* ========================== OLDER BROWSER SUPPORT ====================================== */

/* __________________ PLACEHOLDER __________________*/

$(document).ready(function(){if(!Modernizr.input.placeholder){$("input").each(function(){var a=$(this);if(a.val()==""&&a.attr("placeholder")!=""){a.val(a.attr("placeholder"));a.focus(function(){if(a.val()==a.attr("placeholder")){a.val("")}});a.blur(function(){if(a.val()==""){a.val(a.attr("placeholder"))}});$(a).closest("form").submit(function(){var b=$(this);if(!b.hasClass("placeholderPending")){$("input",this).each(function(){var c=$(this);if(c.val()==c.attr("placeholder")){c.val("")}});b.addClass("placeholderPending")}})}})}});



/* __________________ RENDER ICONS ON IE 8 __________________*/
if ($("html").hasClass("ie8")) {

    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    style.styleSheet.cssText = ':before,:after{content:none !important';
    head.appendChild(style);
    setTimeout(function () {
        head.removeChild(style);
    }, 0);

} // end if ie8
