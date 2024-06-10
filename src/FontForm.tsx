import { ChangeEvent, MouseEvent, useState } from "react"
import type { Slide } from "./types"

type Props = {
    updateSlide: (property: string, value: string, id?: number) => void
    selectedSlide?: Slide
    handleClose: () => void
}

export default function FontForm({ 
    updateSlide, selectedSlide, handleClose 
}: Props) {
    const [formValues, setFormValues] = useState({
        fontFamily: selectedSlide?.fontFamily || "Verdana",
        fontSize: selectedSlide?.fontSize || "14"
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value 
        })

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        updateSlide("fontFamily", formValues.fontFamily, selectedSlide?.id)
        updateSlide("fontSize", formValues.fontSize, selectedSlide?.id)

        handleClose()
    }

    return (
        <form>
            <div className="mb-2">
                <label htmlFor="font-family" className="form-label">Font Family</label>
                <select id="font-family" className="form-select"
                    name="fontFamily"
                    onChange={handleChange}
                    value={formValues.fontFamily}
                >
                    <option value="Verdana">Verdana</option>
                    <option value="Arial">Arial</option>
                    <option value="Comic Sans MS">Comic Sans</option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="font-size" className="form-label">Font Size</label>
                <input id="font-size" type="number" className="form-control" 
                    name="fontSize"
                    onChange={handleChange}
                    value={formValues.fontSize}
                />
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
        </form>
    )
}