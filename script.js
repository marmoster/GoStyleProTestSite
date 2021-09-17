let buttons = document.querySelector("#buttons")
let cameraButton = buttons.querySelector(".button-camera")
let galleryButton = document.querySelector(".button-message")
let cameraOrGalleryButton = document.querySelector(".button-call")

function openCamera() {
    window.webkit.messageHandlers.openCamera.postMessage("cameraButton click");
}

function openGallery() {
    window.webkit.messageHandlers.openGallery.postMessage("galleryButton click");
}

function openCameraOrGallery() {
    window.webkit.messageHandlers.openCameraOrGallery.postMessage("cameraOrGalleryButton click");
}

cameraButton.addEventListener("click", openCamera)

galleryButton.addEventListener("click", openGallery)

cameraOrGalleryButton.addEventListener("click", openCameraOrGallery)