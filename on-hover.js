 $(function() {
    $(".dropdown").hover(
        function(){ $(this).addClass('open') },
        function(){ $(this).removeClass('open') }
    );

    $(".dropdown-submenu").hover(
        function(){ $(this).find(".dropdown-menu").css({'display':'block'}) },
        function(){ $(this).find(".dropdown-menu").css({'display':'none'}) }
    );
});