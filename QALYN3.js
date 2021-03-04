const makeCalculation = () => {
    // [start] education level calculating
    const eduLevel = document.getElementById("1").value;    
    let education = document.getElementsByName('education');
    for (var i = 0, length = education.length; i < length; i++) {
        if (education[i].checked) {
            initialValue = initialValue + parseInt(education[i].value);
        }
    }
}
    // [end] education level calculating

    // [start] family net calculating
    const familyNet = document.getElementById("2").value;     
    let familyNet = document.getElementsByName('net');
    for (var i = 0, length = net.length; i < length; i++) {
        if (familyNet[i].checked) {
            initialValue = initialValue + parseInt(familyNet[i].value);
        }
    }
    // [end] family net calculating

    // [start] skill calculating 
    const skill1 = document.getElementById("3").checked;   
    let skill= document.getElementsByName('music');
    let skill= document.getElementsByName('cook');
    let skill= document.getElementsByName('character');
    let skill= document.getElementsByName('sing');
    for (var i = 0, length = skill.length; i < length; i++) {
        if (skill[i].checked) {
            initialValue = initialValue + parseInt(skill[i].value);}
    }
    // [end] skill calculating 
    
    // [start] age calculating
    let agesRadios = document.getElementsByName('age');
    for (var i = 0, length = agesRadios.length; i < length; i++) {
        if (agesRadios[i].checked) {
            initialValue = initialValue + parseInt(agesRadios[i].value);
            break;
        }
    }
    // [end] age calculating

    // [start] reputation calculating
    let reputations = document.getElementsByName('rep');
    for (var i = 0, length = reputations.length; i < length; i++) {
        if (reputations[i].checked) {
            initialValue = initialValue + parseInt(reputations[i].value);
        }
    }
    // [end] reputation calculating


    // [start] display result for users
button.addEventListener("click", calculate)