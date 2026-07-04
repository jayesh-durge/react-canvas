import Rectrangle from '../shapes/Rectrangle.jsx'
import Circle from '../shapes/Circle.jsx'
import Triangle from '../shapes/Triangle.jsx'
import RotationHandle from './RotationHandle.jsx'


export default function Canvas({ shapes, selectedShapeIndex, onRotate }) {
  return (
    <svg className="drawable absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {
        shapes.map((shape, index) => {
          const isSelected = index === selectedShapeIndex;
          if (shape.type === "rectangle") {
            return <Rectrangle {...shape} key={shape.id} id={shape.id} isSelected={isSelected} />
          }
          if (shape.type === "circle") {
            return <Circle {...shape} key={shape.id} id={shape.id} isSelected={isSelected} />
          }
          if (shape.type === "triangle") {
            return <Triangle {...shape} key={shape.id} id={shape.id} isSelected={isSelected} />
          }
        })
      }
      {selectedShapeIndex !== -1 && shapes[selectedShapeIndex] && (
        <RotationHandle
          shape={shapes[selectedShapeIndex]}
          index={selectedShapeIndex}
          onRotate={onRotate}
        />
      )}
    </svg>
  );
}