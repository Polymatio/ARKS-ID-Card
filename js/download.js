const downloadLinks = document.querySelectorAll("[data-download");

downloadLinks.forEach(button => {
    const id = button.dataset.download;
    const image = document.getElementById(id);
    const a = document.createElement("a");

    a.href = image.src;
    a.download = "";
    a.style.display = "none";

    button.addEventListener("click", () => {
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
});