
let player;
let computer = Math.floor((Math.random() * 3));
function ordi() {
    switch (computer = 0) {
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
}
function PLay() {
    if (player === "pierre" || player === "feuille" || player === "ciseaux") {
        if (player === computer) {
            console.log(" Equality ");
        } else if (player === "pierre" && computer === "feuille" || player === "feuille" && computer === "ciseaux" || player === "ciseaux" && computer === "pierre") {
            console.log("Lost");

        } else if (player === "pierre" && computer === "feuille" || player === "feuille" && computer === "pierre" || player === "ciseaux" && computer === "feuille") {
            console.log("Win");
        }
    }
}

