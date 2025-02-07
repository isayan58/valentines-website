// Fireworks effect when "Yes" is clicked
function showFireworks() {
    document.getElementById("fireworks").classList.remove("hidden");
}

// Move "No" button away when hovered
function moveNoButton() {
    let noButton = document.querySelector(".no");
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
