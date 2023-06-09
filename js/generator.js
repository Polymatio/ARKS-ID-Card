function generateArksCard() {
    // Get value of player ID name from form input 
    const nameElement = document.getElementById("insertIDName");
    const nameValue = nameElement.value; 

    // Assign the value of player ID name to generated card
    const cardNameElement = document.getElementById("playerIDName");
    cardNameElement.innerText = nameValue;

    // Get value of biography from form input
    const titleValue = document.getElementById("insertCardTitle").value;
    // Assign the value of biography to generated card
    document.getElementById("cardTitle").innerText = titleValue;
    
    // Get value of college name from form input 
    const playerIDValue = document.getElementById("insertPlayerName").value;
    // Assign the value of college name to generated card
    document.getElementById("playerID").innerText = playerIDValue;

    // Get value of character name from form input 
    const characterValue = document.getElementById("insertCharacter").value;
    // Assign the value of location name to generated card
    document.getElementById("recentCharacter").innerText = characterValue;

    // Get value of character team from form input
    const teamValue = document.getElementById("insertTeam").value
    // Assign the value of team to generate card
    document.getElementById("currentTeam").innerText = teamValue

    // Get value of biography from form input
    const biographyValue = document.getElementById("insertBio").value;
    // Assign the value of biography to generated card
    document.getElementById("biography").innerText = biographyValue;
    
    // Display final generated card to user  
    document.body.style.display ="flex"
    document.body.style.flexFlow ="column"
    document.body.style.alignItems ="center"
    document.getElementById("arksCard").style.display = "block";
    document.getElementById("download").style.display = "block";
    document.getElementById("logoCardTitle").style.display = "block";

    // Remove ARKS Card ID Generator form display
    document.getElementById("titleCenter").style.display= "none";
    document.getElementById("logoTitle").style.display= "none"; 
    document.getElementById("arksCardBuildSection").style.display= "none";
    document.getElementById("arksLogo").style.display= "none";
}