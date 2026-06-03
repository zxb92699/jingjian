
const items=document.querySelectorAll('.fade');
const io=new IntersectionObserver(es=>{
es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
});
items.forEach(i=>io.observe(i));
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        document.getElementById("bgm").play();

        document.getElementById("intro").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("intro").remove();
        }, 1000);

    });

}
