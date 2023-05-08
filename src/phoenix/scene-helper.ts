import { babylon } from "@gardar-project/babylon";
import ArcRotateCamera = babylon.core.cameras.ArcRotateCamera;
import FreeCamera = babylon.core.cameras.FreeCamera;
import HemisphericLight = babylon.core.lights.HemisphericLight;
import Vector3 = babylon.core.maths.Vector3;
import Scene = babylon.core.Scene;



export default class SceneHelper {
  /**
   * Sets up the camera for scene.
   */
  public static setupCamera(scene: Scene, arcRotate: boolean): void {
    // Creates, angles, distances and targets the camera
  	var camera = arcRotate ? 
        new ArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), scene):
        new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    if (camera instanceof ArcRotateCamera) {
      camera.position = new Vector3(0, 5, -2);
      camera.target = Vector3.Zero();
    }

    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
  }

  /**
   * Sets up lighting for scene.
   */
  public static setupLight(scene: Scene): void {
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
  }
}
