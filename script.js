console.log("JS chargé");

// Bouton 1
function messageAmour() {
    alert("Je t'aime ❤️");
}

// Bouton 2
function nouveauMessage() {
    const messages = [
        "Tu rends mes journées plus belles 💕",
        "Je pense à toi tout le temps 💭",
        "Ton sourire me rend heureux 😊",
        "Avec toi, tout est mieux ❤️",
        "Tu es vraiment spécial pour moi ✨",
        "Je t'aime ❤️",
        "Toi, Roiroi et Mouton vous me manquez énormément 💔"
    ];

    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[random];
}

// Compteur d’amour
const debut = new Date("2025-09-05");

function updateTemps() {
    const maintenant = new Date();
    const diff = maintenant - debut;

    const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("temps").textContent = jours + " jours ❤️";
}

updateTemps();
setInterval(updateTemps, 1000);