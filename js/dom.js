
let player;
let computer = Math.floor((Math.random() * 3));

switch (computer) {
    case 0:
        document.getElementById("pierre").value = "pierre";
        console.log("pierre");
        break;
    case 1:
        document.getElementById("feuille").value = "feuille"
        console.log("feuille");
        break;
    case 2:
        document.getElementById("ciseaux").value = "ciseaux";
        console.log("ciseaux");
        break;
}

function Play1() {

    if (player === document.getElementById("pierre").value && computer === document.getElementById("ciseaux")) {
        console.log("Win");
    } else if (player === document.getElementById("pierre").value && computer === document.getElementById("ciseaux").value) {
        console.log("Win")
    } else {
        console.log("Equality")
    }
}


function Play2() {
    if (player === document.getElementById("feuille").value && computer === document.getElementById("pierre").value) {
        console.log("Win");
    } else if (player === document.getElementById("feuille").value && computer === document.getElementById("ciseaux").value) {
        console.log("Lost")
    } else {
        console.log("Equality")
    }
}


function Play3() {

    if (player === document.getElementById("ciseaux").value && computer === document.getElementById("feuille")) {
        console.log("Win");
    } else if (player === document.getElementById("ciseaux").value && computer === document.getElementById("pierre").value) {
        console.log("Lost")
    } else {
        console.log("Equality")
    }
}
