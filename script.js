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
    // Shockwave
    let shock = document.createElement("div");
    shock.classList.add("shockwave");
    document.body.appendChild(shock);
    setTimeout(() => shock.remove(), 900);

    // Particle explosion
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
