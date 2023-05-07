import { babylon } from '../lib/babylon.ts';
import { phoenix } from '../lib/phoenix.ts';
import MeshBuilder = babylon.core.meshes.MeshBuilder;



export default class App {
  public static async main() {
    const engine = await phoenix.Engine.load();

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = MeshBuilder.CreateSphere("sphere1", {segments:16, diameter: 2}, engine.scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 5;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    const ground = MeshBuilder.CreateGround("ground1", {width: 6, height: 6, subdivisions: 2}, engine.scene);
    ground.position.y = 4;
  }
}
