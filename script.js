document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "https://www.example.com/" + button.innerText.toLowerCase().replace(/\s+/g, '');
    });
});
