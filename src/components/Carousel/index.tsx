import './styles.css'


export type CarouselImgs = {
    label: string
    url: string
}
export type CarouselProps = {
   imgs: CarouselImgs[]
}

const Carousel = ({imgs}: CarouselProps) => {
    return (
        <div className='img-container'>
            <h1>Images</h1>
            <img src={"https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1"} />
            
    
        </div>
    )
}


export default Carousel