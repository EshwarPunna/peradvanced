document.addEventListener('DOMContentLoaded', () => {
    // GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Loading Sequence
    const introTl = gsap.timeline();
    introTl.to('.loading-bar', { left: '100%', duration: 1.5, ease: 'power2.inOut' })
        .to('.intro-overlay', { opacity: 0, pointerEvents: 'none', duration: 1 })
        .from('header', { y: -100, opacity: 0, duration: 1 }, '-=0.5');

    // 2. Visual A: Robot & System (Hero)
    const robotSystemVisual = document.querySelector('#robot-system-visual');
    robotSystemVisual.innerHTML = `
        <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
            <!-- Background System Box -->
            <rect id="system-box" x="50" y="100" width="400" height="250" rx="20" fill="#0a0a15" stroke="var(--accent-cyan)" stroke-width="3" />
            
            <!-- Server LED Details -->
            <g id="leds">
                <circle cx="80" cy="140" r="4" fill="var(--accent-matrix)" />
                <circle cx="100" cy="140" r="4" fill="var(--accent-matrix)" />
                <circle cx="120" cy="140" r="4" fill="var(--accent-matrix)" />
            </g>

            <!-- Floating Robot -->
            <g id="hero-robot">
                <!-- Robot Body -->
                <path d="M250 150 Q280 150 280 180 L280 250 Q280 280 250 280 L220 280 Q220 280 220 250 L220 180 Q220 150 250 150" fill="var(--bg-module)" stroke="var(--accent-cyan)" stroke-width="3" />
                <!-- Robot Head -->
                <circle cx="250" cy="120" r="30" fill="var(--bg-module)" stroke="var(--accent-cyan)" stroke-width="3" />
                <!-- Glowing Eyes -->
                <circle class="robot-eye" cx="240" cy="120" r="4" fill="var(--accent-cyan)" />
                <circle class="robot-eye" cx="260" cy="120" r="4" fill="var(--accent-cyan)" />
                <!-- Robot Arms -->
                <path id="left-arm" d="M220 200 L180 220" stroke="var(--accent-cyan)" stroke-width="4" stroke-linecap="round" />
                <path id="right-arm" d="M280 200 L320 220" stroke="var(--accent-cyan)" stroke-width="4" stroke-linecap="round" />
            </g>

            <!-- Data Packets -->
            <g id="packets"></g>
        </svg>
    `;

    // Loop: Floating Robot
    gsap.to('#hero-robot', { y: -20, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.robot-eye', { opacity: 0.3, duration: 0.1, repeat: -1, repeatDelay: 3, yoyo: true });

    // Animation: Robot interacting with system leds
    gsap.to('#leds circle', { fill: '#fff', stagger: 0.2, repeat: -1, yoyo: true });

    // 3. Visual B: Cartoon Guy (Engineer)
    const cartoonGuyVisual = document.querySelector('#cartoon-guy-visual');
    cartoonGuyVisual.innerHTML = `
        <svg viewBox="0 0 500 400">
            <!-- Desk/Terminal Area -->
            <rect x="50" y="300" width="400" height="10" fill="var(--border-glass)" />
            
            <!-- Cartoon Guy Character -->
            <g id="cartoon-guy">
                <!-- Shirt -->
                <path d="M200 300 Q200 220 250 220 Q300 220 300 300" fill="var(--accent-purple)" opacity="0.6" />
                <!-- Face -->
                <circle cx="250" cy="180" r="45" fill="#f5d0b9" />
                <!-- Glasses -->
                <rect x="215" y="175" width="30" height="15" rx="2" fill="none" stroke="#222" stroke-width="2" />
                <rect x="255" y="175" width="30" height="15" rx="2" fill="none" stroke="#222" stroke-width="2" />
                <line x1="245" y1="182" x2="255" y2="182" stroke="#222" stroke-width="2" />
                <!-- Hair -->
                <path d="M205 180 Q205 130 250 130 Q295 130 295 180" fill="#4a3b31" />
                <!-- Working Arms -->
                <g id="guy-arms">
                    <path d="M220 260 L180 280" stroke="#f5d0b9" stroke-width="12" stroke-linecap="round" />
                    <path d="M280 260 L320 280" stroke="#f5d0b9" stroke-width="12" stroke-linecap="round" />
                </g>
            </g>

            <!-- Floating ML Nodes around him -->
            <g id="ml-environment"></g>
        </svg>
    `;

    // Loop: Cartoon Guy typing motion
    gsap.to('#guy-arms', { y: -5, x: 2, duration: 0.2, repeat: -1, yoyo: true, ease: 'none' });
    gsap.to('#cartoon-guy', { rotate: 1, transformOrigin: 'bottom center', duration: 2, repeat: -1, yoyo: true });

    // Environment: Floating nodes
    const env = document.querySelector('#ml-environment');
    for (let i = 0; i < 6; i++) {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = 100 + Math.random() * 300;
        const y = 50 + Math.random() * 200;
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", "5");
        c.setAttribute("fill", "var(--accent-cyan)");
        env.appendChild(c);
        gsap.to(c, { y: -30, opacity: 0.2, duration: 2 + Math.random() * 2, repeat: -1, yoyo: true });
    }

    // 4. Smooth Scrolling & Active Nav
    const sections = document.querySelectorAll('.module');
    const navLinks = document.querySelectorAll('.nav-hud a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (pageYOffset >= s.offsetTop - 150) current = s.getAttribute('id');
        });
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href').includes(current)) l.classList.add('active');
        });
    });

    // 5. Particles
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#00f2ff", "#7000ff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4 },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#fff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out" }
        },
        "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
    });

    console.log("Systems Online. Motion Active.");
});
