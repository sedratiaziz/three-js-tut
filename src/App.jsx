import * as THREE from 'three';
import { rotate, texture } from 'three/tsl';


function App() {
 
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(2.5, 2.5, 1)
const loader = new THREE.TextureLoader()
const texture = loader.load("../public/hmd.jfif")

const mesh = new THREE.MeshBasicMaterial({
  map: texture,
})
const cube = new THREE.Mesh(geometry, mesh)

scene.add(cube)


camera.position.z = 5

const animate = ()=> {
  // cube.rotation.x += 0.05
 
 
  if (rotate) {
   cube.rotation.y += 0.025
 }
  
 // cube.rotation.z += 0.03
 
 renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

let rotate = true;
function pauseRotate(time) {
  rotate = false
  setTimeout(()=>{
    rotate = true
  }, time)
}

pauseRotate(2000)

  return (
    <>
    Hola el mundo!  
    </>
  )
}

export default App
