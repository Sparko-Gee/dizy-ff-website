export function addFormStyles() {
    const style = document.createElement('style')
    style.textContent = `
        .error-message {
            background-color: #fee2e2;
            color: #dc2626;
            padding: 0.75rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            display: none;
        }
        
        .success-message {
            background-color: #dcfce7;
            color: #16a34a;
            padding: 0.75rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            display: none;
        }
        
        .user-info {
            display: none;
            align-items: center;
            gap: 1rem;
            color: white;
        }
    `
    document.head.appendChild(style)
}