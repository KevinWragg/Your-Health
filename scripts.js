//Select elements
var nextButton = document.querySelector(".next-btn");
var introContainer = document.querySelector(".intro");
var dynamicContent = document.querySelector(".dynamic-content");
var introTextOne = document.querySelector(".intro__text-1");
var introTextTwo = document.querySelector(".intro__text-2");
var introTextThree = document.querySelector(".intro__text-3");
var introBtn = document.querySelector(".intro__next-btn");
var currentPage = 1;

// Setup events
nextButton.addEventListener("click", function(){
   if(currentPage === 1){
      loadPage2();
      return;
   }
   if(currentPage === 2){
      loadPage3();
      return;
   }
   if(currentPage === 3){
      loadPage1();
      return;
   }
});

//Methods
function loadAnimations(){
   introContainer.classList.add("fade-in-content");
   window.setTimeout(function(){
      introContainer.classList.remove("fade-in-content");
   }, 7000);
}



function loadPage2(){
   introContainer.classList.add("slide-out-left");

   window.setTimeout(function(){
      introContainer.classList.remove("slide-out-left");
      dynamicContent.innerHTML = introTextTwo.innerHTML;
      introContainer.classList.add("slide-in-right");
   }, 1000);

   window.setTimeout(function(){
      introContainer.classList.remove("slide-in-right");
   }, 2000);

   currentPage = 2;
}



function loadPage3(){
   introContainer.classList.add("slide-out-left");

   window.setTimeout(function(){
      introContainer.classList.remove("slide-out-left");
      dynamicContent.innerHTML = introTextThree.innerHTML;
      introContainer.classList.add("slide-in-right");
   }, 1000);

   window.setTimeout(function(){
      introContainer.classList.remove("slide-in-right");
   }, 2000);

   currentPage = 3;
}



function loadPage1(){
   introContainer.classList.add("slide-out-left");

   window.setTimeout(function(){
      introContainer.classList.remove("slide-out-left");
      dynamicContent.innerHTML = introTextOne.innerHTML;
      introContainer.classList.add("slide-in-right");
   }, 1000);

   window.setTimeout(function(){
      introContainer.classList.remove("slide-in-right");
   }, 2000);

   currentPage = 1;
}

//Prepare page
loadAnimations();
