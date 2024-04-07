
type SlideThumbnailProps = {
    slide: { id: number, order: number, image: string }
    isSelected: boolean
    onSelected: (id: number) => void
}

export default function SlideThumbnail({ slide, isSelected, onSelected }: SlideThumbnailProps ) {
    return (
        <>
            <span>{ slide.order }</span>
            <img 
                src={slide.image} 
                onClick={() => onSelected(slide.id)}
                className={`border border-2 rounded-4 ${isSelected ? "border-primary" : "border-light"}`}
            />
        </>
    )
}