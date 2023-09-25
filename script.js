const foodJson = require("./food.json");



// 1-all foodname
let allitems = foodJson.map(items=>{
    return (items.foodname);
});
console.log(allitems);


//2-all vegetable
let allvegetableitems = foodJson.filter(items =>{
    return (items.category === "Vegetable");
});
console.log(allvegetableitems);


//3-all fruits
let allfruitsitems = foodJson.filter(items =>{
    return(items.category === "Fruit");
});
console.log(allfruitsitems);


//4-all protein
let allproteinsitems = foodJson.filter(items =>{
    return (items.category === "Protein");
});
console.log(allproteinsitems);


//5-all nuts
let allnutsitems = foodJson.filter(items =>{
    return(items.category === "Nuts");
});
console.log(allnutsitems);


//6-all grains
let allgrainsitems = foodJson.filter(items=>{
    return(items.category === "Grain");
});
console.log(allgrainsitems);


//7-all dairy
let alldairyitems = foodJson.filter(items=>{
    return(items.category === "Dairy");
});
console.log(alldairyitems);


//8-protien above 100
let highprotien = foodJson.filter(items=>{
    return(items.calorie>100);
});
console.log(highprotien);


//9-protien below 100
let lowprotien = foodJson.filter(items=>{
    return(items.calorie<100);
});
console.log(lowprotien);


//10-high to low protien order
let sortprotien = foodJson.sort((l,h)=>{
    return (h.protiens - l.protiens);
});
console.log(sortprotien);


//11-low to high cabs
let sortcabs = foodJson.sort((l,h)=>{
    return (l.cab - h.cab );
});
console.log(sortcabs);