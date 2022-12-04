let mySend = document.getElementById("send");
let info = document.getElementById("info");
let myText = document.getElementById("text");
let cons = document.getElementById("cons");



let name = [
    "Patrick",
    "Bernard",
    "Jacky",
    "Michel",
    "Francky"
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
let object = [
    "Ciseaux",
    "Capes",
    "Tasse",
    "Brosse à dent",
    "Casque",
    "Manettes",
    "Chaise"
]

mySend.addEventListener("click", function (){
    let nameRandom = Math.floor(Math.random() * name.length)
    let lieuxRandom = Math.floor(Math.random() * premises.length)
    let tempsRandom = Math.floor(Math.random() * time.length)
    let objectRandom = Math.floor(Math.random() * object.length)
    let verbesRandom = Math.floor(Math.random() * verbs.length)

    switch (verbs[verbesRandom]){
        case "Choisir":
            verbs.splice(1, 1, "choisi d'être gentil et d'instaurer la paix et de punir les méchants.");
            console.log(verbs)
            break;
        case "Appeler":
            verbs.splice(0, 1, "appel sa mère afin de demander des conseils pour être un méchant démon..");
            console.log(verbs)
            break;
        case "Ouvrir":
            verbs.splice(2, 1, "ouvre les portes de l'enfer et punis tout le reste de la galaxie");
            console.log(verbs)
            break;
        case "Perdre":
            verbs.splice(3, 1, "celui qui perd toujours contre le bien");
            console.log(verbs)
            break;
        case "Rendre":
            verbs.splice(4, 1, " lui se rend directement à la police");
            console.log(verbs)
            break;
        case "Produire":
            verbs.splice(5, 1, " produit un énorme chakra et tue le doux jésus");
            console.log(verbs)
            break;
        case "Mettre":
            verbs.splice(6, 1, " se met de la crème avant de dilater... la guerre");
            console.log(verbs)
            break;
        case "Agir":
            verbs.splice(7, 1, " lui agit en conséquences des actes");
            console.log(verbs)
            break;
        case "Devenir":
            verbs.splice(8, 1, " lui souhaiter devenir à la base une stars.");
            console.log(verbs)
            break;
        case "Remettre":
            verbs.splice(9, 1, " ne se remet pas du décès de sa tortue");
            console.log(verbs)
            break;
    }
    switch (object[objectRandom]){
        case "Casque":
            object.splice(4, 1, "son casque");
            console.log(object)
            break;
        case "Capes":
            object.splice(1, 1, "sa capes");
            console.log(object)
            break;
        case "Tasse":
            object.splice(2, 1, "sa tasse");
            console.log(object)
            break;
        case "Brosse à dent":
            object.splice(3, 1, "sa brosse à dent");
            console.log(object)
            break;
        case "Ciseaux":
            object.splice(0, 1, "sa paire de ciseaux");
            console.log(object)
            break;
        case "Manettes":
            object.splice(5, 1, "sa manettes");
            console.log(object)
            break;
        case "Chaise":
            object.splice(6, 1, "sa chaise");
            console.log(object)
            break;
    }
    switch (premises[lieuxRandom]){
        case "Campagne":
            premises.splice(2, 1, "la campagnes");
            console.log(premises)
            break;
        case "Camps de gitan":
            premises.splice(1, 1, "côtés du camps de gitans");
            console.log(premises)
            break;
        default:
    }

    myText.innerHTML = info.value + " " + "se balade avec " + name[nameRandom] + " à" + "  " + premises[lieuxRandom]
        + ", quand tout d'un coup! avec " + object[objectRandom]  + " " + "il deviens INVINCIBLE, il contrôle le temps et le met sur le mode : " + time[tempsRandom]
        + ", il perd la tête et tue tout le monde à l'aide de " + object[objectRandom] + ", il décide alors d'invoquer le démon : " + name[nameRandom] + ", qui " + verbs[verbesRandom]


    let myCheck =  myText.innerHTML
    clearText();
    cons.innerHTML +=  myCheck + "<br>" + "<br>";
});

switch (myText) {
    case "était":
        alert('test')
        break;
    default:
}

function clearText(){

}