import { useEffect, useRef } from "react";

export default function useDrag({selectedShapeIndex,selectedShape,setShapes,shapes}){
    const shapesRef = useRef(shapes);
    
    useEffect(() => {
        shapesRef.current = shapes;
    }, [shapes]);

    useEffect(() => {
        let startMouseX = 0;
        let startMouseY = 0;
        let initialX = 0;
        let initialY = 0;
        let initialStartX = 0;
        let initialStartY = 0;

        const handleMouseDown=(e)=>{
          if(selectedShapeIndex !== -1 && selectedShape=='' && e.target.classList.contains("shape")){
            const shape = shapesRef.current[selectedShapeIndex];
            if (shape) {
              initialX = shape.x;
              initialY = shape.y;
              initialStartX = shape.startX;
              initialStartY = shape.startY;
              startMouseX = e.clientX;
              startMouseY = e.clientY;
              addEventListener('mousemove',handleMoveShape);
              addEventListener('mouseup',handleControlup);
            }
          }
        }
        const handleMoveShape=(e)=>{
            const dx = e.clientX - startMouseX;
            const dy = e.clientY - startMouseY;
            setShapes(prev=>{
              const newShapes = [...prev];
              if (newShapes[selectedShapeIndex]) {
                newShapes[selectedShapeIndex] = {
                  ...newShapes[selectedShapeIndex],
                  x: initialX + dx,
                  y: initialY + dy,
                  startX: initialStartX + dx,
                  startY: initialStartY + dy,
                };
              }
              return newShapes;
            });
        }
        const handleControlup=()=>{
            removeEventListener('mousemove',handleMoveShape);
            removeEventListener('mouseup',handleControlup);
        }

        addEventListener('mousedown',handleMouseDown);
        return ()=>{
          removeEventListener('mousedown',handleMouseDown);
          removeEventListener('mousemove',handleMoveShape);
          removeEventListener('mouseup',handleControlup);
        }
      },[selectedShapeIndex,selectedShape,setShapes]);
}