import * as BABYLON from 'babylonjs';
import SceneHelper from './SceneHelper.ts';


export default class Engine {
  private _viewport: HTMLCanvasElement;
  private _renderer: BABYLON.Engine;
  private _scene: BABYLON.Scene;

  constructor(
    viewport: HTMLCanvasElement,
    renderer: BABYLON.Engine,
    scene: BABYLON.Scene
  ) {
    this._viewport = viewport;
    this._renderer = renderer;
    this._scene = scene;
  }

  public static load() : Engine {
    const viewport = document.createElement('canvas');
    document.body.appendChild(viewport);
    const renderer = new BABYLON.Engine(viewport);
    const scene = new BABYLON.Scene(renderer);
    const engine = new Engine(viewport, renderer, scene);
    SceneHelper.setupCamera(engine.scene, false);
    SceneHelper.setupLight(engine.scene);
    engine._updateResolution();
    renderer.runRenderLoop(() => scene.render());
    window.addEventListener('resize', () => engine._updateResolution());
    return engine;
  }

  public get scene() { return this._scene; }

  private _updateResolution(): void {
    this._viewport.style.width = window.innerWidth + 'px';
    this._viewport.style.height = window.innerHeight + 'px';
    this._renderer.resize();
  }
}
