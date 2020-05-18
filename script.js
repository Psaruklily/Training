/*GO TO THE MAIN PAGE OF INSTAGRAM*/
/*get link and contents*/
let logoInstagram = document.querySelector('.logo-Instagram');
let container = document.getElementById('container');
let mainContent = document.getElementById('main-content');
/*event*/
logoInstagram.onclick = changeContent;

function changeContent() {
  container.innerHTML = mainContent.innerHTML;
}



/*GO TO THE MY PROFILE*/
/*get link and contents*/
let iconUser = document.querySelector('.icon-user');
let aboutUser = document.getElementById('about-user');
/*event*/
iconUser.onclick = goToProfile;

function goToProfile() {
  container.innerHTML = aboutUser.innerHTML;
}



// EVENTS ON THE HEART
let heart = document.getElementsByClassName('far fa-heart')[0];
console.log(heart);

heart.addEventListener('click', fillHeart); //FILLING OG THE HEARTS BY THE COLOR
heart.addEventListener('click', openBox);  // Visibl / invisibl div after onclick on the heart 

function fillHeart(icon) {
  this.classList.toggle("fas");
  console.log("1")
}

function openBox(box) {
  console.log("2")
  display = document.getElementById('box').style.display;
  if (heart.classList.contains("fas")) {
    console.log("3")
    document.getElementById('box').style.display = "block";
  } else {
    console.log("4")
    document.getElementById('box').style.display = "none";
  }
}


window.addEventListener('mouseup', function (event) {
  console.log("5")
  let box = this.document.getElementById('box');
  if (event.target !== box && event.target.parentNode !== box && event.target !== heart) {
    box.style.display = "none";
    console.log("6")
    if (heart.classList.contains("fas")) {
      heart.classList.toggle("fas");
      console.log("7")
    }
  }
});


// && event.target !== heart


/*FILLING OG THE HEARTS BY THE COLOR (like-heart)*/

function fillLikeHeart(icon) {
  icon.classList.toggle("fas");
}


/*ENABLED / DISABLED BUTTON IN THE COMMENT (after focus textarea)*/
/* function enableBtn() {
  document.getElementById("myBtn").disabled = false;
}  */



/*ENABLED / DISABLED BUTTON IN THE COMMENT (after entered text into textarea)*/
function IsEmpty() {
  let textarea = document.getElementById('text');
  let button = document.getElementById('button');
  if (textarea.value !== "") {
    if (button.classList.contains("disabled")) {
      button.classList.remove("disabled");
    }
  } else {
    button.classList.add("disabled");
  }
}















