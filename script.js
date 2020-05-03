 $(function() {
    let links = $('a.link').click(function() {
        links.removeClass('active');
        $(this).addClass('active');
    });
 }); 
