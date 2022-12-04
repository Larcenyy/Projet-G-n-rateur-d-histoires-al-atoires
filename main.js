let mySend = document.getElementById("send");
let info = document.getElementById("info");
let myText = document.getElementById("text");
let cons = document.getElementById("cons");



let name = [
    "Juliette",
    "Bernard",
    "Jacky",
    "Michel",
    "Francky"
]
let object = [
    "Ciseaux",
    "Capes",
    "Tasse",
    "Brosse à dent",
    "Casque",
    "Manettes",
    "Chaise"
]
let time = [
    "Nuit",
    "Diabolique",
    "Jour d'été",
    "Brouillard",
    "Pluie",
    "Tempête"
]
let premises = [
    "New York",
    "Camps de gitan",
    "Campagne",
    "New York"
]
let verbs = [
    "Appeler",
    "Choisir",
    "Ouvrir",
    "Perdre",
    "Rendre",
    "Produire",
    "Mettre",
    "Agir",
    "Devenir",
    "Remettre"
]


mySend.addEventListener("click", function (){
    let nameRandom = Math.floor(Math.random() * name.length)
    let lieuxRandom = Math.floor(Math.random() * premises.length)
    let tempsRandom = Math.floor(Math.random() * time.length)
    let objectRandom = Math.floor(Math.random() * object.length)
    let verbesRandom = Math.floor(Math.random() * verbs.length)

    switch (premises[lieuxRandom]){
        case "Campagne":
            premises.splice(2, 1, "la campagnes");
            console.log(premises)
            break;
        case "Camps de gitan":
            premises.splice(1, 1, "côtés du camps de gitans");
            console.log(premises)
            break;
        case "Casque":
            premises.splice(1, 1, "son casque");
            console.log(premises)
            break;
    }

    myText.innerHTML = info.value + " " + "se balade avec " + name[nameRandom] + " à" + "  " + premises[lieuxRandom]
        + ", quand tout d'un coup! avec " + object[objectRandom]  + " " + "il deviens INVINCIBLE, il contrôle le temps et le met sur le mode : " + time[tempsRandom]
        + ", il perd la tête et tue tout le monde à l'aide de : " + object[objectRandom] + ", il décide alors d'invoquer le démon : " + name[nameRandom] + ", qui lui " + verbs[verbesRandom]


    let myCheck =  myText.innerHTML
    clearText();
    cons.innerHTML += "<br>" + myCheck;
});

switch (myText) {
    case "était":
        alert('test')
        break;
    default:
}

function clearText(){

}