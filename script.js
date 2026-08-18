// =====================================================
// JE JOUE ET J'APPRENDS LE FRANÇAIS
// =====================================================


// =====================================================
// DONNÉES DU JEU
// =====================================================

const jeux = {

    // =================================================
    // NIVEAU 1 : MOTS
    // =================================================

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
            choix: [
                "CARTABLE",
                "ECOLE",
                "LIVRE",
                "TABLE"
            ]
        },

        {
            image: "🍋",
            bonne: ["CITRON"],
            choix: [
                "CITRON",
                "BANANE",
                "POMME",
                "POIRE"
            ]
        },

        {
            image: "🎩",
            bonne: ["CHAPEAU"],
            choix: [
                "CHAPEAU",
                "CARTABLE",
                "MANTEAU",
                "CHAUSSURE"
            ]
        }

    ],


    // =================================================
    // NIVEAU 2 : SYLLABES
    // =================================================

    syllabes: [

        // MAMAN
        {
            image: "👩",
            bonne: ["MA", "MAN"],
            choix: ["MA", "MAN", "PA", "LO"]
        },

        // PAPA
        // IMPORTANT :
        // deux PA sont nécessaires
        {
            image: "👨",
            bonne: ["PA", "PA"],
            choix: ["PA", "PA", "MA", "LO"]
        },

        // MOTO
        {
            image: "🏍️",
            bonne: ["MO", "TO"],
            choix: ["MO", "TO", "MA", "PA"]
        },

        // BANANE
        {
            image: "🍌",
            bonne: ["BA", "NA", "NE"],
            choix: ["BA", "NA", "NE", "MA"]
        },

        // CARTABLE
        {
            image: "🎒",
            bonne: ["CAR", "TA", "BLE"],
            choix: ["CAR", "TA", "BLE", "MA"]
        },

        // CHAPEAU
        {
            image: "🎩",
            bonne: ["CHA", "PEAU"],
            choix: ["CHA", "PEAU", "PA", "LO"]
        },

        // CITRON
        {
            image: "🍋",
            bonne: ["CI", "TRON"],
            choix: ["CI", "TRON", "TA", "BLE"]
        },

        // BONJOUR
        {
            image: "👋",
            bonne: ["BON", "JOUR"],
            choix: ["BON", "JOUR", "MA", "PA"]
        },

        // MAISON
        {
            image: "🏠",
            bonne: ["MAI", "SON"],
            choix: ["MAI", "SON", "MA", "PA"]
        },

        // MATIN
        {
            image: "🌅",
            bonne: ["MA", "TIN"],
            choix: ["MA", "TIN", "TA", "LO"]
        },

        // PORTE
        {
            image: "🚪",
            bonne: ["PORTE"],
            choix: ["PORTE", "PA", "MA", "LO"]
        }

    ],


    // =================================================
    // NIVEAU 3 : PHRASES
    // =================================================

    phrases: [

        {
            image: "🐱",
            bonne: [
                "Le",
                "chat",
                "dort"
            ],
            choix: [
                "dort",
                "Le",
                "chat"
            ]
        },

        {
            image: "📖",
            bonne: [
                "Papa",
                "lit",
                "un",
                "livre"
            ],
            choix: [
                "livre",
                "Papa",
                "un",
                "lit"
            ]
        },

        {
            image: "🍎",
            bonne: [
                "Maman",
                "mange",
                "une",
                "pomme"
            ],
            choix: [
                "pomme",
                "une",
                "Maman",
                "mange"
            ]
        },

        {
            image: "⚽",
            bonne: [
                "Ali",
                "joue",
                "au",
                "ballon"
            ],
            choix: [
                "ballon",
                "Ali",
                "au",
                "joue"
            ]
        },

        {
            image: "🏫",
            bonne: [
                "Lina",
                "va",
                "à",
                "l'école"
            ],
            choix: [
                "l'école",
                "va",
                "Lina",
                "à"
            ]
        },

        {
            image: "🥛",
            bonne: [
                "Le",
                "bébé",
                "boit",
                "du",
                "lait"
            ],
            choix: [
                "lait",
                "Le",
                "boit",
                "bébé",
                "du"
            ]
        },

        {
            image: "🍽️",
            bonne: [
                "Papa",
                "mange",
                "le",
                "repas"
            ],
            choix: [
                "repas",
                "Papa",
                "le",
                "mange"
            ]
        }

    ]

};


// =====================================================
// VARIABLES
// =====================================================

let niveau = "mots";

let numero = 0;

let reponse = [];

let score = 0;


// =====================================================
// CHANGER DE NIVEAU
// =====================================================

function afficherJeu(type) {

    niveau = type;

    numero = 0;

    reponse = [];

    afficher();

}


// =====================================================
// AFFICHER UNE QUESTION
// =====================================================

function afficher() {

    const jeu = jeux[niveau][numero];


    // IMAGE

    document.getElementById("image").textContent =
        jeu.image;


    // TITRE

    const question =
        document.getElementById("question");


    if (niveau === "mots") {

        question.textContent =
            "Construis le mot";

    }

    else if (niveau === "syllabes") {

        question.textContent =
            "Construis le mot avec les syllabes";

    }

    else {

        question.textContent =
            "Construis la phrase";

    }


    // INSTRUCTION

    const info =
        document.getElementById("info-niveau");


    if (niveau === "mots") {

        info.textContent =
            "👆 Choisis le mot correspondant à l'image.";

    }

    else if (niveau === "syllabes") {

        info.textContent =
            "👆 Choisis les syllabes dans le bon ordre.";

    }

    else {

        info.textContent =
            "👆 Choisis les mots dans le bon ordre.";

    }


    // RESET

    document.getElementById(
        "construction"
    ).innerHTML = "";


    document.getElementById(
        "message"
    ).textContent = "";


    // ZONE DES CARTES

    const zone =
        document.getElementById("mots");

    zone.innerHTML = "";


    // IMPORTANT :
    // On crée une carte pour CHAQUE occurrence.
    //
    // Exemple :
    // ["PA","PA"]
    //
    // donnera :
    //
    // [PA] [PA]
    //
    // et non une seule carte PA.

    const choix =
        melanger([...jeu.choix]);


    choix.forEach(function(element, index) {

        const bouton =
            document.createElement("button");


        bouton.className = "mot";


        bouton.textContent =
            element;


        // Identifiant unique
        bouton.dataset.id =
            index;


        bouton.onclick =
            function() {

                // Ne pas réutiliser
                // le même bouton.

                if (
                    bouton.classList.contains(
                        "utilise"
                    )
                ) {

                    return;

                }


                reponse.push(element);


                bouton.classList.add(
                    "utilise"
                );


                afficherConstruction();

            };


        zone.appendChild(bouton);

    });

}


// =====================================================
// AFFICHER LA CONSTRUCTION
// =====================================================

function afficherConstruction() {

    const zone =
        document.getElementById(
            "construction"
        );


    zone.innerHTML = "";


    reponse.forEach(function(element) {

        const span =
            document.createElement("span");


        span.className =
            "mot";


        span.textContent =
            element;


        zone.appendChild(span);

    });

}


// =====================================================
// VÉRIFIER
// =====================================================

function verifier() {

    const bonne =
        jeux[niveau][numero].bonne;


    // Pas assez d'éléments

    if (
        reponse.length <
        bonne.length
    ) {

        document.getElementById(
            "message"
        ).textContent =
            "👆 Choisis tous les éléments.";

        return;

    }


    // Trop d'éléments

    if (
        reponse.length >
        bonne.length
    ) {

        document.getElementById(
            "message"
        ).textContent =
            "❌ Il y a trop d'éléments.";

        return;

    }


    // Comparaison

    let correct = true;


    for (
        let i = 0;
        i < bonne.length;
        i++
    ) {

        if (
            reponse[i] !==
            bonne[i]
        ) {

            correct = false;

            break;

        }

    }


    // =================================================
    // BONNE RÉPONSE
    // =================================================

    if (correct) {

        score++;


        document.getElementById(
            "score"
        ).textContent =
            "⭐ Score : " + score;


        document.getElementById(
            "message"
        ).textContent =
            "🎉 Bravo ! Très bien !";


        // Prononcer le mot ou la phrase
        ecouter();

    }


    // =================================================
    // MAUVAISE RÉPONSE
    // =================================================

    else {

        document.getElementById(
            "message"
        ).textContent =
            "❌ Essaie encore !";

    }

}


// =====================================================
// EFFACER
// =====================================================

function effacer() {

    reponse = [];

    afficher();

}


// =====================================================
// QUESTION SUIVANTE
// =====================================================

function suivant() {

    numero++;


    if (
        numero >=
        jeux[niveau].length
    ) {

        numero = 0;

        document.getElementById(
            "message"
        ).textContent =
            "🏆 Bravo ! Tu as terminé ce niveau !";

    }


    reponse = [];

    afficher();

}


// =====================================================
// MÉLANGER
// =====================================================

function melanger(tableau) {

    for (
        let i = tableau.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


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


// =====================================================
// PRONONCIATION
// =====================================================

function ecouter() {

    const texte =
        jeux[niveau][numero]
        .bonne
        .join(" ");


    parler(texte);

}


// =====================================================
// PRONONCER UN MOT / UNE PHRASE
// =====================================================

function parler(texte) {

    if (
        !("speechSynthesis" in window)
    ) {

        document.getElementById(
            "message"
        ).textContent =
            "🔊 La synthèse vocale n'est pas disponible.";

        return;

    }


    // Arrêter une ancienne lecture

    window.speechSynthesis.cancel();


    const voix =
        new SpeechSynthesisUtterance(
            texte
        );


    // Français

    voix.lang = "fr-FR";


    // Vitesse plus lente
    // pour l'enfant

    voix.rate = 0.72;


    // Ton légèrement naturel

    voix.pitch = 1;


    // Lancer

    window.speechSynthesis.speak(
        voix
    );

}


// =====================================================
// DÉMARRAGE
// =====================================================

afficher();
