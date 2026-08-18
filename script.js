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

        {
            image: "👩",
            bonne: ["MA", "MAN"],
            choix: ["MA", "MAN", "PA", "LO"],
            son: "maman"
        },

        {
            image: "👨",
            bonne: ["PA", "PA"],
            choix: ["PA", "PA", "MA", "LO"],
            son: "papa"
        },

        {
            image: "🏍️",
            bonne: ["MO", "TO"],
            choix: ["MO", "TO", "MA", "PA"],
            son: "moto"
        },

        {
            image: "🍌",
            bonne: ["BA", "NA", "NE"],
            choix: ["BA", "NA", "NE", "MA"],
            son: "banane"
        },

        {
            image: "🎒",
            bonne: ["CAR", "TA", "BLE"],
            choix: ["CAR", "TA", "BLE", "MA"],
            son: "cartable"
        },

        {
            image: "🎩",
            bonne: ["CHA", "PEAU"],
            choix: ["CHA", "PEAU", "PA", "LO"],
            son: "chapeau"
        },

        {
            image: "🍋",
            bonne: ["CI", "TRON"],
            choix: ["CI", "TRON", "TA", "BLE"],
            son: "citron"
        },

        {
            image: "👋",
            bonne: ["BON", "JOUR"],
            choix: ["BON", "JOUR", "MA", "PA"],
            son: "bonjour"
        },

        {
            image: "🏠",
            bonne: ["MAI", "SON"],
            choix: ["MAI", "SON", "MA", "PA"],
            son: "maison"
        },

        {
            image: "🌅",
            bonne: ["MA", "TIN"],
            choix: ["MA", "TIN", "TA", "LO"],
            son: "matin"
        },

        {
            image: "🚪",
            bonne: ["PORTE"],
            choix: ["PORTE", "PA", "MA", "LO"],
            son: "porte"
        }

    ],


    // =================================================
    // NIVEAU 3 : COULEURS
    // =================================================

    couleurs: [

        {
            image: "🍎",
            bonne: ["ROUGE"],
            choix: ["ROUGE", "BLEU", "JAUNE"],
            son: "rouge. La pomme est rouge.",
            classe: "carte-rouge"
        },

        {
           image: "🔵☁️",
            bonne: ["BLEU"],
            choix: ["BLEU", "ROUGE", "JAUNE"],
            son: "bleu. Le ciel est bleu.",
            classe: "carte-bleu"
        },

        {
            image: "☀️",
            bonne: ["JAUNE"],
            choix: ["JAUNE", "ROUGE", "BLEU"],
            son: "jaune. Le soleil est jaune.",
            classe: "carte-jaune"
        }

    ],


    // =================================================
    // NIVEAU 4 : PHRASES
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


function chargerVoixFrancaise() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    const voix =
        window.speechSynthesis.getVoices();

    voixFrancaise =
        voix.find(function(v) {

            return v.lang &&
                   v.lang.toLowerCase().startsWith("fr");

        });
}


// Chargement initial des voix

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
        document.getElementById("question");


    if (niveau === "mots") {

        question.textContent =
            "Trouve le mot";

    }

    else if (niveau === "syllabes") {

        question.textContent =
            "Construis le mot avec les syllabes";

    }

    else if (niveau === "couleurs") {

        question.textContent =
            "Trouve la couleur";

    }

    else if (niveau === "phrases") {

        question.textContent =
            "Construis la phrase";

    }


    // =================================================
    // CONSIGNE
    // =================================================

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

    else if (niveau === "couleurs") {

        info.textContent =
            "👆 Choisis la couleur correspondant à l'image.";

    }

    else if (niveau === "phrases") {

        info.textContent =
            "👆 Choisis les mots dans le bon ordre.";

    }


    // =================================================
    // RESET
    // =================================================

    reponse = [];

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
        document.getElementById("mots");

    zone.innerHTML = "";


    // =================================================
    // MÉLANGER LES CHOIX
    // =================================================

    const choix =
        melanger([...jeu.choix]);


    choix.forEach(
        function(element, index) {

            const bouton =
                document.createElement("button");


            // =================================================
            // STYLE NORMAL / COULEURS
            // =================================================

            if (niveau === "couleurs") {

                bouton.className =
                    "mot carte-couleur";

                // Donner une couleur visuelle
                // à chaque bouton.

                if (element === "ROUGE") {

                    bouton.classList.add(
                        "carte-rouge"
                    );

                }

                else if (element === "BLEU") {

                    bouton.classList.add(
                        "carte-bleu"
                    );

                }

                else if (element === "JAUNE") {

                    bouton.classList.add(
                        "carte-jaune"
                    );

                }

            }

            else {

                bouton.className = "mot";

            }


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

                    if (
                        bouton.classList.contains("utilise")
                    ) {

                        return;

                    }


                    // Ajouter la réponse

                    reponse.push(element);


                    // Désactiver la carte

                    bouton.classList.add(
                        "utilise"
                    );


                    // Afficher la construction

                    afficherConstruction();

                };


            zone.appendChild(bouton);

        }
    );
}


// =====================================================
// AFFICHER LA CONSTRUCTION
// =====================================================

function afficherConstruction() {

    const zone =
        document.getElementById("construction");


    zone.innerHTML = "";


    reponse.forEach(
        function(element) {

            const span =
                document.createElement("span");


            span.className =
                "mot";


            span.textContent =
                element;


            zone.appendChild(span);

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
        reponse.length < bonne.length
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
        reponse.length > bonne.length
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
            reponse[i] !== bonne[i]
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


        // Prononcer automatiquement

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
        numero >= jeux[niveau].length
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
                Math.random() * (i + 1)
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


    let texte =
        jeu.son;


    // Sécurité si "son" n'existe pas

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


    // Petit délai utile sur Android

    setTimeout(
        function() {

            const voix =
                new SpeechSynthesisUtterance(
                    texte
                );


            // Français

            voix.lang = "fr-FR";


            // Voix française disponible

            if (voixFrancaise) {

                voix.voice =
                    voixFrancaise;
            }


            // Vitesse adaptée à l'enfant

            voix.rate = 0.70;


            // Ton normal

            voix.pitch = 1;


            // Volume maximum

            voix.volume = 1;


            // Lecture

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
