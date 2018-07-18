const puppeteer=require("puppeteer");
const config=require('./config/config');
const urlToImg=require('./util/save');

(async ()=>{
  const browser=await puppeteer.launch({
    headless:true
  });
  const page=await browser.newPage();
  await page.goto("https://www.google.com/imghp?hl=zh-CN");
  await page.focus("#lst-ib");
  await page.$eval("#lst-ib",(el)=>{
    el.value="刘静雯";
  })
  await page.$eval(".sbico-c",(el)=>{
    el.click();
  })

  page.on("load",async ()=>{
    await page.screenshot({path: `${config.imgPath}/${Date.now()}.png`});
    // const srcs=await page.evaluate(()=>{
    //  let imgs=document.querySelectorAll("img.rg_ic");
    //  return Array.prototype.map.call(imgs,(img)=>img.src)
    // });
    // console.log('srcs: ', srcs);
    // srcs.forEach(src => {
    //   await(src,config.imgPath);
    // });
    await browser.close();
  });
})();