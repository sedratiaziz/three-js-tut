import * as THREE from 'three';
import { color, rotate, texture } from 'three/tsl';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

function App() {
 
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const gridHelper = new THREE.GridHelper(50, 100, 'orange', 'orange')
scene.add(gridHelper)

const geometry = new THREE.BoxGeometry(2.5, 2.5, 1)
const loader = new THREE.TextureLoader()
const texture = loader.load("../public/hmd.jfif")
const mesh = new THREE.MeshStandardMaterial({
  map: texture,
})


const cube = new THREE.Mesh(geometry, mesh)
scene.add(cube)


const pointLight = new THREE.PointLight(0xffffff, 150)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)


const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

camera.position.z = 5

const animate = ()=> {
  cube.rotation.x += 0.05
  cube.rotation.y += 0.05
  cube.rotation.z += 0.03
 
 controls.update()
 renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

const greenBg = new THREE.TextureLoader().load('../public/mroc.png')
scene.background = greenBg

window.addEventListener('resize', ()=>{
  const height = window.innerHeight
  const width = window.innerWidth

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
})

  return (
    <>

    </>
  )
}

export default App
