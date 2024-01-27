import { ARButton } from './three/addons/webxr/ARButton.js';
import { VRButton } from './three/addons/webxr/VRButton.js';

export async function addXRButton(renderer: THREE.WebGLRenderer) {
    let message: string;
    if (navigator.xr) {
        if (await navigator.xr.isSessionSupported('immersive-ar')) {
            message = "To get started click the 'Enter AR' button";
            document.body.appendChild(ARButton.createButton(renderer));
        } else if (await navigator.xr.isSessionSupported('immersive-vr')) {
            message = "To get started click the 'Enter VR' button";
            document.body.appendChild(VRButton.createButton(renderer));
        } else {
            message = 'AR and VR not supported - please check your browser supports WebXR';
        }
    } else {
       message = 'WebXR not supported - please check your browser supports WebXR';
    }
    document.getElementById('start').innerText = message;
}