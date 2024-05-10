import { Button, Modal, Stack } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/fill-drip-solid.svg"
import fontIcon from "./assets/font-solid.svg"
import plusIcon from "./assets/plus-solid.svg"
import { useState } from "react";

type ToolbarProps = {
    addBlankSlide: () => void
    updateSlideFontColor: (color: string, id?: number) => void
    selectedSlide?: { 
        id: number, 
        order: number, 
        image: string, 
        fontColor: string 
    }
}

export default function Toolbar({ 
    addBlankSlide, 
    updateSlideFontColor, 
    selectedSlide 
}: ToolbarProps) {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)

    const handleClose = () => setIsColorModalOpen(false)

    return (
        <>
            <div className="bg-light p-3 border-bottom">
                <ToolbarButton icon={plusIcon} onClick={addBlankSlide} />
                <ToolbarButton icon={colorIcon} onClick={() => setIsColorModalOpen(true)} />
                <ToolbarButton icon={fontIcon} onClick={() => alert("Set font family!")} />
            </div>
            <Modal show={isColorModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Font Color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={1}>
                        <Button
                            variant={selectedSlide?.fontColor === "red" ? "danger" : "outline-danger"}
                            onClick={() => updateSlideFontColor("red", selectedSlide?.id)}
                        >Red</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "green" ? "success" : "outline-success"}
                            onClick={() => updateSlideFontColor("green", selectedSlide?.id)}
                        >Green</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "black" ? "dark" : "outline-dark"}
                            onClick={() => updateSlideFontColor("black", selectedSlide?.id)}
                        >Black</Button>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
