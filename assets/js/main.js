const enterBtn = document.getElementById("enterBtn");

if(enterBtn){

    enterBtn.addEventListener("click",()=>{

        const bgm = document.getElementById("bgm");

        if(bgm){
            bgm.play();
        }

        const intro = document.getElementById("intro");

        intro.style.opacity="0";

        setTimeout(()=>{
            intro.style.display="none";
        },1000);

    });

}
