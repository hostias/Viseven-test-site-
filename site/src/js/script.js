'use strict'; // validation end
/*FLOAT SCROLLING, lift up and down*/
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
/*ACTIVE MENU menu, click, class for meny-position*/
let navLink = [].slice.call(document.querySelectorAll('nav a')); //create var and takes all element li
navLink.forEach(function(el) { //functon sort
    el.addEventListener('click', function(e) { //event click, create clacc 
        e.preventDefault();
        navLink.forEach((nl) => { //functon sort, delete class if if
            if (nl !== this) {
                nl.classList.remove('active');
document.querySelector('nav').className = "";//menu position
            }
        });
        this.classList.add('active');
        let navPosition = this.getAttribute('title'); 
document.querySelector('nav').classList.add(navPosition); //menu position
    }, false);
});
/*STARS*//*удалить*//*
document.addEventListener('click', ({target}) => {
      if(target = target.closest('.rating-item')) {
          const parent = target.parentNode,
                activeElem = parent.querySelector('.active');
          if(activeElem) activeElem.classList.remove('active');
          target.classList.add('active');
      }
  });
  /**/ 

  class Rating {
    constructor(element, length = 5){
       this.parent = element;
       this.starLength = length;
       this.stars = this.createElems(length);
       this.parent.append(...this.stars);
       this.parent.addEventListener("click", this.eventHandler.bind(this));
       this.activeElem = this.stars[0];
    }
    createElems(length) {
        let elems = Array.from({length}, () => document.createElement("div"));
        return elems
    }
    eventHandler({target}){  
        if(this.stars.includes(target)){
            this.activeElem.classList.remove("active");
            this.activeElem = target;
            this.activeElem.classList.add("active");
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    for (const element of document.querySelectorAll(".rating"))
        new Rating(element, 5);
});