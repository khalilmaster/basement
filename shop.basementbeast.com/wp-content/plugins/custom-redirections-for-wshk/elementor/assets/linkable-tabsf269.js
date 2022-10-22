jQuery(document).ready(function ($) {
    //get the hash tag
    //hash exist
    setTimeout(function () {
        var currenttt = window.location.href
        var currents = currenttt.split('#tab')
        if (currents.length > 1) {
            showAndScrollToTabtres($, currents)
        }
    }, 200);
    // change the browser url according to selected tab
    $('.wshk-tab-title[data-tab]').click(function () {
        var current_location = window.location.href;
        current_location = current_location.split('#')
        window.location = current_location[0] + '#tab' + $(this).attr('data-tab')
        
    })
    // activate tab also from anchor link in the same page
    $('a').on('click', function () {
        var anchorUrl = $(this).attr('href')
        var anchor = anchorUrl.split('#tab')
        if (anchor.length > 1) {
            showAndScrollToTabtres($, anchor)
        }
    })
})

function showAndScrollToTabtres($, currents) {
    $('.wshk-tab-content').removeClass('active').addClass('inactive').removeClass('active-default')/*css('display','none')*/
    $('.wshk-tab-content[data-tab="' + currents[1] + '"]').addClass('active').removeClass('inactive')
    /*$('.wshk-tab-content').hide();
    $('.wshk-tab-content [data-tab="'+currents[1]+'"]').show();*/
    
    $('.wshk-tab-title').removeClass('active').removeClass('active-default')
    $('.wshk-tab-title[data-tab="' + currents[1] + '"]').addClass('active').removeClass('inactive')
    
    // scroll to
    /*var headerHeight = $('#header').height()  // put here your header id to get its height.
   $([document.documentElement, document.body]).animate({
        scrollTop: $('.elementor-tab-title[data-tab="' + current[1] + '"]').closest('.elementor-widget-wrap').offset().top - headerHeight
    }, 2000)*/
}