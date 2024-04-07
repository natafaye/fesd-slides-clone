import { useState } from "react";
import SlideThumbnail from "./SlideThumbnail";

type SidebarProps = {
    slides: Array<{ id: number, order: number, image: string }>
    selectedSlideId: number
    setSelectedSlideId: (newValue: number) => void
}

export default function Sidebar({ slides, selectedSlideId, setSelectedSlideId }: SidebarProps) {
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