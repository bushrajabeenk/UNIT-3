//here retrieve the generated number from Localstorage.

    var number = JSON.parse(localStorage.getItem("number"));

    if(number==1)
    {
        document.querySelector("#show_number").style.color = "yellow";
    }
    else if(number==6)
    {
        document.querySelector("#show_number").style.color = "green";
    }
    else{
        document.querySelector("#show_number").style.color = "red";
    }

    document.getElementById("show_number").innerHTML = number;
