function generateArksCard() {
    // Get value of player ID name from form input 
    const nameElement = document.getElementById("insertIDName");
    const nameValue = nameElement.value; 

    // Assign the value of player ID name to generated card
    const cardNameElement = document.getElementById("playerIDName");
    cardNameElement.innerHTML = nameValue;

    // Get value of college name from form input 
    const playerIDValue = document.getElementById("insertPlayerName").value;
    // Assign the value of college name to generated card
    document.getElementById("playerID").innerHTML = playerIDValue;

    // Get value of character name from form input 
    const characterValue = document.getElementById("insertCharacter").value;
    // Assign the value of location name to generated card
    document.getElementById("recentCharacter").innerHTML = characterValue;

    //
    const biographyValue = document.getElementById("insertBio").value;
    //
    document.getElementById("biography").innerHTML = biographyValue;
    
    // Display final generated card to user  
    document.body.style.display ="flex"
    document.getElementById("arksCard").style.display = "block";

    // Remove ARKS Card ID Generator form display
    document.getElementById("titleCenter").style.display= "none";    
    document.getElementById("arksCardBuildSection").style.display= "none";
}