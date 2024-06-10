import type { Slide } from "./types"

type SlideViewProps = {
    slide?: Slide
    updateSlide: (property: string, value: string, id?: number) => void
}

export default function SlideView({ slide, updateSlide }: SlideViewProps) {
    let slideHeight = 400
    return (
        <div className="flex-grow-1 d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-center align-items-center bg-light">
                <div
                    className="bg-white m-3 w-75 shadow-sm p-3 border"
                    style={{
                        height: slideHeight + "px",
                        color: slide?.fontColor
                    }}
                >
                    {slide?.text}
                </div>
            </div>
            <div>
                <textarea
                    className="form-control"
                    onChange={(event) => updateSlide("speakerNotes", event.target.value, slide?.id)}
                    value={slide?.speakerNotes}
                ></textarea>
            </div>
        </div>
    )
}