import * as THREE from 'three';

export function createScene() {
    const scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(0, 500, 2000);
    scene.add(light);
    return scene;
}