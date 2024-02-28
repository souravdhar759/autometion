let mm = gsap.matchMedia();

const text = new SplitType('#he');
const para = new SplitType('.para');
const para2 = new SplitType('.para2');
let temo = new SplitType("#test");
let tl = gsap.timeline();


// for mobile
mm.add("(max-width: 585px)",()=>{
    gsap.to("nav",{
        marginLeft :100,
        marginRight : 100,
        borderRadius:10,
        duration :2,
        scrollTrigger :{
         trigger:"#page1",
         scroller :"body ",
        

        start : "bottom 90%",
     //    end : "top 10%",
         scrub : 2,
        }
     })
     
 {
  
 }
 

})

// for dekstop or leptop
mm.add("(min-width: 585px)",()=>{
  gsap.to("nav",{
      marginLeft :200,
      marginRight : 200,
      borderRadius:10,
      duration :2,
      scrollTrigger :{
       trigger:"#page1",
       scroller :"body ",
      

      start : "bottom 90%",
   //    end : "top 10%",
       scrub : 2,
      }
   })
{

}    
})




gsap.to("#he",{
  color: "red",
  stagger : 2,
  duration : 0.5,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",
  
    start : "bottom 80%",

    scrub  : true
  }
})

gsap.to(".para",{
  color: "red",
  stagger : 2,
  duration : 0.5,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",
 
    start : "bottom 70%",
    
    scrub  : true
  }
})

gsap.to("#he",{
  x : -1000,
  stagger : 2,
  duration : 5,
  delay :2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",

    start : "bottom 60%",
 
    scrub  : 2
  }
})
gsap.to(".para",{
  x : -1000,
  stagger : 2,
  duration : 5,
  delay :2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",

    start : "bottom 35%",
    
    scrub  : 2
  }
})

gsap.to(".para2",{
color : "red",
stagger : 2,
  duration : 0.5,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",
 
    start : "bottom 50%",
    scrub  : 2
  }
})

gsap.to(".para2",{
  x : -1000,
  stagger : 2,
  duration : 5,
  delay :2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",
 
    start : "bottom 30%",
    
    scrub  : 2
  }
})

// ------------page2 code--------------
tl.to("#page2 ,#page3 ,#page5",{
  y: -400,
  stagger : 2,
  duration :2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",

    start : "bottom 20%",
   
    scrub  : 5
  }
})

tl.to("#test .char",{
  ease: "bounce.out",
  y: -25,
  
delay : 0.2,
  color : "#03b4ff",
  duration : 2,
  stagger : 2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",

    start : "bottom 70%",
    
    scrub  : 5
  }
})
tl.to("#test .char",{
  ease: "bounce.out",
  y: 0,
  
delay : 0.2,
  color : "white",
  duration : 1,
  stagger : 2,
  scrollTrigger : {
    trigger : "#main",
    scroller : "body",
  
    start : "bottom 60%",
    
    scrub  : 5
  }
})
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


