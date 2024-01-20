import * as THREE from 'three';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 1.6, 3);
    return camera;
}