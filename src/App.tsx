import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import SlideView from "./SlideView"
import { useState } from "react"
import thumbnailImage1 from "./assets/thumbnail-1.png"
import thumbnailImage2 from "./assets/thumbnail-2.png"
import thumbnailImage3 from "./assets/thumbnail-3.png"
import blankThumbnail from "./assets/blank-thumbnail.png"
import type { Slide } from "./types"

const TEST_SLIDES = [
  {
    id: 0,
    order: 1,
    image: thumbnailImage1,
    text: "React Components",
    fontColor: "black"
  },
  {
    id: 1,
    order: 2,
    image: thumbnailImage2,
    text: "React Props",
    fontColor: "red"
  },
  {
    id: 2,
    order: 3,
    image: thumbnailImage3,
    text: "Passing down props",
    fontColor: "black"
  },
]

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(TEST_SLIDES)
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  const selectedSlide = slides.find(s => s.id === selectedSlideId)

  const addBlankSlide = () => {
    const blankSlide = {
      id: slides.length ? slides[slides.length - 1].id + 1 : 0,
      order: 4,
      image: blankThumbnail,
      text: "",
      fontColor: "black"
    }

    setSlides([...slides, blankSlide])
  }

  const deleteSlide = (idToDelete: number) => {
    setSlides(slides.filter(s => s.id !== idToDelete))
  }

  const updateSlideFontColor = (newColor: string, idToUpdate?: number) => {
    if (idToUpdate === undefined) {
      return
    }

    setSlides(slides.map(slide => (
      slide.id !== idToUpdate ? slide : {
        ...slide,
        fontColor: newColor
      }
    )))
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Toolbar
        selectedSlide={selectedSlide}
        addBlankSlide={addBlankSlide}
        updateSlideFontColor={updateSlideFontColor}
      />
      <div className="d-flex flex-grow-1">
        <Sidebar
          slides={slides}
          deleteSlide={deleteSlide}
          selectedSlideId={selectedSlideId}
          setSelectedSlideId={setSelectedSlideId}
        />
        <SlideView slide={selectedSlide} />
      </div>
    </div>
  )
}

