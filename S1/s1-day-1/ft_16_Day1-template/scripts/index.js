//Store the generated number in LocalStorage with key "number".

document.querySelector("#throw_dice").addEventListener("click", dice);

function dice() 
{
    var x = Math.floor((Math.random() * 6) + 1);

    localStorage.setItem("number", JSON.stringify(x));

}
