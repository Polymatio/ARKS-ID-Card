document.getElementById("download").onclick = function() {
    const screenShotTarget = document.getElementById("arksCard");

    html2canvas(screenShotTarget).then((canvas) => {
        const baseImage = canvas.toDataURL("image/png");
        let anchor = document.createElement('a');
        anchor.setAttribute("href", baseImage);
        anchor.setAttribute("download", "my-arks-card.png");
        anchor.click();
        anchor.remove();
    });

    html2canvas(screenShotTarget, {
        scale: 2
    })
}