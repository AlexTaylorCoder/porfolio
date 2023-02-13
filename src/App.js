import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Main from './components';
import { useState } from 'react';
import { Scroll, ScrollControls } from '@react-three/drei';

{/* Image links for github, linkedin, resume, and blog */}
function App() {
  const [wheel,setwheel] = useState(null)
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
    <Canvas id="app" onWheel={(e)=>setwheel(e)}>
      <Suspense fallback={null}>
          <Main wheel={wheel}/>
      </Suspense>
    </Canvas>
    </KeyboardControls>
  );
}

export default App;
