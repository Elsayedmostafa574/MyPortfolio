// Loader Spiner

const spinner = document.querySelector(".loader");
window.addEventListener("load", () => {
  spinner.style.opacity = "0";
  setTimeout(() => {
    {
      spinner.style.display = "none";
    }
  }, 1000);
});


// Button To Top
var btnTop = document.getElementById("btn");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 100){
    btnTop.style.display = 'block';
  }else{
    btnTop.style.display = 'none';
  }
}  

btnTop.addEventListener("click" , function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

// Typed
var typed = new Typed(".about", {
  strings: [
    "I'm Front-End Developer, I can Make Attractive Designs and Professional Websites.",
  ],
  typeSpeed: 50,
});
