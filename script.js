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
