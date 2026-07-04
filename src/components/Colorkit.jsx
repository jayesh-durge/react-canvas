export default function Colorkit({setSelectedColor}) {
    // get setusestate for color selection and set in outside the function what every to set
    // use on click to set the color
    return (
        <div id="Colorkit" className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <button
                id="sunset-orange"
                className="w-9 h-9 rounded-full bg-[#FF6B6B] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#FF6B6B')}
            />
            <button
                id="coral-pink"
                className="w-9 h-9 rounded-full bg-[#FF8E72] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#FF8E72')} 
            />
            <button
                id="golden-yellow"
                className="w-9 h-9 rounded-full bg-[#FFD93D] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#FFD93D')}
            />
            <button
                id="lime-burst"
                className="w-9 h-9 rounded-full bg-[#6BCB77] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#6BCB77')}
            />
            <button
                id="mint-fresh"
                className="w-9 h-9 rounded-full bg-[#4ECDC4] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#4ECDC4')}
            />
            <button
                id="sky-blue"
                className="w-9 h-9 rounded-full bg-[#45B7D1] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#45B7D1')}
            />
            <button
                id="electric-blue"
                className="w-9 h-9 rounded-full bg-[#3A86FF] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#3A86FF')}
            />
            <button
                id="lavender"
                className="w-9 h-9 rounded-full bg-[#9B5DE5] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#9B5DE5')}
            />
            <button
                id="magenta-pop"
                className="w-9 h-9 rounded-full bg-[#F15BB5] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#F15BB5')}
            />
            <button
                id="deep-violet"
                className="w-9 h-9 rounded-full bg-[#7209B7] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#7209B7')}
            />
            <button
                id="charcoal"
                className="w-9 h-9 rounded-full bg-[#2D3436] shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#2D3436')}
            />
            <button
                id="white"
                className="w-9 h-9 rounded-full bg-white border-2 border-gray-200 shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                onClick={() => setSelectedColor('#FFFFFF')}
            />
        </div>
    );
}