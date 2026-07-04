import { useEffect, useRef } from "react";
export default function useSelection({shapes,setSelectedShapeIndex}){
    const shapesRef = useRef(shapes);
    useEffect(() => {
        shapesRef.current = shapes;
    }, [shapes]);

    useEffect(() => {
        const handleClick=(e)=>{
            if(e.target.classList.contains("shape")){
              const shapeId = e.target.getAttribute("id");
              const shapeIndex = shapesRef.current.findIndex(shape => shape.id === shapeId);
              if(shapeIndex !== -1){
                setSelectedShapeIndex(shapeIndex);
              }
            } else if (e.target.classList.contains("drawable")) {
              setSelectedShapeIndex(-1);
            }
        }
        
        addEventListener('click',handleClick);
        return ()=>{
          removeEventListener('click',handleClick);
        }
      },[setSelectedShapeIndex]);
}