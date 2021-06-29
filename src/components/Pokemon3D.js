import React, { useEffect } from 'react'
import * as THREE from 'three/build/three.module'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Bullbasaur from '../models3d/pm0001_00_Rig.fbx'
import body from '../models3d/pm0001_00_BodyAll1.png'
import eye from '../models3d/pm0001_00_Eye1.png'
// import Samba from '../models3d/Samba Dancing.fbx'
// import cloth from '../models3d/cloth.fbx'

const Pokemon3D = () => {
  const img = {
    bodyall: body,
    eyes: eye
  }
  console.log(img)
  useEffect(() => {
    init()
    animate()
    return () => {
    }
  }, [])
  let camera, scene, renderer, stats
  function init () {
    const container = document.createElement('div')
    scene = new THREE.Scene()
    document.body.appendChild(container)
    // const fov = 0.8 * 180 / Math.PI
    camera = new THREE.PerspectiveCamera(45, 220 / 220, 0.01, 1000)
    camera.position.set(0.4, 0.8, 1.8)
    scene.add(camera)
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
    hemiLight.position.set(0.5, 0, 0.866)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff)
    dirLight.position.set(0.5, 0, 0.866)
    scene.add(dirLight)

    // grid
    const gridHelper = new THREE.GridHelper(28, 28, 0x303030, 0x303030)
    scene.add(gridHelper)

    // stats
    stats = new Stats()
    container.appendChild(stats.dom)

    // model
    const loader = new FBXLoader()
    loader.load(Bullbasaur, function (object) {
      console.log(object)
      const mixer = new THREE.AnimationMixer(object)
      mixer.clipAction(object.animations[1]).reset().play()
      // action.play()

      object.traverse(function (child) {
        if (child.isMesh) {
          console.log(child.geometry.attributes.uv)
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      scene.add(object)
    })

    renderer = new THREE.WebGLRenderer({ antialias: true, precision: 'lowp' })
    renderer.physicallyCorrectLights = true
    // renderer.gammaOutput = true
    renderer.gammaFactor = 2.2
    renderer.setClearColor(0xcccccc)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(220, 220)
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 0
    controls.screenSpacePanning = true
    controls.target.set(0, 0, 0)
    // controls.update()
    console.log(controls)
    // window.addEventListener('resize', onWindowResize)
  }

  // function onWindowResize () {
  //   camera.aspect = window.innerWidth / window.innerHeight
  //   camera.updateProjectionMatrix()

  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // }

  //

  function animate () {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)

    stats.update()
  }

  return (
    <div />
  )
}

export default Pokemon3D
