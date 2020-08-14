let deferredInstallPrompt = null;
const installButton = document.querySelector('[data-install-pwa-button]');
const installBox = document.querySelector('[data-install-box]')
installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installBox.classList.remove('h-hidden');
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  installBox.srcElement.setAttribute('hidden', true);
  // installBox.classList.add('h-hidden');

// CODELAB: Log user response to prompt.
    deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}

// CODELAB: Add event listener for appinstalled event
// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
// CODELAB: Add code to log the event
console.log('Weather App was installed.', evt);
}