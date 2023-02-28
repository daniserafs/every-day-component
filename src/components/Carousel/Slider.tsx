import { useState } from 'react'
import { CarouselImgs, CarouselProps } from '.'

export const Slider = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  console.log("hmhm", length)
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return(
    <div>
        <span className='prev-slide' onClick={prevSlide}>Previous Slide</span>
        <span className='prev-slide' onClick={nextSlide}>Next Slide</span>
        {images.map(({slide, index}: any) => { 
            return(
                <div key={index}> {index === current && <img src={slide.url} alt="TO-DO" />}</div>
            )
        })}
    </div>
  )
}
