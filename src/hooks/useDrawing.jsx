import { useEffect, useRef } from "react";

export default function useDrawing({selectedColor,selectedShape,setShapes,setSelectedShapeIndex,setSelectedShape}){
    const shapeRef = useRef(selectedShape);
    const colorRef = useRef(selectedColor);

    useEffect(() => {
        shapeRef.current = selectedShape;
    }, [selectedShape]);

    useEffect(() => {
        colorRef.current = selectedColor;
    }, [selectedColor]);

    useEffect(() => {
        const handledown = (e) => {
            const currentShape = shapeRef.current;
            if(currentShape!='' && e.target.classList.contains("drawable") ){
                 const newShape = {
                   type: currentShape,
                   id: crypto.randomUUID(),
                   x: e.clientX,
                   y: e.clientY,
                   startX: e.clientX,
                   startY: e.clientY,
                   width: 0,
                   height: 0,
                   radius: 0,
                   color: colorRef.current,
                   rotation: 0,
                 }
                let length =0;
                setShapes(prev=>{
                  length = prev.length;
                  return [...prev,newShape]
                });
                  
                setSelectedShapeIndex(length);
                addEventListener('mousemove',handlemove);
                addEventListener('mouseup',handleUp);
                setSelectedShape('');
              }
        }
        const handlemove = (e) => {
            setShapes(prev=>{
              const newShapes = [...prev];
              const lastShape = newShapes[newShapes.length - 1];
              if (lastShape) {
                newShapes[newShapes.length - 1] = {
                  ...lastShape,
                  width: Math.abs(e.clientX - lastShape.startX),
                  height: Math.abs(e.clientY - lastShape.startY),
                  x: Math.min(e.clientX, lastShape.startX),
                  y: Math.min(e.clientY, lastShape.startY),
                  radius: Math.min(Math.abs(e.clientX - lastShape.startX), Math.abs(e.clientY - lastShape.startY)) / 2,
                };
              }
              return newShapes;
            });
        }
        const handleUp = () => {
            removeEventListener('mousemove',handlemove);
            removeEventListener('mouseup',handleUp);
        }
        addEventListener('mousedown',handledown);
        return ()=>{
          removeEventListener('mousedown',handledown);
          removeEventListener('mousemove',handlemove);
          removeEventListener('mouseup',handleUp);
        }
    
      },[setShapes, setSelectedShapeIndex, setSelectedShape]);
}