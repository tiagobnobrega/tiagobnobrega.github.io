import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Clock,
  Group,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";

export default component$(() => {
  useVisibleTask$(({ cleanup }) => {
    let renderer: WebGLRenderer;
    let camera: PerspectiveCamera;
    let scene: Scene;
    let clock: Clock;
    let mixer: AnimationMixer;
    let actions: Record<string, AnimationAction>;
    const api: Record<string, any> = { state: "Idle" };
    let face: Object3D | undefined;
    let activeAction: AnimationAction;
    let previousAction: AnimationAction;
    function init() {
      const container = document.getElementById("hero-scene-container");
      const rendererDim = getRendererDimensions();
      camera = new THREE.PerspectiveCamera(35, rendererDim.aspect, 0.5, 100);
      camera.position.set(-5, 5, 10);
      camera.lookAt(0, 2, 0);

      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xe0e0e0);
      // scene.background = new THREE.Color(0xff0000);
      // scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

      clock = new THREE.Clock();

      // lights

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      dirLight.position.set(0, 20, 10);
      scene.add(dirLight);
      // model

      const loader = new GLTFLoader();
      loader.load(
        "/assets/3d/RobotExpressive.glb",
        function (gltf) {
          const model = gltf.scene;
          scene.add(model);

          createGUI(model, gltf.animations);
        },
        undefined,
        function (e) {
          console.error(e);
        }
      );

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);

      renderer.setSize(rendererDim.w, rendererDim.h);
      renderer.outputEncoding = THREE.sRGBEncoding;
      if (container) {
        container.appendChild(renderer.domElement);
        // window.addEventListener("resize", onWindowResize);
      } else {
        throw new Error(
          "Could not initialize threeJS Scene: Container not found"
        );
      }
    }

    function createGUI(model: Group, animations: AnimationClip[]) {
      const states = [
        "Idle",
        "Walking",
        "Running",
        "Dance",
        "Death",
        "Sitting",
        "Standing",
      ];
      const emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];

      const gui = new GUI();

      mixer = new THREE.AnimationMixer(model);
      //* building actions
      actions = {};
      for (let i = 0; i < animations.length; i++) {
        const clip = animations[i];
        const action = mixer.clipAction(clip);
        actions[clip.name] = action;

        if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
        }
      }

      //states
      /*const statesFolder = gui.addFolder("States");
      const clipCtrl = statesFolder.add(api, "state").options(states);
      clipCtrl.onChange(function () {
        console.log("clipCtrl.onChange:", { "api.state": api.state });
        fadeToAction(api.state, 0.5);
      });

      statesFolder.open();*/

      // emotes

      // const emoteFolder = gui.addFolder("Emotes");
      //
      // function createEmoteCallback(name: string) {
      //   api[name] = function () {
      //     fadeToAction(name, 0.2);
      //
      //     mixer.addEventListener("finished", restoreState);
      //   };
      //
      //   emoteFolder.add(api, name);
      // }
      //
      function restoreState() {
        mixer.removeEventListener("finished", restoreState);
        // @ts-ignore
        face.morphTargetInfluences[1] = 0;
        fadeToAction(api.state, 0.2);
      }
      //
      // for (let i = 0; i < emotes.length; i++) {
      //   createEmoteCallback(emotes[i]);
      // }
      //
      // emoteFolder.open();

      // expressions

      face = model.getObjectByName("Head_4");

      // @ts-ignore
      const expressions = Object.keys(face.morphTargetDictionary);
      const expressionFolder = gui.addFolder("Expressions");

      for (let i = 0; i < expressions.length; i++) {
        expressionFolder
          // @ts-ignore
          .add(face.morphTargetInfluences, i.toString(), 0, 1, 0.01)
          .name(expressions[i]);
      }
      // // @ts-ignore
      // face.updateMorphTargets();

      activeAction = actions["Idle"];
      activeAction.play();

      setInterval(() => {
        fadeToAction("Wave", 0.2);
        // @ts-ignore
        face.morphTargetInfluences[1] = 0.5;
        mixer.addEventListener("finished", restoreState);
      }, 5000);

      // expressionFolder.open();
    }

    function fadeToAction(name: string, duration: number) {
      previousAction = activeAction;
      activeAction = actions[name];

      if (previousAction !== activeAction) {
        previousAction.fadeOut(duration);
      }

      activeAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(duration)
        .play();
    }

    function getRendererDimensions() {
      const aspectArr = [400, 475];
      const aspect = aspectArr[0] / aspectArr[1];
      const w = Math.min(window.innerWidth, aspectArr[0]);
      const h = w / aspect;
      return { w, h, aspect };
    }

    function onWindowResize() {
      const { w, h, aspect } = getRendererDimensions();
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    }
    function animate() {
      const dt = clock.getDelta();

      if (mixer) mixer.update(dt);

      requestAnimationFrame(animate);

      renderer.render(scene, camera);

      // stats.update();
    }

    init();
    animate();

    window.addEventListener("resize", onWindowResize);

    cleanup(() => {
      window.removeEventListener("resize", onWindowResize);
    });
  });

  return <div class="flex justify-center" id="hero-scene-container"></div>;
});
/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
camera.position.set(0, 0, 5);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setClearColor(0x404040);
const canvas = renderer.domElement;
document.body.appendChild(canvas);

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

const base = new THREE.Object3D();
scene.add(base);

const loader = new GLTFLoader().setPath(
  "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/"
);
loader.load("DamagedHelmet.gltf", function (gltf) {
  gltf.scene.scale.setScalar(2);
  base.add(gltf.scene);
});

const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const pointOfIntersection = new THREE.Vector3();
canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  base.lookAt(pointOfIntersection);
}

renderer.setAnimationLoop(() => {
  if (resize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  renderer.render(scene, camera);
});

function resize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}*/
