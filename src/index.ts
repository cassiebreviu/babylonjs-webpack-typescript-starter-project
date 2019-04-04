import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
var canvas: any = document.getElementById("renderCanvas");
var engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
    // Create scene
    var scene: Scene = new Scene(engine);

    // Create simple sphere
    var sphere = BABYLON.Mesh.CreateIcoSphere("sphere", { radius: 0.2, flat: true, subdivisions: 1 }, scene);
    sphere.position.y = 3;
    sphere.material = new BABYLON.StandardMaterial("sphere material", scene)

    // Lights and camera
    var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

    // Create sphere and add label
    var sphere1: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
    sphere1.position.y = 5;
    sphere1.material = new BABYLON.StandardMaterial("sphere material", scene)
   
    // Enable VR
    var vrHelper = scene.createDefaultVRExperience();
    vrHelper.enableInteractions();

    return scene;
}

var scene: Scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
