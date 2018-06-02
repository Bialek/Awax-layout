$(document).ready(function() {

    $(".filter-button").click(function() {
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        var value = $(this).attr('data-filter');
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');    
        }
    });

    $('.all').addClass("active");
});