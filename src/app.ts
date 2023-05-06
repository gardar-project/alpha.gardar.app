import * as BABYLON from 'babylonjs';
import Engine from './engine.ts';


export default class App {
  public static async main() {
    const engine = await Engine.load();

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, engine.scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, engine.scene);
  }
}
