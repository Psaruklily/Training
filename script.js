/*  $(function() {
    let links = $('a.link').click(function() {
        links.removeClass('active');
        $(this).addClass('active');
    });
 });  */


/* 
  window.onscroll = function() {myFunction()};

 let header = document.getElementById("myHeader");
 let sticky = header.offsetTop;
 
 function myFunction() {
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 }  */

/*  $(function(){
  $("#includedContent").load("index1.html"); 
}); */

function fillHeart(icon) {
  icon.classList.toggle("fas");
}



/*  function enableBtn() {
  document.getElementById("myBtn").disabled = false;
}  */


let textarea = document.getElementById('text');
console.log(textarea);
let sendbutton = document.getElementById('myBtn');
console.log(sendbutton);

function IsEmpty() {
  console.log('1');
  if (textarea.value) {
    sendbutton.removeAttribute('disabled');
  } else {
    sendbutton.addAttribute('disabled', '');
  }
}


textarea.onkeyup = IsEmpty;






/* let textarea = document.getElementById('text');
let sendbutton = document.getElementById('myBtn');

function IsEmpty(){
 if (textarea.value !== '' || textarea.value !== null){
   sendbutton.removeAttribute('disabled');
 } else {
   sendbutton.addAttribute('disabled', '');
 }
}

textarea.onkeyup = IsEmpty; */












