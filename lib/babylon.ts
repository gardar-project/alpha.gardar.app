import * as Core from "@babylonjs/core"
import * as CoreMeshes from "@babylonjs/core/Meshes"
import * as CoreCameras from "@babylonjs/core/Cameras"
import * as CoreMaths from "@babylonjs/core/Maths"
import * as CoreLights from "@babylonjs/core/Lights"

export namespace babylon {
    export namespace core {
        export import Engine = Core.Engine
        export import Scene = Core.Scene
        export namespace meshes {
            export import MeshBuilder = CoreMeshes.MeshBuilder
        }
        export namespace cameras {
            export import ArcRotateCamera = CoreCameras.ArcRotateCamera
            export import FreeCamera = CoreCameras.FreeCamera
        }
        export namespace maths {
            export import Vector2 = CoreMaths.Vector2
            export import Vector3 = CoreMaths.Vector3
        }
        export namespace lights {
            export import HemisphericLight = CoreLights.HemisphericLight
        }
    }
}
