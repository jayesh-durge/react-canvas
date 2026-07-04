export default function Triangle({
    id,
    startX,
    startY,
    width,
    height,
    color,
    isSelected,
    rotation = 0,
}) {
    // Compute centroid for rotation
    const cx = startX;
    const cy = startY + height / 3;
    const transform = rotation ? `rotate(${rotation} ${cx} ${cy})` : undefined;
    return (
        <polygon
            className="drawable shape"
            id={id}
            points={`
                ${startX},${startY}
                ${startX - width},${startY + height}
                ${startX + width},${startY + height}
            `}
            fill={color}
            stroke={isSelected ? "#3A86FF" : "black"}
            strokeDasharray={isSelected ? "5,5" : "none"}
            strokeWidth={isSelected ? "3" : "2"}
            transform={transform}
        />
    );
}