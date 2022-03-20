const iconToggle = document.querySelector(".header-toggle");
const menuToggle =  document.querySelector(".menu");

iconToggle.addEventListener("click", function(){
    menuToggle.classList.add("translate")
});

window.addEventListener("click", function(e){
    if(!menuToggle.contains(e.target) && !e.target.matches(".header-toggle")){
        menuToggle.classList.remove("translate")
    }
})


let accordion = document.querySelectorAll(".faq-item-header");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// back-top-top

let backToTop = document.querySelector(".to-top");

document.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    if(scrollY > 800){
        backToTop.classList.add("active")
    }else{
        backToTop.classList.remove("active")
    }
})

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})