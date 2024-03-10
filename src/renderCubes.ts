
import * as THREE from 'three';

export function renderCubes(cubes: THREE.Object3D<THREE.Object3DEventMap>[], world: CANNON.World, boundingBoxSize: number) {

    cubes.forEach((cube, index) => {
        var position, quaternion;
        var world_body = world.bodies[index];
        position = new THREE.Vector3(world_body.position.x, world_body.position.y, world_body.position.z);
        quaternion = new THREE.Quaternion(world_body.quaternion.x, world_body.quaternion.y, world_body.quaternion.z, world_body.quaternion.w);
        cube.position.copy(position);
        cube.quaternion.copy(quaternion);

        // console.log(world_body.position + ' / ' + world_body.velocity);
        if ((world_body.position.x > boundingBoxSize / 2) && world_body.velocity.x > 0) {
            // debugger;
            //console.log('hitx');
            world_body.position.x = -world_body.position.x;
        }
        if ((world_body.position.x < -boundingBoxSize / 2) && world_body.velocity.x < 0) {
            // debugger;
            //console.log('hitx');
            world_body.position.x = -world_body.position.x;
        }
        if ((world_body.position.y > boundingBoxSize / 2) && world_body.velocity.y > 0) {
            // debugger;
            world_body.position.y = -world_body.position.y;
            //console.log('hity');
        }
        if ((world_body.position.y < -boundingBoxSize / 2) && world_body.velocity.y < 0) {
            // debugger;
            world_body.position.y = -world_body.position.y;
            //console.log('hity');
        }
        if ((world_body.position.z > boundingBoxSize / 2) && world_body.velocity.z > 0) {
            // debugger;
            world_body.position.z = -world_body.position.z;
            //console.log('hitz');
        }

        if ((world_body.position.z < -boundingBoxSize / 2) && world_body.velocity.z < 0) {
            // debugger;
            world_body.position.z = -world_body.position.y;
            //console.log('hitz');
        }
    })
};