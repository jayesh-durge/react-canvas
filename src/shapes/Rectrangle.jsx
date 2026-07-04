export default function Rectangle({ id, x, y, width, height, color, isSelected, rotation = 0 }) {
  // Apply rotation around the shape's center using SVG transform
  const cx = x + width / 2;
  const cy = y + height / 2;
  const transform = rotation ? `rotate(${rotation} ${cx} ${cy})` : undefined;
  return (
        <rect
            className="drawable shape"
            id={id}
            x={x}
            y={y}
            width={width}
            height={height}
            fill={color}
            stroke={isSelected ? "#3A86FF" : "black"}
            strokeDasharray={isSelected ? "5,5" : "none"}
            strokeWidth={isSelected ? "3" : "2"}
            transform={transform}
        />
  );
}