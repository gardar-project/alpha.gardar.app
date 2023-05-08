import { Engine } from '@babylonjs/core/Engines/engine';

import App from '../app';

export default class Bootstrapper {
  private _canvas: HTMLCanvasElement;
  private _engine: Engine;

  public static main(root: HTMLElement, app: App) {
    const canvas = document.createElement('canvas');
    root.appendChild(canvas);
    const engine = new Engine(canvas);
    const bootstrapper = new Bootstrapper(canvas, engine);
    bootstrapper._resize();
    const scene = app.createScene(engine);

    engine.runRenderLoop(() => {
      scene.render();
    });
    
    window.addEventListener('resize', () => bootstrapper._resize());
  }
  
  public constructor(
      canvas: HTMLCanvasElement,
      engine: Engine
  ) {
    this._canvas = canvas;
    this._engine = engine;
  } 

  private _resize(): void {
    this._canvas.style.width = window.innerWidth + 'px';
    this._canvas.style.height = window.innerHeight + 'px';
    this._engine.resize();
  }
}