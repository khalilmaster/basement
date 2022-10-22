/* Theme Customize JS */
jQuery(document).ready(function($) {
	//Paraments
	const queryString = window.location.search;
	if ( queryString ) {
		const urlParams = new URLSearchParams(queryString);
		const addToCart = urlParams.get('add-to-cart');
		const variationId = urlParams.get('variation_id');
		
		if ( addToCart && variationId ) {
			$('.cart-toggler.toggle-cartside').click();
		}
	}
	
	console.log($('.woocommerce-mini-cart__buttons.buttons a:first-child'));
	
	
	//last child
	//Mini cart
	setTimeout(function(){  
		if( $('.woocommerce-mini-cart__buttons.buttons a:first-child').length > 0 ) {
			$('.woocommerce-mini-cart__buttons.buttons a:first-child').attr('href','javascript:void(0)');
			$('.woocommerce-mini-cart__buttons.buttons a:first-child').addClass('toggle-cartside');
			$('.woocommerce-mini-cart__buttons.buttons a:first-child').text('Return to shopping');
		}
		if( $('.woocommerce-mini-cart__buttons.buttons a:last-child').length > 0 ) {
			$('.woocommerce-mini-cart__buttons.buttons a:last-child').attr('href','/cart/');
			$('.woocommerce-mini-cart__buttons.buttons a:last-child').text('View cart');
		}
	}, 1500);
	//breadcrumbs
	if( $('.breadcrumbs.circle-style a:first-child').length > 0 ) {
		$('.breadcrumbs.circle-style a:first-child').text('Shop')
	}

// 			if (document.querySelectorAll('.wcsatt-sub-options')) {
// 				document.querySelectorAll('.wcsatt-sub-options').forEach(el => el.innerText = 'From  ' )
// 			}
// 			if (document.querySelectorAll('.button.product_type_variable.add_to_cart_button')) {
// 				document.querySelectorAll('.button.product_type_variable.add_to_cart_button').forEach(el => el.innerText = 'shop now')
// 			}


	$('.mobile-navigation .nav-menu li.dropdown ul.sub-menu').hide();
	$('.mobile-navigation .nav-menu li.dropdown >a').on('click', function() {
		event.preventDefault();
		$(this).next("ul.sub-menu").toggle("slow");
	});
	
	$("#gota-custom-js-after").remove();
	$(window).scroll(function() {
		var start = $(".main-wrapper > header").outerHeight();

		if ($(this).scrollTop() > start){  
			$("header .header-container").addClass("sticky");
			if ($(".header-container .categories-menu").hasClass("opening")) {
				$(".header-container .categories-menu").removeClass("opening");
			}
		}
		else{
			$("header .header-container").removeClass("sticky");
		}
	});
});
jQuery(document).off('click', '.mini_cart_item .remove');
jQuery(document).on('click', '.mini_cart_item .remove', function(e){
	var product_id = jQuery(this).data("product_id");
	var item_li = jQuery(this).closest('li');
	var a_href = jQuery(this).attr('href');
	jQuery.ajax({
		type: 'POST',
		dataType: 'json',
		url: ajaxurl,
		data: 'action=gota_product_remove&' + (a_href.split('?')[1] || ''), 
		success: function(data){
			if(typeof(data) != 'object'){
				alert('Could not remove cart item.');
				return;
			}
			jQuery('.topcart .cart-toggler .qty .count').html(data.qty);
			jQuery('.topcart .cart-toggler .subtotal').html(data.subtotal);
			if(data.qtycount > 0){
				if (jQuery('.cart-side-content .total .amount').size()) {
					jQuery('.cart-side-content .total .amount').html(data.subtotal);
				}
				if (jQuery('.side-sticky-icons .quick-cart .badge').size()) {
					jQuery('.side-sticky-icons .quick-cart .badge').html(data.qty);
				}
			}else{
				if (jQuery('.cart-side-content .total .amount').size()) {
					jQuery('.cart-side-content .cart_list').html('<li class="empty">No products in the cart.</li>');
					jQuery('.cart-side-content .total').remove();
				}
				jQuery('.cart-side-content .buttons').remove();
				if (jQuery('.side-sticky-icons .quick-cart .badge').size()) {
					jQuery('.side-sticky-icons .quick-cart .badge').html(0);
				}
			}
			item_li.remove();
		}
	});
	e.preventDefault();
	return false;
});



(function($){
    $(document).ready(function(){
        /*updated_checkout event*/
        $(document.body).on('updated_checkout', function(){
            /*Make an AJAX call on updated_checkout event*/
            $.ajax({
                type:       'POST',
                url:        custom_values.ajaxurl,
                data:       {action:'free_shipping_cart_notice'},
				success: function( result ) {
                    // console.info(result);
					if (result == '0') {
						console.info(result, 'result is 0');
						if (document.querySelector('.cus')) {
							document.querySelector('.cus').remove();
						}
					} else {
						let result2 = result.slice(0,result.length - 1);
						console.info(result2, 'result is not 0');
						if (document.querySelector('.cus')) {
							document.querySelector('.cus').insertAdjacentHTML('afterend', result2);
							document.querySelector('.cus').remove();
						} else {
							document.querySelector('#cfw .col-lg-7.cfw-rp').insertAdjacentHTML('beforeend', result2);
						}

					}
                }
            });
        });
    });
})(jQuery);