!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=82)}({82:function(e,t,n){"use strict";n.r(t);var r=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(e,t){return function(n,i,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,l=e[t];if(o(n)&&r(i))if("function"==typeof s)if("number"==typeof a){var c={callback:s,priority:a,namespace:i};if(l[n]){var u,d=l[n].handlers;for(u=d.length;u>0&&!(a>=d[u-1].priority);u--);u===d.length?d[u]=c:d.splice(u,0,c),l.__current.forEach((function(e){e.name===n&&e.currentIndex>=u&&e.currentIndex++}))}else l[n]={handlers:[c],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,i,s,a)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,s){var a=e[t];if(o(i)&&(n||r(s))){if(!a[i])return 0;var l=0;if(n)l=a[i].handlers.length,a[i]={runs:a[i].runs,handlers:[]};else for(var c=a[i].handlers,u=function(e){c[e].namespace===s&&(c.splice(e,1),l++,a.__current.forEach((function(t){t.name===i&&t.currentIndex>=e&&t.currentIndex--})))},d=c.length-1;d>=0;d--)u(d);return"hookRemoved"!==i&&e.doAction("hookRemoved",i,s),l}}};var a=function(e,t){return function(n,r){var o=e[t];return void 0!==r?n in o&&o[n].handlers.some((function(e){return e.namespace===r})):n in o}};var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;var i=o[r].handlers;for(var s=arguments.length,a=new Array(s>1?s-1:0),l=1;l<s;l++)a[l-1]=arguments[l];if(!i||!i.length)return n?a[0]:void 0;var c={name:r,currentIndex:0};for(o.__current.push(c);c.currentIndex<i.length;){var u=i[c.currentIndex],d=u.callback.apply(null,a);n&&(a[0]=d),c.currentIndex++}return o.__current.pop(),n?a[0]:void 0}};var c=function(e,t){return function(){var n,r,o=e[t];return null!==(n=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var u=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var d=function(e,t){return function(n){var r=e[t];if(o(n))return r[n]&&r[n].runs?r[n].runs:0}},h=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=s(this,"actions"),this.removeFilter=s(this,"filters"),this.hasAction=a(this,"actions"),this.hasFilter=a(this,"filters"),this.removeAllActions=s(this,"actions",!0),this.removeAllFilters=s(this,"filters",!0),this.doAction=l(this,"actions"),this.applyFilters=l(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")};var f=function(){return new h},v=f();v.addAction,v.addFilter,v.removeAction,v.removeFilter,v.hasAction,v.hasFilter,v.removeAllActions,v.removeAllFilters,v.doAction,v.applyFilters,v.currentAction,v.currentFilter,v.doingAction,v.doingFilter,v.didAction,v.didFilter,v.actions,v.filters;window.isEditMode=!1,window.ea={hooks:f(),isEditMode:!1},ea.hooks.addAction("widgets.reinit","ea",(function(e){var t=jQuery(".eael-filter-gallery-container",e),n=jQuery(".eael-post-grid:not(.eael-post-carousel)",e),r=jQuery(".eael-twitter-feed-masonry",e),o=jQuery(".eael-instafeed",e),i=jQuery(".premium-gallery-container",e),s=jQuery(".eael-event-calendar-cls",e),a=jQuery(".eael-testimonial-slider",e),l=jQuery(".eael-tm-carousel",e),c=jQuery(".eael-post-carousel:not(.eael-post-grid)",e),u=jQuery(".eael-logo-carousel",e),d=jQuery(".eael-twitter-feed-carousel",e);t.length&&t.isotope("layout"),n.length&&n.isotope("layout"),r.length&&r.isotope("layout"),o.length&&o.isotope("layout"),i.length&&i.isotope("layout"),s.length&&ea.hooks.doAction("eventCalendar.reinit"),a.length&&ea.hooks.doAction("testimonialSlider.reinit"),l.length&&ea.hooks.doAction("teamMemberCarousel.reinit"),c.length&&ea.hooks.doAction("postCarousel.reinit"),u.length&&ea.hooks.doAction("logoCarousel.reinit"),d.length&&ea.hooks.doAction("twitterCarousel.reinit")})),jQuery(window).on("elementor/frontend/init",(function(){window.isEditMode=elementorFrontend.isEditMode(),window.ea.isEditMode=elementorFrontend.isEditMode(),ea.hooks.doAction("init"),ea.isEditMode&&ea.hooks.doAction("editMode.init")}))}});jQuery(document).ready(function($) {
    /*
//Bug Cart Count
if( $('.woocommerce-mini-cart__empty-message').html() == 'No products in the cart.' ) {
    $('span.count').html('0');
}    
    */
    
//clas: none-button-input
if( $('#check-30-day').is(":checked") ) {
    $('.cost-one-bottle').html('35');
    $('#input-one-time').addClass('none-button-input');
}
if( $('#check-one-time').is(":checked") ) {
    $('.cost-one-bottle').html('39');
    $('#input-30-day').addClass('none-button-input');
}

$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  console.log($(this))
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    
    if($box.attr('id') == 'check-30-day' ){
        $('.cost-one-bottle').html('35');
        $('#input-30-day').removeClass('none-button-input');
        $('#input-one-time').addClass('none-button-input');
    }else {
        $('.cost-one-bottle').html('39');
        $('#input-30-day').addClass('none-button-input');
        $('#input-one-time').removeClass('none-button-input');
    }
    
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
    if($box.attr('id') == 'check-30-day' ){
        $('#input-30-day').addClass('none-button-input');
        $('#input-one-time').removeClass('none-button-input');
    }else {
        $('#input-30-day').removeClass('none-button-input');
        $('#input-one-time').addClass('none-button-input');
    }
  }
});

//Scroll product options
$('#add-to-cart').on('click', function() {
		$('html, body').animate({
        	scrollTop: $("#product-options").offset().top
	    }, 2000);
	});	
	
	
	
	
	//#one-time-btn
	setBtnBottle('Turmeric','#input-one-time',3682,1,'TUR-SUP-BOT-ONE')
	//#six-btn
	setBtnBottle('Turmeric','#six-btn',3685,1,'TUR-SUP-BOT-SIX')
	//#three-btn
	setBtnBottle('Turmeric','#three-btn',3686,1,'TUR-SUP-BOT-TRI')
	//Supplements set attr btn
	function setBtnBottle(name,elem,id,quantity,sku) {
		const btnBottle = $(elem).find('a');
		btnBottle.addClass('add_to_cart_button ajax_add_to_cart product_type_simple btn-supplements');
		btnBottle.attr('rel','nofollow');
		btnBottle.attr('aria-label','Add ???'+ name +'??? to your cart');
		btnBottle.attr('title','Add to cart');
		btnBottle.attr('data-product_sku',sku);
		btnBottle.attr('data-quantity',quantity);
		btnBottle.attr('data-product_id',id);
	}
	

});