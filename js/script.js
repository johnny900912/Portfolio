const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);

})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', { delay: 500, origin: 'left' })
sr.reveal('.home-img', { delay: 350, origin: 'right' })


function showDescription(workId) {
    var workTitleElement = document.getElementById("workTitle");
    var workDescriptionElement = document.getElementById("workDescriptionText");
    var workCat = document.getElementById("workCat")
    var workReq = document.getElementById("workReq")
    var workPurpose = document.getElementById("workPurpose")

    switch (workId) {
        case "work1":
            workTitleElement.textContent = "嗑嗑報電影(立即前往)";
            workReq.textContent = "HTML CSS JS"
            workTitleElement.addEventListener("click", function () {
                window.location.href = "https://johnny900912.github.io/Movie-Web/"; // 将链接替换为你想要的网站链接
            });
            workPurpose.textContent = "這是一個能讓使用者更快速的認識電影的網站，除了可以看到當前電影的資訊以及預告片之外，還可以透過我們的網站傳送到各個影音平台中。";
            workDescriptionElement.textContent = "在這個網站中，我們可以透過點擊海報，查看當前你所選擇的電影並可以跳轉至該部電影的預告片中。此外還可以從分類表中篩選出有興趣的電影並對該部電影進行初步的瞭解。"
            workPurpose.classList.add("work-purpose");
            workDescriptionElement.classList.add("work-description");
            workCat.textContent = "網頁團隊專題"
            break;
        case "work2":
            workTitleElement.textContent = "Shabi(立即前往)";
            workReq.textContent = "HTML CSS JS JQuery"
            workTitleElement.addEventListener("click", function () {
                window.location.href = "https://ymfzgupvscgc0p5ccddyna.on.drv.tw/NFTWebsite/"; // 将链接替换为你想要的网站链接
            });
            workPurpose.textContent = "	這是一個介紹當時曾紅極一時的NFT(非同質化代幣)理念的網站透過我們篩選出一些熱門的項目外還嘗試加入了屬於我們自己的NFT代幣。";
            workDescriptionElement.textContent = "	在這個網站中，我們可以透過點擊NFT，查看當前你所選擇的項目，並可以閱讀該項目的基本介紹。此外還可以從購買專區中選擇有興趣的項目並把他加入購物車。"
            workCat.textContent = "網頁團隊專題"
            break;
        case "work3":
            workTitleElement.textContent = "Rebirth";
            workReq.textContent = "Unity"
            workPurpose.textContent = "這是一個3D解謎遊戲。玩家需要在時間內透過拾取地上的碎片，拼湊出一段故事，使玩家在此遊戲達到身歷其境的感受。不僅體驗到恐怖的故事情節，還能從中獲得一絲絲的感動。如果失敗的話，便會在這輪迴之中永遠無法脫身。";
            workCat.textContent = "遊戲團隊專題"
            break;
        case "work4":
            workTitleElement.textContent = "Shabi(立即前往)";
            workReq.textContent = "HTML CSS JS Phaser"
            workTitleElement.addEventListener("click", function () {
                window.location.href = "https://kevinlin1120.github.io/Melting-Ice/"; // 将链接替换为你想要的网站链接
            });
            workPurpose.textContent = "這是一個畫風輕鬆且結構簡單的小遊戲，是一個會被封面吸引進來的小品遊戲。遊戲過程雖然簡單但會被可愛的主題故事吸引，會喜歡上我們創造的角色。以美術和主題特殊性來讓玩家留下深刻的印象。 ";
            workCat.textContent = "網頁團隊專題"
            break;
        case "work5":
            workTitleElement.textContent = "奇幻世界(影像創作)";
            workReq.textContent = "Photoshop"
            workDescriptionElement.textContent = "這個作品其中想表達的意思是每一個人都能在自己的幻想是解中探索，而且幻想世界之中是沒有重力的就像太空人在太空一樣不受拘束。";
            workCat.textContent = "個人作業";
            break;
        case "work6":
            workTitleElement.textContent = "卡通與大師的會面(影像創作)";
            workReq.textContent = "Photoshop"
            workDescriptionElement.textContent = "這個作品是從Georges Seurat的一幅作品《大碗島的星期天下午》來仿作，我利用了我喜愛的辛普森一家為主要世界觀，預想出倘若這個場景發生在辛普森的世界裡會是什麼樣的感覺呢?";
            workCat.textContent = "個人作業";
            break;
        default:
            break;
    }


    var workDescriptionBox = document.getElementById("workDescription");
    workDescriptionBox.style.display = "block";
}

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("workDescription").style.display = "none";
});





