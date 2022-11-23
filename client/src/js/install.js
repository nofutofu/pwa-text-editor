const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// before the app is installed, the button works to install the app
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// after the button has been clicked, it prompts the user to install it onto their machine and deactivates the button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
