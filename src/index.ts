import * as THREE from 'three';
import { VRButton } from './three/addons/webxr/VRButton.js';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createCube } from './cube';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const count = 10;
const cubes: THREE.Object3D<THREE.Object3DEventMap>[] = [];

for (var i = 0; i < count; i++) {
    const x = Math.random() * 4 - 2;
    const y = Math.random() * 4;
    const z = Math.random() * 4 - 2;
    const color = Math.random() * 0xffffff
    cubes.push(createCube([x, y, z], color));
    scene.add(cubes[i]);
}



renderer.setAnimationLoop(() => {
    cubes.forEach((cube, index) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    })
    renderer.render(scene, camera);
});

document.body.appendChild(VRButton.createButton(renderer));