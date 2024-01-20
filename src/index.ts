import * as THREE from 'three';
import { VRButton } from './three/addons/webxr/VRButton.js'


// Create a scene
const scene = new THREE.Scene();

// ligtj
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(0, 500, 2000);
scene.add(light);
// Create a camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
camera.position.set(0, 1.6, 3);
// Create a renderer with WebXR enabled
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;


// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// Put it in front of the camera
cube.position.set(0, 1, - 5);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Render the scene
//function animate() {
renderer.setAnimationLoop(() => {
    console.log('render');
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
});
//}

//animate()

// Add the VR button
document.body.appendChild(VRButton.createButton(renderer));;