import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const n = (child.name || "").toLowerCase();

                // 1. Eyes & Screen: Keep original textures
                if (n.includes("eye") && !n.includes("eyebrow")) {
                  return;
                }
                if (n.includes("screenlight")) {
                  return;
                }

                // 2. Hair
                if (n === "hair" || n.includes("hair")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#0d0b0a"),
                    roughness: 0.45,
                    metalness: 0.05,
                  });
                }
                // 3. Shirt / T-Shirt (Sage Green)
                else if (n.includes("shirt") || n.includes("body")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#6f8878"),
                    roughness: 0.7,
                    metalness: 0.05,
                  });
                }
                // 4. Pants (Warm Brown)
                else if (n.includes("pant")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#523624"),
                    roughness: 0.8,
                    metalness: 0.05,
                  });
                }
                // 5. Shoes
                else if (n === "shoe" || n.includes("shoe")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#f4f3f7"),
                    roughness: 0.35,
                    metalness: 0.15,
                  });
                }
                // 6. Shoe Soles
                else if (n === "sole" || n.includes("sole")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#6f8878"),
                    roughness: 0.5,
                    metalness: 0.1,
                  });
                }
                // 7. Eyebrows
                else if (n.includes("eyebrow")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#080706"),
                    roughness: 0.8,
                  });
                }
                // 8. Face, Ears, Neck, Hands (Skin Tone)
                else if (
                  n.includes("ear") ||
                  n.includes("hand") ||
                  n.includes("neck") ||
                  n.includes("plane.007") ||
                  n.includes("plane007") ||
                  n.includes("plane_007") ||
                  n.includes("mesh.002") ||
                  n.includes("face")
                ) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#c48d68"),
                    roughness: 0.58,
                    metalness: 0.02,
                    side: THREE.DoubleSide,
                  });
                }
              }
            });

            await renderer.compileAsync(character, camera, scene);
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
