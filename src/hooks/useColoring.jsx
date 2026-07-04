import { useEffect } from "react";
export default function useColoring({selectedColor,setShapes,selectedShapeIndex}){
    useEffect(() => {
        if(selectedColor!='' && selectedShapeIndex !== -1){
              setShapes(prev=>{
                const newShapes = [...prev];
                if (newShapes[selectedShapeIndex]) {
                  newShapes[selectedShapeIndex] = {
                    ...newShapes[selectedShapeIndex],
                    color: selectedColor,
                  };
                }
                return newShapes;
              })
          }
      },[selectedColor, selectedShapeIndex, setShapes]);
}