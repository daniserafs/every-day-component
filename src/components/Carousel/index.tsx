import './styles.css'

import { Slider } from './Slider'
import { useState } from 'react'

export type CarouselImgs = {
  label?: string
  url?: string
  slide?: number
}
export type CarouselProps = {
  images: CarouselImgs[]
}

const Carousel = ({ images }: CarouselProps) => {
  console.log('Caroulsel', { images })
  const [current, setCurrent] = useState(0)
  const length = images.length

  console.log('hmhm', length)
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div>
      <span className="prev-slide" onClick={prevSlide}>
        Previous Slide
      </span>
     
      <div>
      {images.map(({ url, slide }) => {
        return (
          <div key={slide}>
            
            <img src={url} alt="TO-DO"  style={{ width: 100, height: 100 }}/>
          </div>
        )
      })} image
      </div>
      <span className="prev-slide" onClick={nextSlide}>
        Next Slide
      </span>
      
    </div>
  )

  return <Slider images={images.url} />

  return (
    <>
      {images.map((image) => {
        return <img src={image.url} style={{ width: 100, height: 100 }} />
      })}
    </>
  )
}

export default Carousel
