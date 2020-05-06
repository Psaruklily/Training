 $(function() {
    let links = $('a.link').click(function() {
        links.removeClass('active');
        $(this).addClass('active');
    });
 }); 



  window.onscroll = function() {myFunction()};

 let header = document.getElementById("myHeader");
 let sticky = header.offsetTop;
 
 function myFunction() {
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 } 