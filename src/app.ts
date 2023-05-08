import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import "@babylonjs/core/Meshes/meshBuilder"
import "@babylonjs/core/Materials/standardMaterial"
import SceneHelper from './core/SceneHelper';
import { Color4 } from '@babylonjs/core/Maths/math.color';

export default class App {
  /**
   * The main entry point for the 3D app.
   * @param engine - an instance of the 3D engine.
   */
  public createScene(engine: Engine): Scene {
    const scene = new Scene(engine);
    //scene.createDefaultEnvironment({});
    scene.clearColor = new Color4(1, 1, 0, 0.5);
    const arcRotate: boolean = false;
    SceneHelper.setupCamera(scene, arcRotate);
    SceneHelper.setupLight(scene);

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = Mesh.CreateSphere('sphere1', 16, 5, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    Mesh.CreateGround('ground1', 60, 60, 2, scene);

    return scene;
  }
}
