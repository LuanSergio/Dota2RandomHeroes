let deferredInstallPrompt = null;
const screenWidth = screen.width;
const installButton = document.querySelector('[data-install-pwa-button]');
const installBox = document.querySelector('[data-install-box]')
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
installButton.addEventListener('click', installPWA);


function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  if(screenWidth < 767) {
    installBox.classList.remove('h-hidden');
  } else {
    deferredInstallPrompt.prompt();
  }
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  installBox.srcElement.setAttribute('hidden', true);
  installBox.classList.add('h-hidden');
}
