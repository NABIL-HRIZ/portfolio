import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/old_computers.glb')
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  )
}

export default function Intro3D({ onFinish }) {
  const [count, setCount] = useState(5)

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev === 1) {
          clearInterval(timer)
          onFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onFinish])

  const handleInteraction = () => {
    onFinish()
  }

  return (
    <div style={{ height: '100vh', width: '100vw', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          onStart={handleInteraction}
        />
      </Canvas>

      
      <div
        style={{
          position: 'absolute',
          bottom: 70,
          width: '100%',
          textAlign: 'center',
          color: '#2ecc71',
          fontFamily: 'monospace'
        }}
      >
        CLIQUEZ ET FAITES GLISSER POUR EXPLORER MON PORTFOLIO ({count}s)
      </div>

    
    </div>
  )
}
