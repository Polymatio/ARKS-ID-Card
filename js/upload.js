const characterPicture = document.querySelector("#characterPicture");
let uploaded_image = "";

characterPicture.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#idPicture").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
})

const stickerPicture = document.querySelector("#stickerPicture");
let uploaded_sticker_image = "";

stickerPicture.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_sticker_image = reader.result;
        document.querySelector("#idSticker").style.backgroundImage = `url(${uploaded_sticker_image})`
    });
    reader.readAsDataURL(this.files[0]);
})