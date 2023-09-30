document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "#" + button.innerText.toLowerCase().replace(/\s+/g, '');
    });
});
