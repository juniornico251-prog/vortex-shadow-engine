function spawnParticles() {
    for (let i = 0; i < 40; i++) {
        let p = document.createElement("div");
        p.classList.add("particle");
        document.body.appendChild(p);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        p.style.left = x + "px";
        p.style.top = y + "px";

        setTimeout(() => p.remove(), 2000);
    }
}

let cubeVisible = true;

function toggleCube() {
    let cube = document.getElementById("cube");

    cubeVisible = !cubeVisible;
    cube.style.display = cubeVisible ? "block" : "none";
}
function bigBang() {
    let shock = document.createElement("div");
    shock.classList.add("shockwave");
    document.body.appendChild(shock);
    setTimeout(() => shock.remove(), 900);

    for (let i = 0; i < 150; i++) {
        let p = document.createElement("div");
        p.classList.add("bigbang-particle");

        let angle = Math.random() * 2 * Math.PI;
        let speed = Math.random() * 400 + 200;

        p.style.left = window.innerWidth / 2 + "px";
        p.style.top = window.innerHeight / 2 + "px";

        p.style.setProperty("--tx", Math.cos(angle) * speed + "px");
        p.style.setProperty("--ty", Math.sin(angle) * speed + "px");

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 1200);
    }
}
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.body.style.backgroundPosition = `${x}px ${y}px`;
});

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const floatText = document.querySelectorAll('.float');
floatText.forEach(el => {
    let offset = 0;
    setInterval(() => {
        offset += 0.03;
        el.style.transform = `translateY(${Math.sin(offset) * 7}px)`;
    }, 16);
});

document.querySelectorAll('.glow').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.boxShadow = "0 0 25px 5px rgba(255,255,255,0.8)";
    });
    el.addEventListener('mouseout', () => {
        el.style.boxShadow = "none";
    });
});
function activate() {
    alert("Vortex Engine Activated!");
}
