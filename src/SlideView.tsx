export default function SlideView() {
    let slideHeight = 400
    return (
        <div className="flex-grow-1 d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-center align-items-center bg-light">
                <div className="bg-white m-3 w-75 shadow-sm p-3 border" style={{ height: slideHeight + "px"}}>Slide View</div>
            </div>
            <div>
                <textarea className="form-control" defaultValue="Speaker Notes"></textarea>
            </div>
        </div>
    )
}