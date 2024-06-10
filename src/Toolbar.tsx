import { Button, Modal, Stack } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/fill-drip-solid.svg"
import fontIcon from "./assets/font-solid.svg"
import plusIcon from "./assets/plus-solid.svg"
import { useState } from "react";
import type { Slide } from "./types";
import FontForm from "./FontForm";

type ToolbarProps = {
    addBlankSlide: () => void
    updateSlide: (property: string, color: string, id?: number) => void
    selectedSlide?: Slide
}

export default function Toolbar({
    addBlankSlide,
    updateSlide,
    selectedSlide
}: ToolbarProps) {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const [isFontModalOpen, setIsFontModalOpen] = useState(false)

    const handleColorClose = () => setIsColorModalOpen(false)
    const handleFontClose = () => setIsFontModalOpen(false)

    return (
        <>
            <div className="bg-light p-3 border-bottom">
                <ToolbarButton icon={plusIcon} onClick={addBlankSlide} />
                <ToolbarButton icon={colorIcon} onClick={() => setIsColorModalOpen(true)} />
                <ToolbarButton icon={fontIcon} onClick={() => setIsFontModalOpen(true)} />
            </div>
            <Modal show={isColorModalOpen} onHide={handleColorClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Font Color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={1}>
                        <Button
                            variant={selectedSlide?.fontColor === "red" ? "danger" : "outline-danger"}
                            onClick={() => updateSlide("fontColor", "red", selectedSlide?.id)}
                        >Red</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "green" ? "success" : "outline-success"}
                            onClick={() => updateSlide("fontColor", "green", selectedSlide?.id)}
                        >Green</Button>
                        <Button
                            variant={selectedSlide?.fontColor === "black" ? "dark" : "outline-dark"}
                            onClick={() => updateSlide("fontColor", "black", selectedSlide?.id)}
                        >Black</Button>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleFontClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isFontModalOpen} onHide={() => setIsFontModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Font Family & Size</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FontForm
                        updateSlide={updateSlide}
                        selectedSlide={selectedSlide}
                        handleClose={handleFontClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
