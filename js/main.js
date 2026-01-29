
/* Cursor follow */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

/* Hover reaction */
document.querySelectorAll("a, .card").forEach(el=>{
  el.addEventListener("mouseenter",()=>cursor.style.transform="translate(-50%,-50%) scale(1.6)");
  el.addEventListener("mouseleave",()=>cursor.style.transform="translate(-50%,-50%) scale(1)");
});

/* Scroll reveal */
const reveals=document.querySelectorAll(".reveal");
function reveal(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll",reveal);
reveal();
