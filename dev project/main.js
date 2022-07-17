let url = "https://www.magmabrakes.com/catalog/";
let request = require("request");
let cheerio = require("cheerio");
let readMore = require("./readMore")
request(url,cb);
function cb(error,response,html){
   if(error){
       console.log(error);
   }else{
       extractLink(html);
    //    console.log(html); 
   }
}
function extractLink(html){
let interface = cheerio.load(html); // it will read the html and $ is a interface.
let readMoreElem = interface(".button.product_type_simple");
for(let i = 0;i<readMoreElem.length;i++){
    let link = interface(readMoreElem[i]).attr("href");
    console.log(link);
    console.log();
    // readMore.ps(link);
}
}
