const puppeteer = require('puppeteer');
const config=require('./config/config');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  await page.screenshot({path: `${config.path}/${Date.now()}.png`});

  await browser.close();
})();