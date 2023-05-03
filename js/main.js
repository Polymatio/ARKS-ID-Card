function clearButton(){
    x = document.getElementsByClassName("clear");
    for(var i = 0; i < x.length; i++){
        x[i].innerText = "-";
    } 
}