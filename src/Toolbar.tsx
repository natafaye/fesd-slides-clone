import { Button, Modal, Stack } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/fill-drip-solid.svg"
import fontIcon from "./assets/font-solid.svg"
import { useState } from "react";

export default function Toolbar() {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const [fontColor, setFontColor] = useState("black")

    const handleClose = () => setIsColorModalOpen(false)

    return (
        <>
            <div className="bg-light p-3 border-bottom">
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
                            variant={fontColor === "red" ? "danger" : "outline-danger"}
                            onClick={() => setFontColor("red")}
                        >Red</Button>
                        <Button
                            variant={fontColor === "green" ? "success" : "outline-success"}
                            onClick={() => setFontColor("green")}
                        >Green</Button>
                        <Button
                            variant={fontColor === "black" ? "dark" : "outline-dark"}
                            onClick={() => setFontColor("black")}
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
