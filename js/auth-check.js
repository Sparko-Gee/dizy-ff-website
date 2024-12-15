import { checkUser } from './auth.js';

// Update UI based on authentication state
export async function updateAuthUI() {
    const result = await checkUser();
    const authLinks = document.querySelectorAll('.nav-links a[href*="login"], .nav-links a[href*="signup"]');
    
    if (result.success && result.user) {
        // User is logged in
        authLinks.forEach(link => link.style.display = 'none');
        
        // Enable chat input if on chat page
        const chatInput = document.querySelector('.chat-input input');
        const chatButton = document.querySelector('.chat-input button');
        if (chatInput && chatButton) {
            chatInput.disabled = false;
            chatButton.disabled = false;
            chatInput.placeholder = 'Type your message...';
        }
    } else {
        // User is not logged in
        authLinks.forEach(link => link.style.display = 'block');
    }
}