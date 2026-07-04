export default function Circle({ id, startX, startY, radius, color, isSelected }) {
    return ( 
        <circle
            className="drawable shape"
            id={id}
            cx={startX}
            cy={startY}
            r={radius}
            fill={color}
            stroke={isSelected ? "#3A86FF" : "black"}
            strokeDasharray={isSelected ? "5,5" : "none"}
            strokeWidth={isSelected ? "3" : "2"}
        />
);
}