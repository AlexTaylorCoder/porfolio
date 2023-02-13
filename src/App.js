import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Main from './components';
import { useState } from 'react';
import { useSpring } from '@react-spring/web';
import { lerp } from 'three/src/math/MathUtils';

{/* Image links for github, linkedin, resume, and blog */}
function App() {
  const [cam,setCam] = useState([0,8,15])


  // Need tween animaton to make transition 
  function setCamHandler(e) {
    const newCam = [...cam]

    newCam[1] += (e.deltaY / 50)
    // newCam[1] += (e.deltaY / 50)

    
    setCam(()=>newCam)
  }

  return (
    <KeyboardControls
    map = {[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
    <Canvas id="app" onWheel={setCamHandler}>
      <Suspense fallback={null}>
          <Main setcam={setCam} cam={cam}/>
      </Suspense>
    </Canvas>
    </KeyboardControls>
  );
}

export default App;
