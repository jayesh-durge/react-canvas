import { useEffect } from "react";

/**
 * RotationHandle renders a small circular control above the selected shape.
 * It receives the shape data, its index, and a callback to update the shape's rotation.
 * The handle is positioned at the shape's center plus an offset upward.
 */
export default function RotationHandle({ shape, index, onRotate }) {
  const { type, x, y, width, height, startX, startY, radius, rotation = 0 } = shape;

  // Compute the center of the shape based on its type
  let cx = 0,
    cy = 0;
  if (type === "rectangle") {
    cx = x + width / 2;
    cy = y + height / 2;
  } else if (type === "circle") {
    cx = startX;
    cy = startY;
  } else if (type === "triangle") {
    // Approximate centroid using bounding box
    cx = x + width / 2;
    cy = y + height / 2;
  } else {
    cx = x + width / 2;
    cy = y + height / 2;
  }

  const handleRadius = 8;
  const offset = 30; // distance above the shape
  const handleX = cx;
  const handleY = cy - offset;

  // Mouse handling
  const startDrag = (e) => {
    e.stopPropagation();
    const startAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
    const startRotation = rotation;

    const onMove = (moveEvt) => {
      const currentAngle = Math.atan2(moveEvt.clientY - cy, moveEvt.clientX - cx);
      const delta = ((currentAngle - startAngle) * 180) / Math.PI;
      const newRotation = (startRotation + delta) % 360;
      onRotate(index, newRotation);
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  // Change cursor to rotate when hovering the handle
  useEffect(() => {
    const el = document.getElementById(`rotation-handle-${index}`);
    if (el) {
      el.style.cursor = "grab";
    }
  }, [index]);

  return (
    <g>
      {/* guide line */}
      <line
        x1={cx}
        y1={cy}
        x2={handleX}
        y2={handleY}
        stroke="gray"
        strokeDasharray="2,2"
      />
      {/* handle circle */}
      <circle
        id={`rotation-handle-${index}`}
        cx={handleX}
        cy={handleY}
        r={handleRadius}
        fill="white"
        stroke="black"
        onMouseDown={startDrag}
      />
    </g>
  );
}
