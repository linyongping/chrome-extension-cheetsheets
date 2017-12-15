let bodyHTML = document.body.innerHTML;
const reg = /\w{3,6}-\d{3,5}/gi;
const callRepalce = match => {
  const url = "http://www.btsoso.info/search/" + match + "_ctime_1.html";
  return `<a class="chepai" target="_blank" href="${url}"> ${match} </a>`;
};
bodyHTML = bodyHTML.replace(reg, callRepalce);
document.body.innerHTML = bodyHTML;
console.log("车牌助手");
