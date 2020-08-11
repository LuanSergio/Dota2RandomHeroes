// let deferredInstallPrompt = null;
// const installButton = document.getElementById('butInstall');
// installButton.addEventListener('click', installPWA);

// window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// function saveBeforeInstallPromptEvent(evt) {
//   deferredInstallPrompt = evt;
//   installButton.removeAttribute('hidden');
// }

// function installPWA(evt) {
//   deferredInstallPrompt.prompt();
//   evt.srcElement.setAttribute('hidden', true);
// }

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
}
