let buttons = document.querySelector("#buttons")
let cameraButton = buttons.querySelector(".button-camera")
let galleryButton = document.querySelector(".button-gallery")
let cameraOrGalleryButton = document.querySelector(".button-camera-or-gallery")
let cameraWithCardOverlayButton = document.querySelector(".button-camera-with-card-overlay")
let phoneButton = document.querySelector(".button-call")
let smsButton = document.querySelector(".button-sms")
let locationButoon = document.querySelector(".button-location")
let emailButton = document.querySelector(".button-email")

function openCamera() {
    window.webkit.messageHandlers.openCamera.postMessage("cameraButton click");
}

function openGallery() {
    window.webkit.messageHandlers.openGallery.postMessage("galleryButton click");
}

function openCameraOrGallery() {
    window.webkit.messageHandlers.openCameraOrGallery.postMessage("cameraOrGalleryButton click");
}

function openCameraWithCardOverlay() {
    window.webkit.messageHandlers.openCameraWithCardOverlay.postMessage("OpenCameraWithCardOverlay click");
}

function openPhone() {
    window.webkit.messageHandlers.openPhone.postMessage("openPhone click");
}

function openSMS() {
    window.webkit.messageHandlers.openSMS.postMessage("openSMS click");
}

function determineLocation() {
    window.webkit.messageHandlers.determineLocation.postMessage("determineLocation click");
}

function openEmail() {
    window.webkit.messageHandlers.openEmail.postMessage("openEmail click");
}

cameraButton.addEventListener("click", openCamera)

galleryButton.addEventListener("click", openGallery)

cameraOrGalleryButton.addEventListener("click", openCameraOrGallery)

cameraWithCardOverlayButton.addEventListener("click", openCameraWithCardOverlay)

phoneButton.addEventListener("click", openPhone)

smsButton.addEventListener("click", openSMS)

locationButoon.addEventListener("click", determineLocation)

emailButton.addEventListener("click", openEmail)