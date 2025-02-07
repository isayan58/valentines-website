// Fireworks effect when "Yes" is clicked
function showFireworks() {
    document.getElementById("fireworks").classList.remove("hidden");
    alert("YAY! You made me the happiest person! ❤️🥰");
}

// Move "No" button away when hovered
function moveNoButton() {
    let noButton = document.querySelector(".no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Infinite loop until "Yes" is clicked
function forceYes() {
    alert("You can't say no! 😜 Try again...");
}
