export default function ToolbarButton() {

    const handleButtonClick = () => {
        alert("I'm a button!")
    }

    return (
        <button 
            className="btn btn-outline-secondary me-2" 
            onClick={handleButtonClick}
        >
            Button
        </button>
    )
}