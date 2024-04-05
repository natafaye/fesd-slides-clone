import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/fill-drip-solid.svg"
import fontIcon from "./assets/font-solid.svg"

export default function Toolbar() {
    return (
        <div className="bg-light p-3 border-bottom">
            <ToolbarButton icon={colorIcon} onClick={() => alert("Set font color!")}/>
            <ToolbarButton icon={fontIcon} onClick={() => alert("Set font family!")}/>
        </div>
    )
}
