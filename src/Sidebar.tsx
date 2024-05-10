import { useState } from "react";
import SlideThumbnail from "./SlideThumbnail";
import type { Slide } from "./types";

type SidebarProps = {
    slides: Array<Slide>
    selectedSlideId: number
    setSelectedSlideId: (newValue: number) => void
    deleteSlide: (id: number) => void
}

export default function Sidebar({ 
    slides,
    selectedSlideId, 
    setSelectedSlideId, 
    deleteSlide 
}: SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true)

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
                    {slides.map(s => (
                        <SlideThumbnail 
                            key={s.id} 
                            slide={s} 
                            onSelected={handleSlideClick} 
                            isSelected={s.id === selectedSlideId} 
                            deleteSlide={deleteSlide}
                        />
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