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
