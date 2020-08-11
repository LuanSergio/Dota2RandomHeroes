// window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// function saveBeforeInstallPromptEvent() {
//   deferredInstallPrompt = evt;
//   installButton.removeAttribute('hidden');

//   deferredInstallPrompt.prompt();
//   // Hide the install button, it can't be called twice.
//   evt.srcElement.setAttribute('hidden', true);
// }

// let deferredInstallPrompt = null;
// const installButton = document.getElementById('butInstall');
// installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
}
