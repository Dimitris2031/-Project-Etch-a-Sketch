const mainContainer =  document.querySelector(".main-container");
let gridRange = document.querySelector('.grid-range');
let color = document.getElementById('input-color');
let rainbow = document.getElementById('rainbow-btn');
let modeSelected = document.getElementById('modeSelected');
let colorChange = document.getElementById('colorChange');


// This for loop initiates the basic template for the grid which is 16x16

for (let i = 0; i<=256-1; i++){ 
    let div = document.createElement('div');
    div.classList.add('box');
    div.style.height = '37.5px';
    div.style.width = '37.5px';
    div.style.backgroundColor = "#fff";
    mainContainer.appendChild(div);
}


function updateGrid(){
    const range = document.getElementById('range');
    let rangeUpdated = range.value * range.value;
    let heightWidth = (600/range.value);
    gridRange.textContent = `${range.value} X ${range.value}`

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    

    for (let i = 0; i<=rangeUpdated-1; i++){
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.height = heightWidth;
        div.style.width = heightWidth;
        div.style.backgroundColor = "#fff";
        
        mainContainer.appendChild(div);
    }
    
    const divs = document.querySelectorAll('.box');

    divs.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor= color.value;
        });
    }) 

    color.addEventListener('input',function(){
        modeSelected.textContent = "Color Mode";
        colorChange.style.backgroundColor = color.value;
        divs.forEach(function (div) {
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor= color.value;
            });
        }) 
    });
    
    rainbow.addEventListener('click',function(){
        divs.forEach(function (div) {
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor= randomColor();
            });
        }) 
        
    });
}





const divs = document.querySelectorAll('.box');


divs.forEach(function (div) {
    div.addEventListener('mouseover', function () {
        div.style.backgroundColor= color.value;
    });
}) 




color.addEventListener('input',function(){
    modeSelected.textContent = "Color Mode";
    colorChange.style.backgroundColor = color.value;
    divs.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor= color.value;
        });
    }) 
});


rainbow.addEventListener('click',function(){
    modeSelected.textContent = "Rainbow Mode";
    colorChange.style.backgroundColor = randomColor();
    divs.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor= randomColor();
        });
    }) 
    
});









