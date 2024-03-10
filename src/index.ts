import * as THREE from 'three';
import * as CANNON from 'cannon';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { createCube } from './cube';
import { renderCubes } from './renderCubes'
import { addXRButton } from './xrButton';
import { LanguageServiceMode } from 'typescript';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const count = 20;
const maxVelocity = 5;
const cubeSize = [5, 5, 5];
const cubes: THREE.Object3D<THREE.Object3DEventMap>[] = [];
const world = new CANNON.World();

world.gravity.set(0, 0, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 10;


const boundingBoxSize = 50; // meters

for (var i = 0; i < count; i++) {
    const x = (Math.random() * boundingBoxSize) - (boundingBoxSize / 2);
    const y = (Math.random() * boundingBoxSize) - (boundingBoxSize / 2);
    const z = (Math.random() * boundingBoxSize) - (boundingBoxSize / 2);
    const color = Math.random() * 0xffffff
    cubes.push(createCube([x, y, z], cubeSize, color));
    scene.add(cubes[i]);
}
cubes.forEach((cube, index) => {
    const mass = 5;
    const boxShape = new CANNON.Box(new CANNON.Vec3(cubeSize[0], cubeSize[1], cubeSize[2]));
    const boxBody = new CANNON.Body({ mass: mass, shape: boxShape });
    boxBody.position.set(cube.position.x, cube.position.y, cube.position.z);
    const vX = Math.random() * maxVelocity - maxVelocity / 2;
    const vY = Math.random() * maxVelocity - maxVelocity / 2;
    const vZ = Math.random() * maxVelocity - maxVelocity / 2;
    boxBody.velocity.set(vX, vY, vZ);
    boxBody.angularDamping = 0.5 * Math.random();
    // debugger;
    world.addBody(boxBody);
});

// // Create planes (the box)
// const planeNormal = new CANNON.Vec3(1, 0, 0);
// const planeMaterial = new CANNON.Material('planeMaterial');
// for (let i = 0; i < 6; i++) {
//     const planeShape = new CANNON.Plane();
//     const planeBody = new CANNON.Body({ mass: 0, material: planeMaterial });
//     planeBody.addShape(planeShape);
//     if (i < 4) {
//         planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), i * Math.PI / 2);
//         planeBody.position.set((i % 2 === 0 ? -1 : 1) * boundingBoxSize / 2, 0, 0);
//     } else {
//         planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), (i === 4 ? -1 : 1) * Math.PI / 2);
//         planeBody.position.set(0, (i === 4 ? -1 : 1) * boundingBoxSize / 2, 0);
//     }
//     world.addBody(planeBody);
// }

document.addEventListener('keydown', function (event) {
    console.log('click');
    laser
    // laser.scene = scene;
    //     laser.
}
);

renderer.setAnimationLoop(() => {
    world.step(1 / 60); // step the simulation

    renderCubes(cubes, world, boundingBoxSize);



    renderer.render(scene, camera);
});

addXRButton(renderer);