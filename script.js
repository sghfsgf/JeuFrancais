// ===============================
// DONNÉES DU JEU
// ===============================

const jeux = {

    mots: [

        {
            image: "👩",
            bonne: ["MAMAN"],
            choix: ["MAMAN", "PAPA", "CHAT", "SAC"]
        },

        {
            image: "👨",
            bonne: ["PAPA"],
            choix: ["PAPA", "MAMAN", "LIVRE", "MOTO"]
        },

        {
            image: "🐱",
            bonne: ["CHAT"],
            choix: ["CHAT", "CHIEN", "SAC", "LAPIN"]
        },

        {
            image: "🏍️",
            bonne: ["MOTO"],
            choix: ["MOTO", "MAISON", "CHAT", "VELO"]
        },

        {
            image: "🎒",
            bonne: ["CARTABLE"],
            choix: ["CARTABLE", "ECOLE", "LIVRE", "TABLE"]
        }

    ],

    syllabes: [

        {
            image: "👩",
            bonne: ["MA", "MAN"],
            choix: ["MAN", "PA", "MA", "LO"]
        },

        {
            image: "👨",
            bonne: ["PA", "PA"],
            choix: ["PA", "MA", "LO", "MI"]
        },

        {
            image: "🏍️",
            bonne: ["MO", "TO"],
            choix: ["TO", "MO", "MA", "PA"]
        },

        {
            image: "🍌",
            bonne: ["BA", "NA", "NE"],
            choix: ["NE", "BA", "NA", "MA"]
        },

        {
            image: "🎒",
            bonne: ["CAR", "TA", "BLE"],
            choix: ["BLE", "CAR", "TA", "MA"]
        }

    ],

    phrases: [

        {
            image: "🐱",
            bonne: ["Le", "chat", "dort"],
            choix: ["dort", "Le", "chat"]
        },

        {
            image: "📖",
            bonne: ["Papa", "lit", "un", "livre"],
            choix: ["livre", "Papa", "un", "lit"]
        },

        {
            image: "🍎",
            bonne: ["Maman", "mange", "une", "pomme"],
            choix: ["pomme", "une", "Maman", "mange"]
        },

        {
            image: "⚽",
            bonne: ["Ali", "joue", "au", "ballon"],
            choix: ["ballon", "Ali", "au", "joue"]
        },

        {
            image: "🏫",
            bonne: ["Lina", "va", "à", "l'école"],
            choix: ["l'école", "va", "Lina", "à"]
        }

    ]

};


// ===============================
// VARIABLES
// ===============================

let niveau = "mots";

let numero = 0;

let reponse = [];

let score = 0;


// ===============================
// AFFICHER LE JEU
// ===============================

function afficherJeu(type) {

    niveau = type;

    numero = 0;

    reponse = [];

    afficher();

}


// ===============================
// AFFICHER UNE QUESTION
// ===============================

function afficher() {

    const jeu = jeux[niveau][numero];

    document.getElementById("image").textContent =
        jeu.image;

    document.getElementById("construction").innerHTML = "";

    document.getElementById("message").textContent = "";

    const zone = document.getElementById("mots");

    zone.innerHTML = "";

    let choix = melanger([...jeu.choix]);


    choix.forEach(function(element) {

        const bouton = document.createElement("button");

        bouton.className = "mot";

        bouton.textContent = element;

        bouton.onclick = function() {

            if (bouton.classList.contains("utilise")) {
                return;
            }

            reponse.push(element);

            bouton.classList.add("utilise");

            afficherConstruction();

        };

        zone.appendChild(bouton);

    });

}


// ===============================
// AFFICHER LA RÉPONSE
// ===============================

function afficherConstruction() {

    const zone =
        document.getElementById("construction");

    zone.innerHTML = "";

    reponse.forEach(function(element) {

        const span =
            document.createElement("span");

        span.className = "mot";

        span.textContent = element;

        zone.appendChild(span);

    });

}


// ===============================
// VÉRIFIER
// ===============================

function verifier() {

    const bonne =
        jeux[niveau][numero].bonne;

    if (reponse.length !== bonne.length) {

        document.getElementById("message").textContent =
            "👆 Choisis tous les éléments.";

        return;
    }


    let correct = true;


    for (let i = 0; i < bonne.length; i++) {

        if (reponse[i] !== bonne[i]) {

            correct = false;

        }

    }


    if (correct) {

        score++;

        document.getElementById("score").textContent =
            "⭐ Score : " + score;

        document.getElementById("message").textContent =
            "🎉 Bravo ! Très bien !";

        ecouter();

    } else {

        document.getElementById("message").textContent =
            "❌ Essaie encore !";

    }

}


// ===============================
// EFFACER
// ===============================

function effacer() {

    reponse = [];

    afficher();

}


// ===============================
// QUESTION SUIVANTE
// ===============================

function suivant() {

    numero++;

    if (numero >= jeux[niveau].length) {

        numero = 0;

    }

    reponse = [];

    afficher();

}


// ===============================
// MÉLANGER
// ===============================

function melanger(tableau) {

    for (
        let i = tableau.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            tableau[i],
            tableau[j]
        ] =
        [
            tableau[j],
            tableau[i]
        ];

    }

    return tableau;

}


// ===============================
// LIRE À VOIX HAUTE
// ===============================

function ecouter() {

    const texte =
        jeux[niveau][numero].bonne.join(" ");

    if ("speechSynthesis" in window) {

        const voix =
            new SpeechSynthesisUtterance(texte);

        voix.lang = "fr-FR";

        voix.rate = 0.75;

        speechSynthesis.cancel();

        speechSynthesis.speak(voix);

    }

}


// ===============================
// DÉMARRAGE
// ===============================

afficher();
