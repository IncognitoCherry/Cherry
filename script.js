document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/ubergdooper/" + button.innerText.toLowerCase().replace(/\s+/g, '');
    });
});
