const puppeteer = require("puppeteer");
const config = require('./config/config');
const urlToImg = require('./util/save');

(async () => {
  const browser = await puppeteer.launch({
    // headless:true,
  });
  const page = await browser.newPage();
  // page.setViewport({
  //   width:1080,
  //   height:960
  // })
  await page.goto("https://h5.m.taobao.com/qn/pc/niuba-interview.html#!/interview/10470866/");

  let res=await page.evaluate(() => {
    let names = [];
    let els = document.querySelectorAll(".chat-contents .msg-user-info");
    els.forEach(c => names.push(c.textContent));
    return names;
  })
  console.log('res: ', res);
  await browser.close();
})();