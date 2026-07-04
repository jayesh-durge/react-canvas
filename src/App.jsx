import './App.css'
import {useRef,useState} from 'react'
import Canvas from './components/canvas.jsx'
import ToolBox from './components/ToolBox.jsx'
import Colorkit from './components/Colorkit.jsx'
import useColoring from './hooks/useColoring.jsx'
import useDelete from './hooks/useDelete.jsx'
import useDrag from './hooks/useDrag.jsx'
import useDrawing from './hooks/useDrawing.jsx'
import useSelection from './hooks/useSelection.jsx'
function App() {
  
  const refShape = useRef(null);
  const [selectedColor, setSelectedColor] = useState('transparent');
  const [selectedShape, setSelectedShape] = useState('');
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(-1);
  const [shapes,setShapes] = useState([]);
  
  useColoring({selectedColor,setShapes,selectedShapeIndex});
  useDelete({selectedShapeIndex,setShapes,setSelectedShapeIndex});
  useDrag({selectedShapeIndex,selectedShape,setShapes,shapes});
  useDrawing({selectedColor,selectedShape,setShapes,setSelectedShapeIndex,setSelectedShape});
  useSelection({shapes,setSelectedShapeIndex});

  // Update rotation for a shape
  const handleRotate = (index, newRotation) => {
    setShapes(prev => {
      const updated = [...prev];
      if (updated[index]) {
        updated[index] = { ...updated[index], rotation: newRotation };
      }
      return updated;
    });
  };
  return (
    <div id="canvas" ref={refShape} className="w-screen h-screen flex items-end justify-center pb-6 ">
         <Canvas shapes={shapes} selectedShapeIndex={selectedShapeIndex} onRotate={handleRotate} />
      <div className="flex items-center gap-4">
         <ToolBox setSelectedShape={setSelectedShape} selectedShape={selectedShape} />
        <Colorkit setSelectedColor={setSelectedColor} />
      </div>
    </div>
  )
}

export default App;