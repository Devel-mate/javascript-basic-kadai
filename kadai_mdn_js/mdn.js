const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

console.log(year + "年" + (month + 1) + "月" + day + "日");

// // 別の方法
// const today = new Date();

// const year = today.getFullYear() + "年";
// const month = today.getMonth() + 1 + "月";
// const day = today.getDate() + "日";

// console.log(year + month + day);