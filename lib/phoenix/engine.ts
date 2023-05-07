import { babylon } from "../babylon.ts";
import SceneHelper from "./scene-helper.ts";
import Scene = babylon.core.Scene;



export class Engine {
  private _viewport: HTMLCanvasElement;
  private _renderer: babylon.core.Engine;
  private _scene: Scene;

  constructor(
      viewport: HTMLCanvasElement,
      renderer: babylon.core.Engine,
      scene: Scene
  ) {
    this._viewport = viewport;
    this._renderer = renderer;
    this._scene = scene;
  }

  public static load() : Engine {
    const viewport = document.createElement("canvas");
    document.body.appendChild(viewport);
    const renderer = new babylon.core.Engine(viewport);
    const scene = new Scene(renderer);
    const engine = new Engine(viewport, renderer, scene);
    SceneHelper.setupCamera(engine.scene, false);
    SceneHelper.setupLight(engine.scene);
    engine._updateResolution();
    renderer.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine._updateResolution());
    return engine;
  }

  public get scene() { return this._scene; }

  private _updateResolution(): void {
    this._viewport.style.width = window.innerWidth + "px";
    this._viewport.style.height = window.innerHeight + "px";
    this._renderer.resize();
  }
}
