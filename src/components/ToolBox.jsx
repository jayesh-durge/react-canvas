export default function ToolBox({ setSelectedShape, selectedShape }) {
    // Helper to add active styling to the currently selected shape button
    const activeClass = "bg-gray-200 border-2 border-blue-500";
    const baseClass = "w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200";

    return (
        <div id="ToolBox" className="flex items-center gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <button
                className={`${baseClass} ${selectedShape === 'rectangle' ? activeClass : ''}`}
                onClick={() => setSelectedShape('rectangle')}
            >
                <div id="rectangle" className="w-7 h-5 border-2 border-gray-800 rounded-sm" />
            </button>

            <button
                className={`${baseClass} ${selectedShape === 'circle' ? activeClass : ''}`}
                onClick={() => setSelectedShape('circle')}
            >
                <div id="circle" className="w-7 h-7 border-2 border-gray-800 rounded-full" />
            </button>

            <button
                className={`${baseClass} ${selectedShape === 'triangle' ? activeClass : ''}`}
                onClick={() => setSelectedShape('triangle')}
            >
                <svg id="triangle" width="30" height="30" viewBox="0 0 24 24">
                    <polygon
                        points="12,2 22,20 2,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        className="text-gray-800"
                    />
                </svg>
            </button>
        </div>
    );
}