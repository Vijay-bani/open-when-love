class EnvelopeApp {
    constructor() {
        this.envelopes = document.querySelectorAll('.envelope');
        this.init();
    }
    
    init() {
        this.envelopes.forEach((envelope, index) => {
            envelope.style.animationDelay = `${index * 0.2}s`;
            
            envelope.addEventListener('click', (e) => this.openEnvelope(envelope));
            
            const closeBtn = envelope.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.closeEnvelope(envelope);
                });
            }
        });
    }
    
    openEnvelope(envelope) {
        envelope.classList.add('opening');
        
        setTimeout(() => {
            const letter = envelope.querySelector('.letter');
            const heartsContainer = envelope.querySelector('.hearts');
            letter.classList.add('open');
            
            this.createHearts(heartsContainer);
            
            // Prevent multiple clicks
            envelope.style.pointerEvents = 'none';
            setTimeout(() => {
                envelope.style.pointerEvents = 'auto';
            }, 1000);
        }, 600);
    }
    
    closeEnvelope(envelope) {
        const letter = envelope.querySelector('.letter');
        const flap = envelope.querySelector('.envelope-flap');
        
        letter.classList.remove('open');
        envelope.classList.remove('opening');
        
        flap.style.transform = 'translateX(-50%)';
    }
    
    createHearts(container) {
        const hearts = ['💕', '💖', '💗', '💓', '💞', '💘'];
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 0.3 + 's';
                container.appendChild(heart);
                
                setTimeout(() => heart.remove(), 1000);
            }, i * 100);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnvelopeApp();
});
