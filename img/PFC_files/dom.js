
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

   function Play() {

    if (player === document.getElementById("feuille"). value|| player === document.getElementById("pierre").value || player === document.getElementById("ciseaux").value) {
        if (player === computer) {
            console.log(" Equality ");
        } else if (player === "pierre" && computer === "feuille" || player === "feuille" && computer === "ciseaux" || player === "ciseaux" && computer === "pierre") {
            console.log("Lost");

        } else if (player === "pierre" && computer === "feuille" || player === "feuille" && computer === "pierre" || player === "ciseaux" && computer === "feuille") {
            console.log("Win");
        }
    }
}


