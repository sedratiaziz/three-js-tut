import * as THREE from 'three';
import { cameraNear, color, rotate, texture } from 'three/tsl';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Hero from './components/Hero';

function App() {

  // Boilerplate code
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  camera.position.z = 5

  const bg = new THREE.TextureLoader().load('../public/mroc.png')
  scene.background = bg


  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)


  const gridHelper = new THREE.GridHelper(50, 100, 'green', 'white')
  scene.add(gridHelper)



  const hmd = new THREE.TextureLoader().load('../public/mn-grass.jpeg')

  // ball geometry
  const geometry = new THREE.BoxGeometry(5, 5, 5)
  const mesh = new THREE.MeshBasicMaterial({ map: hmd })
  const ballGeo = new THREE.Mesh(geometry, mesh)


  const geometry3 = new THREE.BoxGeometry(5, 5, 5)
  const mesh3 = new THREE.MeshBasicMaterial({ map: hmd })
  const ballGeo3 = new THREE.Mesh(geometry, mesh)

  ballGeo3.position.y = 6
  ballGeo3.position.x = 15
  ballGeo3.rotation.y += 110
  scene.add(ballGeo3)

  // // ball lines
  // const geometry2 = new THREE.SphereGeometry(5, 5, 4)
  // const mesh2 = new THREE.MeshBasicMaterial({
  //   color: 'red',
  //   wireframe: true,
  // })
  // const ballLines = new THREE.Mesh(geometry2, mesh2)

  // ball
  const ball = new THREE.Group()
  ball.add(ballGeo)
  // ball.add(ballLines)

  scene.add(ball)
  ball.position.y = 6









  const controls = new OrbitControls(camera, renderer.domElement)

  const animate = () => {
    controls.update()
    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)



  window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  })






















  // const scene = new THREE.Scene()
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  // const renderer = new THREE.WebGLRenderer()
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // document.body.appendChild(renderer.domElement)

  // const controls = new OrbitControls(camera, renderer.domElement)

  // const gridHelper = new THREE.GridHelper(50, 100, 'orange', 'orange')
  // scene.add(gridHelper)

  // const geometry = new THREE.BoxGeometry(2.5, 2.5, 1)
  // const loader = new THREE.TextureLoader()
  // const texture = loader.load("../public/hmd.jfif")
  // const mesh = new THREE.MeshStandardMaterial({
  //   map: texture,
  // })


  // const cube = new THREE.Mesh(geometry, mesh)
  // scene.add(cube)


  // const pointLight = new THREE.PointLight(0xffffff, 150)
  // pointLight.position.set(5, 5, 5)
  // scene.add(pointLight)


  // const lightHelper = new THREE.PointLightHelper(pointLight)
  // scene.add(lightHelper)

  // camera.position.z = 5

  // const animate = ()=> {
  //   cube.rotation.x += 0.05
  //   cube.rotation.y += 0.05
  //   cube.rotation.z += 0.03

  //  controls.update()
  //  renderer.render(scene, camera)
  // }

  // renderer.setAnimationLoop(animate)

  // const greenBg = new THREE.TextureLoader().load('../public/mroc.png')
  // scene.background = greenBg

  // window.addEventListener('resize', ()=>{
  //   const height = window.innerHeight
  //   const width = window.innerWidth

  //   camera.aspect = width / height
  //   camera.updateProjectionMatrix()

  //   renderer.setSize(width, height)
  // })

  return (
    <>
      <Hero />
    </>
  )
}

export default App
