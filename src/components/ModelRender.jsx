import { OrbitControls, PerspectiveCamera, View, Html } from "@react-three/drei"
import Lights from './Lights'
import Iphone from './Iphone'
import { Suspense } from "react"
import * as THREE from 'three'
import Loading from "./Loading"

const ModelRender = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index=== 2 ? 'right-[-100%]' : ''}`}
    >
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

        <Lights />

        <OrbitControls 
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
        <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
            <Suspense fallback={<Loading/>}>
                <Iphone 
                    scale={index === 1 ? [15,15,15] : [17, 17, 17]}
                    item={item}
                    size={size}
                />
            </Suspense>
        </group>
    </View>
  )
}

export default ModelRender