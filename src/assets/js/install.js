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
////

const screenWidth = screen.width;

if(screenWidth < 1024) {
  let deferredInstallPrompt = null;

  window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

  function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installPWA();
  }

  function installPWA() {
    deferredInstallPrompt.prompt();
  }
}
