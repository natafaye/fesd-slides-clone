import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import SlideView from "./SlideView"
import { useState } from "react"
import thumbnailImage1 from "./assets/thumbnail-1.png"
import thumbnailImage2 from "./assets/thumbnail-2.png"
import thumbnailImage3 from "./assets/thumbnail-3.png"

const testSlides = [
  {
      id: 0,
      order: 1,
      image: thumbnailImage1,
      text: "React Components"
  },
  {
      id: 1,
      order: 2,
      image: thumbnailImage2,
      text: "React Props"
  },
  {
      id: 2,
      order: 3,
      image: thumbnailImage3,
      text: "Passing down props"
  },
]

export default function App() {
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  const selectedSlide = testSlides.find(s => s.id === selectedSlideId)

  return (
    <div className="d-flex flex-column vh-100">
      <Toolbar/>
      <div className="d-flex flex-grow-1">
        <Sidebar slides={testSlides} selectedSlideId={selectedSlideId} setSelectedSlideId={setSelectedSlideId}/>
        <SlideView slide={selectedSlide}/>
      </div>
    </div>
  )
}

