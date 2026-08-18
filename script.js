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
            choix: ["MAMAN", "PAPA", "CHAT", "SAC"],
            son: "maman"
        },

        {
            image: "👨",
            bonne: ["PAPA"],
            choix: ["PAPA", "MAMAN", "LIVRE", "MOTO"],
            son: "papa"
        },

        {
            image: "🐱",
            bonne: ["CHAT"],
            choix: ["CHAT", "CHIEN", "SAC", "LAPIN"],
            son: "chat"
        },

        {
            image: "🏍️",
            bonne: ["MOTO"],
            choix: ["MOTO", "MAISON", "CHAT", "VELO"],
            son: "moto"
        },

        {
            image: "🎒",
            bonne: ["CARTABLE"],
            choix: [
                "CARTABLE",
                "ECOLE",
                "LIVRE",
                "TABLE"
            ],
            son: "cartable"
        },

        {
            image: "🍋",
            bonne: ["CITRON"],
            choix: [
                "CITRON",
                "BANANE",
                "POMME",
                "POIRE"
            ],
            son: "citron"
        },

        {
            image: "🎩",
            bonne: ["CHAPEAU"],
            choix: [
                "CHAPEAU",
                "CARTABLE",
                "MANTEAU",
                "CHAUSSURE"
            ],
            son: "chapeau"
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
            choix: ["MA", "MAN", "PA", "LO"],
            son: "maman"
        },

        // PAPA
        // IMPORTANT :
        // Il faut DEUX cartes PA.
        {
            image: "👨",
            bonne: ["PA", "PA"],
            choix: ["PA", "PA", "MA", "LO"],
            son: "papa"
        },

        // MOTO
        {
            image: "🏍️",
            bonne: ["MO", "TO"],
            choix: ["MO", "TO", "MA", "PA"],
            son: "moto"
        },

        // BANANE
        {
            image: "🍌",
            bonne: ["BA", "NA", "NE"],
            choix: ["BA", "NA", "NE", "MA"],
            son: "banane"
        },

        // CARTABLE
        {
            image: "🎒",
            bonne: ["CAR", "TA", "BLE"],
            choix: ["CAR", "TA", "BLE", "MA"],
            son: "cartable"
        },

        // CHAPEAU
        {
            image: "🎩",
            bonne: ["CHA", "PEAU"],
            choix: ["CHA", "PEAU", "PA", "LO"],
            son: "chapeau"
        },

        // CITRON
        {
            image: "🍋",
            bonne: ["CI", "TRON"],
            choix: ["CI", "TRON", "TA", "BLE"],
            son: "citron"
        },

        // BONJOUR
        {
            image: "👋",
            bonne: ["BON", "JOUR"],
            choix: ["BON", "JOUR", "MA", "PA"],
            son: "bonjour"
        },

        // MAISON
        {
            image: "🏠",
            bonne: ["MAI", "SON"],
            choix: ["MAI", "SON", "MA", "PA"],
            son: "maison"
        },

        // MATIN
        {
            image: "🌅",
            bonne: ["MA", "TIN"],
            choix: ["MA", "TIN", "TA", "LO"],
            son: "matin"
        },

        // PORTE
        {
            image: "🚪",
            bonne: ["PORTE"],
            choix: ["PORTE", "PA", "MA", "LO"],
            son: "porte"
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
            ],
            son: "Le chat dort."
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
            ],
            son: "Papa lit un livre."
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
            ],
            son: "Maman mange une pomme."
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
            ],
            son: "Ali joue au ballon."
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
            ],
            son: "Lina va à l'école."
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
            ],
            son: "Le bébé boit du lait."
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
            ],
            son: "Papa mange le repas."
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
// VOIX FRANÇAISE
// =====================================================

let voixFrancaise = null;


// Recherche d'une voix française disponible
function chargerVoixFrancaise() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    const voix =
        window.speechSynthesis.getVoices();


    // Chercher une voix française
    voixFrancaise =
        voix.find(function(v) {

            return v.lang &&
                   v.lang.toLowerCase()
                   .startsWith("fr");

        });


    // Si aucune voix française
    // n'est trouvée, on utilisera
    // la voix par défaut.
}


// Certaines versions de Chrome/Android
// chargent les voix après le démarrage.
if ("speechSynthesis" in window) {

    chargerVoixFrancaise();

    window.speechSynthesis.onvoiceschanged =
        chargerVoixFrancaise;
}


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

    const jeu =
        jeux[niveau][numero];


    // =================================================
    // IMAGE
    // =================================================

    document.getElementById(
        "image"
    ).textContent = jeu.image;


    // =================================================
    // TITRE
    // =================================================

    const question =
        document.getElementById(
            "question"
        );


    if (niveau === "mots") {

        question.textContent =
            "Trouve le mot";

    }

    else if (niveau === "syllabes") {

        question.textContent =
            "Construis le mot avec les syllabes";

    }

    else {

        question.textContent =
            "Construis la phrase";

    }


    // =================================================
    // CONSIGNE
    // =================================================

    const info =
        document.getElementById(
            "info-niveau"
        );


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


    // =================================================
    // RESET
    // =================================================

    document.getElementById(
        "construction"
    ).innerHTML = "";


    document.getElementById(
        "message"
    ).textContent = "";


    // =================================================
    // ZONE DES CARTES
    // =================================================

    const zone =
        document.getElementById(
            "mots"
        );


    zone.innerHTML = "";


    // =================================================
    // MÉLANGER LES CARTES
    //
    // IMPORTANT :
    // Les doublons sont conservés.
    //
    // PAPA :
    // ["PA", "PA", "MA", "LO"]
    //
    // donne bien deux cartes PA.
    // =================================================

    const choix =
        melanger(
            [...jeu.choix]
        );


    choix.forEach(
        function(element, index) {

            const bouton =
                document.createElement(
                    "button"
                );


            bouton.className =
                "mot";


            bouton.textContent =
                element;


            // Identifiant unique
            bouton.dataset.id =
                index;


            // =================================================
            // CLIC SUR UNE CARTE
            // =================================================

            bouton.onclick =
                function() {

                    // Si cette carte a déjà
                    // été utilisée, ne rien faire.

                    if (
                        bouton.classList.contains(
                            "utilise"
                        )
                    ) {

                        return;

                    }


                    // Ajouter la carte
                    // à la réponse.

                    reponse.push(
                        element
                    );


                    // Marquer cette carte
                    // comme utilisée.

                    bouton.classList.add(
                        "utilise"
                    );


                    // Afficher la construction.

                    afficherConstruction();

                };


            zone.appendChild(
                bouton
            );

        }
    );

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


    reponse.forEach(
        function(element) {

            const span =
                document.createElement(
                    "span"
                );


            span.className =
                "mot";


            span.textContent =
                element;


            zone.appendChild(
                span
            );

        }
    );

}


// =====================================================
// VÉRIFIER
// =====================================================

function verifier() {

    const jeu =
        jeux[niveau][numero];


    const bonne =
        jeu.bonne;


    // =================================================
    // PAS ASSEZ D'ÉLÉMENTS
    // =================================================

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


    // =================================================
    // TROP D'ÉLÉMENTS
    // =================================================

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


    // =================================================
    // COMPARAISON
    // =================================================

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


        // Prononcer le mot complet
        // ou la phrase complète.

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

    const jeu =
        jeux[niveau][numero];


    // Utiliser le texte spécialement
    // prévu pour la prononciation.
    //
    // Exemple :
    //
    // bonne = ["PA", "PA"]
    //
    // son = "papa"
    //
    // Le téléphone dira :
    // "papa"
    //
    // et PAS :
    // "PA PA"

    let texte =
        jeu.son;


    // Sécurité :
    // si son n'existe pas,
    // reconstruire le texte.

    if (!texte) {

        if (niveau === "mots") {

            texte =
                jeu.bonne.join("");

        }

        else {

            texte =
                jeu.bonne.join(" ");

        }

    }


    parler(texte);

}


// =====================================================
// PRONONCER UN MOT OU UNE PHRASE
// =====================================================

function parler(texte) {

    // Vérifier si la synthèse vocale
    // existe sur le navigateur.

    if (
        !("speechSynthesis" in window)
    ) {

        document.getElementById(
            "message"
        ).textContent =
            "🔊 La synthèse vocale n'est pas disponible.";

        return;

    }


    // Arrêter toute ancienne lecture.

    window.speechSynthesis.cancel();


    // Petit délai pour certains
    // navigateurs Android.

    setTimeout(
        function() {

            const voix =
                new SpeechSynthesisUtterance(
                    texte
                );


            // =================================================
            // LANGUE FRANÇAISE
            // =================================================

            voix.lang = "fr-FR";


            // Utiliser une vraie voix
            // française si elle existe.

            if (voixFrancaise) {

                voix.voice =
                    voixFrancaise;

            }


            // =================================================
            // VITESSE
            // =================================================

            // 0.70 = assez lent pour
            // un enfant.

            voix.rate = 0.70;


            // Ton normal.

            voix.pitch = 1;


            // Volume maximum.

            voix.volume = 1;


            // =================================================
            // LECTURE
            // =================================================

            window.speechSynthesis.speak(
                voix
            );

        },
        100
    );

}


// =====================================================
// DÉMARRAGE
// =====================================================

afficher();
