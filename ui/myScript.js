var selector = '.navbar-nav > li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});