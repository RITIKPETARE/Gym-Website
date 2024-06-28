
function videoconAnimation(){
    var videocon = document.querySelector("#video_container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
   
    gsap.to(playbtn,{
        scale: 1,
        opacity :1,
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity :0,
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70 ,
        top :dets.y-80,
    })
})
}
videoconAnimation()




function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity: 0,
        delay :0.9,
        duration :0.9,
        stagger:0.23,
    })
    
    gsap.from("#page1 #video_container",{
        scale:0.7,
        opacity: 0,
        delay :1.5,
        duration :0.9,

    })



}
loadingAnimation()





gsap.from("#about-content h1", {
    y:100,
        opacity: 0,
        delay :0.9,
        duration :0.9,
        stagger:0.23,
      maekers:true

})

gsap.to(".intro" , {
    scrollTrigger:{
        trigger: ".intro h1",
        scroller: "body",
       
        start:"top 80%",
        end : "bottom 10%",
scrub: 2,
    },
    scale:1.5,
    duration:2,
    delay:1,
})





document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelector("#page1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(1)",
    })
})


document.querySelector("#page2").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(0)",
    })
})

document.querySelector("#page3").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(1)",
    })
})

document.querySelector(".nav-container").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(0)",
    })

})







var crsr = document.querySelector("#cursor")

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "100px"
        crsr.style.height = "100px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})



document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add functionality here, such as opening a modal with product details
            alert(`You clicked on ${this.querySelector('h3').textContent}`);
        });
    });
});











