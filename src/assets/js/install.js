let deferredInstallPrompt = null;
const screenWidth = screen.width;
const installButton = document.querySelector("[data-install-pwa-button]");
const installBox = document.querySelector("[data-install-box]");

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);
installButton.addEventListener("click", installPWA);

function saveBeforeInstallPromptEvent(evt) {
  if (screenWidth < 767) {
    deferredInstallPrompt = evt;
    installBox.classList.remove("h-hidden");
    installBox.setAttribute("aria-hidden", false);
  }
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  installBox.setAttribute("aria-hidden", true);
  installBox.setAttribute("hidden", true);
  installBox.classList.add("h-hidden");
}
