import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
var canvas: any = document.getElementById("renderCanvas");
var engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
    // Create scene
    var scene: Scene = new Scene(engine);

    // Create camera
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(6, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    // Create light
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    // Create
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // Enable VR
    //var vrHelper = scene.createDefaultVRExperience();
    //vrHelper.enableInteractions();

    return scene;
}

var scene: Scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
