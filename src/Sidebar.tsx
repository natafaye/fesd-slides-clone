import SlideThumbnail from "./SlideThumbnail";

export default function Sidebar() {
    return (
        <div className="border-end bg-light p-3 d-flex flex-column">
            <SlideThumbnail/>
            <SlideThumbnail/>
            <SlideThumbnail/>
        </div>
    )
}