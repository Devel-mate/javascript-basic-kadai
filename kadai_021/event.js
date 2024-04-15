// btnというidを持つHTML要素を取得し、定数に代入
const textBtn = document.getElementById("btn");
// textというidを持つHTML要素を取得し、定数に代入
const textHeader = document.getElementById("text");

// HTML要素がクリックされた時にイベント処理を実行する
textBtn.addEventListener("click", () => {
    // HTM要素がクリックさた時の非同期処理を実行する
    setTimeout(() => {
        textHeader.textContent = "ボタンをクリックされました！";
    }, 2000);
});