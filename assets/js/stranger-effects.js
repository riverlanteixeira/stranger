// Stranger Things AR - Efeitos Visuais e Interativos

class StrangerEffects {
    constructor() {
        this.init();
    }

    init() {
        this.addInterferenceEffect();
        this.addGlitchEffects();
        this.addAtmosphericEffects();
        this.addSoundEffects();
        this.addParticleSystem();
    }

    // Efeito de interferência ocasional na tela
    addInterferenceEffect() {
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% de chance a cada segundo
                const screens = document.querySelectorAll('.ui-screen');
                screens.forEach(screen => {
                    screen.classList.add('interference');
                    setTimeout(() => {
                        screen.classList.remove('interference');
                    }, 100);
                });
            }
        }, 1000);
    }

    // Efeitos de glitch em textos importantes
    addGlitchEffects() {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            element.setAttribute('data-text', element.textContent);
            
            // Glitch ocasional
            setInterval(() => {
                if (Math.random() < 0.1) { // 10% de chance
                    element.style.animation = 'none';
                    setTimeout(() => {
                        element.style.animation = '';
                    }, 50);
                }
            }, 2000);
        });
    }

    // Efeitos atmosféricos
    addAtmosphericEffects() {
        // Adicionar classe de atmosfera ao body
        document.body.classList.add('atmospheric-bg', 'floating-particles', 'tv-static');

        // Efeito de pulsação nas bordas da tela
        this.addScreenPulse();
    }

    addScreenPulse() {
        const pulseOverlay = document.createElement('div');
        pulseOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 1;
            box-shadow: inset 0 0 100px rgba(231, 38, 38, 0.1);
            animation: screen-pulse 4s ease-in-out infinite;
        `;
        
        document.body.appendChild(pulseOverlay);

        // Adicionar keyframes para o pulso
        const style = document.createElement('style');
        style.textContent = `
            @keyframes screen-pulse {
                0%, 100% {
                    box-shadow: inset 0 0 100px rgba(231, 38, 38, 0.05);
                }
                50% {
                    box-shadow: inset 0 0 150px rgba(231, 38, 38, 0.15);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Sistema de efeitos sonoros (placeholder para futura implementação)
    addSoundEffects() {
        this.sounds = {
            glitch: null,
            ambient: null,
            notification: null,
            success: null
        };

        // Preparar para carregar sons quando necessário
        this.loadSounds();
    }

    loadSounds() {
        // Placeholder para carregamento de sons
        // Pode ser implementado futuramente com Web Audio API
        console.log('Sistema de som inicializado');
    }

    // Sistema de partículas flutuantes
    addParticleSystem() {
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        
        document.body.appendChild(particleContainer);

        // Criar partículas
        for (let i = 0; i < 20; i++) {
            this.createParticle(particleContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const color = Math.random() > 0.5 ? '#e72626' : '#ffd54f';
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            animation: float-particle ${duration}s linear infinite ${delay}s;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;

        container.appendChild(particle);

        // Adicionar keyframes para movimento da partícula
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float-particle {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Efeito de digitação para textos
    typeWriter(element, text, speed = 50) {
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.remove('typewriter');
            }
        }, speed);
    }

    // Efeito de shake para elementos
    shakeElement(element, duration = 500) {
        element.style.animation = `shake 0.1s infinite`;
        
        setTimeout(() => {
            element.style.animation = '';
        }, duration);

        // Adicionar keyframes se não existirem
        if (!document.querySelector('#shake-styles')) {
            const style = document.createElement('style');
            style.id = 'shake-styles';
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Efeito de flash para notificações importantes
    flashScreen(color = '#e72626', duration = 200) {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${color};
            opacity: 0.3;
            z-index: 9999;
            pointer-events: none;
            animation: flash ${duration}ms ease-out;
        `;

        document.body.appendChild(flash);

        setTimeout(() => {
            document.body.removeChild(flash);
        }, duration);

        // Adicionar keyframes para flash
        if (!document.querySelector('#flash-styles')) {
            const style = document.createElement('style');
            style.id = 'flash-styles';
            style.textContent = `
                @keyframes flash {
                    0% { opacity: 0; }
                    50% { opacity: 0.3; }
                    100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Método para aplicar tema escuro
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Método para adicionar efeito neon a um elemento
    addNeonEffect(element) {
        element.classList.add('neon-border', 'pulse-glow');
    }

    // Método para remover todos os efeitos de um elemento
    removeEffects(element) {
        const effectClasses = [
            'neon-border', 'pulse-glow', 'glitch-text', 
            'typewriter', 'fade-in-up', 'important-pulse'
        ];
        
        effectClasses.forEach(className => {
            element.classList.remove(className);
        });
    }
}

// Inicializar efeitos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.strangerEffects = new StrangerEffects();
    
    // Adicionar efeitos a elementos específicos
    const logo = document.getElementById('logo');
    if (logo) {
        logo.classList.add('fade-in-up');
    }

    const enterButton = document.getElementById('enter-button');
    if (enterButton) {
        enterButton.classList.add('retro-button');
    }

    // Adicionar efeito de digitação ao texto de carregamento
    const loadingInfo = document.getElementById('loading-info');
    if (loadingInfo) {
        const originalText = loadingInfo.textContent;
        window.strangerEffects.typeWriter(loadingInfo, originalText, 100);
    }
});

// Exportar para uso global
window.StrangerEffects = StrangerEffects;