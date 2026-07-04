import { useEffect } from "react";

export default function useDelete({selectedShapeIndex,setShapes,setSelectedShapeIndex}){
    useEffect(() => { 

        const handleDelete=(e)=>{
            if((e.key === "Delete" || e.key === "Backspace" )&& selectedShapeIndex !== -1){
              setShapes(prev=>{
                const newShapes = [...prev];
                newShapes.splice(selectedShapeIndex, 1);
                return newShapes;
              });
              setSelectedShapeIndex(-1);
            }
        }
        
        addEventListener('keydown',handleDelete);

        return ()=>{
          removeEventListener('keydown',handleDelete);
        }
      },[selectedShapeIndex, setShapes, setSelectedShapeIndex]);
}