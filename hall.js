const maleRadio = document.getElementById("radioMale");
const femaleRadio = document.getElementById('radioFemale');

const select = document.getElementById("roomNumbers");
if(maleRadio.checked){
    for(var i=0; i<20; i+2){
        let option = document.createElement('option');
        option.value = i
        select.appendChild(option)
    }
}