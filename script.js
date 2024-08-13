var weight = document.getElementById('weight')
var height = document.getElementById('height')
var display = document.getElementById('display')


function reset(){
    weight.value=''
    height.value=''
    display.innerHTML=''
    console.log("hii");
}
function calculateBMI(value){

    weight= weight.value
    height= height.value

    var bmi = ([weight / height / height]*10000).toFixed(2)
    display.innerHTML = bmi

    console.log("hi", bmi)

    var category =''
    if(bmi <18.5){
        category = "UnderWeight"
    }else if(bmi >=18.5 && bmi <=24.9){
        category = "Normal Weight"
    }else if(bmi >=25 && bmi <=29.9){
        category = "Overweight"
    }else if(bmi >=30 && bmi <=35){
        category = "Obese"
    }else{
        category = "Morbid Obesity"
    }

    result.innerHTML = category
}


