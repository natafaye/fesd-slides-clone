import thumbnailImage from "./assets/thumbnail.png"

export default function SlideThumbnail() {
    let slideNumber = 2
    return (
        <>
            <span>{ slideNumber }</span>
            <img src={thumbnailImage} onClick={() => alert("Selected!")}/>
        </>
    )
}