let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')
let spanArray = document.querySelectorAll('span')
function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
    console.log(card)
}

function reset(){
    idInput.value = ""
    colorInput.value = ""
    for(i=0;i < spanArray.length; i++){
        let temp = document.querySelectorAll('section')[i]
        temp.style.color = "grey";
    };

}