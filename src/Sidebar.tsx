import { useState } from "react";
import SlideThumbnail from "./SlideThumbnail";
import thumbnailImage1 from "./assets/thumbnail-1.png"
import thumbnailImage2 from "./assets/thumbnail-2.png"
import thumbnailImage3 from "./assets/thumbnail-3.png"

const testSlides = [
    {
        id: 0,
        order: 1,
        image: thumbnailImage1
    },
    {
        id: 1,
        order: 2,
        image: thumbnailImage2
    },
    {
        id: 2,
        order: 3,
        image: thumbnailImage3
    },
]

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true)
    const [selectedSlideId, setSelectedSlideId] = useState(0)

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
    }

    const handleSlideClick = (id: number) => {
        setSelectedSlideId(id)
    }

    return (
        <>
            {isExpanded ? (
                <div className="border-end bg-light p-3 d-flex flex-column">
                    {testSlides.map(s => (
                        <SlideThumbnail key={s.id} slide={s} onSelected={handleSlideClick} isSelected={s.id === selectedSlideId} />
                    ))}
                </div>
            ) : null}
            <button 
                className="btn btn-light p-1 border" 
                onClick={handleButtonClick}
            >
                { isExpanded ? "<" : ">" }
            </button>
        </>
    )
}