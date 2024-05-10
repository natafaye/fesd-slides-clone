import type { Slide } from "./types"

type SlideThumbnailProps = {
    slide: Slide
    isSelected: boolean
    onSelected: (id: number) => void
    deleteSlide: (id: number) => void
}

export default function SlideThumbnail({
    slide,
    isSelected,
    onSelected,
    deleteSlide
}: SlideThumbnailProps) {
    return (
        <div>
            <div className="d-flex justify-content-between mt-2 mb-1 align-items-center">
                <span>{slide.order}</span>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteSlide(slide.id)}
                >X</button>
            </div>
            <img
                src={slide.image}
                onClick={() => onSelected(slide.id)}
                className={`border border-2 rounded-4 ${isSelected ? "border-primary" : "border-light"}`}
            />
        </div>
    )
}