const baseInputElem = document.querySelector("#base");
const heightInputElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaInputElem = document.querySelector("#area");


calcButton.addEventListener('click', () =>{
    var base = Number(baseInputElem.value);
    var height = Number(heightInputElem.value);
    var area = calcTriangleArea(base, height);
    console.log("Terület: " + area);
    areaInputElem.value = area;
});

function calcTriangleArea(base, height){
    return base * height / 2
}