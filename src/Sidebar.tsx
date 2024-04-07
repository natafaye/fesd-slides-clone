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
    return (
        <div className="border-end bg-light p-3 d-flex flex-column">
            { testSlides.map( s => <SlideThumbnail key={s.id} slide={ s }/> ) }
        </div>
    )
}