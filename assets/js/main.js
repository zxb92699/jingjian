// 开场页

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        // 音乐播放

        const bgm = document.getElementById("bgm");

        if (bgm) {

            bgm.play().catch(() => {
                console.log("浏览器阻止自动播放");
            });

        }

        // 开场页淡出

        const intro = document.getElementById("intro");

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        }, 1000);

    });

}
