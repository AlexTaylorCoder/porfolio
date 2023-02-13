import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import degtoradians from "../utils/degstoradians"
import { extend } from "@react-three/fiber"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import roboto from "../assets/Roboto Serif 20pt_Italic.json"
import { useEffect, useRef } from "react"
import { lerp } from "three/src/math/MathUtils"
import { useSpring } from "@react-spring/web"
import { Vector3 } from "three"


extend({TextGeometry})

//Use scroll controls
function Main(cam,setCam) {
    const camRef = useRef()
    const font = new FontLoader().parse(roboto)

    useFrame(()=> {
        const vec = new Vector3(cam.cam[0],cam.cam[1],cam.cam[2])
            
        camRef.current.position.lerp(vec,0.5)
    })

    return (
        <>
  
            <PerspectiveCamera ref={camRef} makeDefault position={[0,8,15]}/>
            {/* <OrbitControls/> */}
            <mesh position={[-20,0,-10]}>
                <textGeometry args={['Alex Taylor',{font,size:3,height:1}]}/>
                <meshStandardMaterial emissive="#FFD700" emissiveIntensity=".01" color = "black"/>
            </mesh>
            <mesh position={[-20,-10,-10]}>
                <textGeometry args={['Full Stack Developer',{font,size:3,height:1}]}/>
                <meshStandardMaterial emissive="#FFD700" emissiveIntensity=".01" color = "black"/>
            </mesh>
            <mesh position={[-9,-2,-10]}>
                <boxGeometry args={[21,1,1]}/>
                <meshStandardMaterial color = "black"/>
            </mesh>
            <ambientLight intensity={1} color="white"/>
            <spotLight angle={degtoradians(90)} intensity={5} color="#FFD700" position= {[-15,-20,-2]}/>

            <mesh position={[-20,-20,-10]}>
                <textGeometry args={['Projects',{font,size:3,height:1}]}/>
                <meshStandardMaterial emissive="#FFD700" emissiveIntensity=".01" color = "black"/>
            </mesh>

            <spotLight angle={degtoradians(90)} intensity={5} color="#FFD700" position= {[-15,-60,-2]}/>
        </>
    )
}



export default Main