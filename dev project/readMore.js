let url = "https://www.magmabrakes.com/product/psd976c/";
let request = require("request");
let cheerio = require("cheerio");

// function processReadMore(url){

// }
request(url,cb);


function cb(error,response,html){
   if(error){
       console.log(error);
   }else{
       extractDetails(html);
    //    console.log(html);
   }
}
function extractDetails(html){
// description, additional information, vehicle fitment

// product name
let interface = cheerio.load(html);
let productName = interface(".product_title.entry-title");
console.log("Product-> "+productName.text().trim());
console.log();

//description
let description = interface(`a[href = "#tab-description"]`);
let descriptionText = interface(".woocommerce-Tabs-panel--description>ul");
// console.log(description.text().trim());
// console.log(descriptionText.text());

//additional information
let additionalInfo = interface(`a[href = "#tab-additional_information"]`);
let additionalInfoText = interface(".woocommerce-Tabs-panel.woocommerce-Tabs-panel--additional_information");
console.log(additionalInfo.text().trim());
console.log();

let allRows = additionalInfoText.find(".woocommerce-product-attributes.shop_attributes>tbody>tr");
console.log(allRows.length);
// for(let i = 0 ;i<allRows.length;i++){

//     let allCols1 = interface(allRows[i]).find("th");
//     let allCols2 = interface(allRows[i]).find("td");
//     let totalElem = allCols1.length + allCols2.length;
//     for(let j = 0 ;j<totalElem;j++){
//         let heading1 = interface(allCols1[j]).text().trim();
//         let heading2 = interface(allCols2[j]).text().trim();
//         console.log(heading1+" "+heading2);
//     }
// }

// //vehicle firment
let vehicleFT = interface(`a[href = "#tab-part_applications_tab"]`);
// let vehicleFtText = interface(".woocommerce-Tabs-panel.woocommerce-Tabs-panel--part_applications_tab ");
let vehicleFtText = interface(".woocommerce-Tabs-panel.woocommerce-Tabs-panel--part_applications_tab.panel.entry-content.wc-tab")
let allRows1 = interface("#buyersguidelb-content-009064151>tbody>tr>td")
console.log();
console.log(vehicleFT.text().trim());
// let allRows1 = vehicleFtText.find(".woocommerce-Tabs-panel.woocommerce-Tabs-panel--part_applications_tab.panel>table>tbody>tr");
console.log(allRows1.length);
// let htmlString = vehicleFtText.html();
// for(let i = 0 ;i<allRows1.length;i++){
//     let allCols1 = interface(allRows1[i]).find("th");
//     let allCols2 = interface(allRows1[i]).find("td");
//     let totalElem = allCols1.length + allCols2.length;
//     for(let j = 0 ;j<totalElem;j++){
//         let heading1 = interface(allCols1[j]).text().trim();
//         let heading2 = interface(allCols2[j]).text().trim();
//         console.log(heading1+" "+heading2);
//         console.log();
//     }
// }
    

}

// module.exports = {
//   ps: processReadMore
// }