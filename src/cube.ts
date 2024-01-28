import * as THREE from 'three';

export function createCube(position: Array<number>, size: Array<number>, color: number) {
    const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(position[0], position[1], position[2]);
    return cube;
}
