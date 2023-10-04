let scene, camera, renderer, cubes = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('blockchainScene').appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00aaff });

    for (let i = 0; i < 5; i++) {
        let edges = new THREE.EdgesGeometry(geometry);
        let cube = new THREE.LineSegments(edges, edgeMaterial);
        cube.position.x = (i - 2) * 2;  // Centering
        scene.add(cube);
        cubes.push(cube);
    }

    camera.position.z = 10;
    camera.position.x = 0;  // Centering the view

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    cubes.forEach(cube => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

init();
