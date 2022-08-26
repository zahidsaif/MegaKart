import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

const SwiperCarousel = ({ swiperSlideClassName, imgClassName, imgArray, title, layout, imgWidth = "100%", imgHeight = "100%", swiperProps }) => {
    return <Swiper {...swiperProps}>
        {imgArray?.map(( imageSrc, index ) => {
            return <SwiperSlide key={index} className={swiperSlideClassName}>
                <Image className={imgClassName} src={imageSrc} alt={title} layout={layout} width={imgWidth} height={imgHeight} />
            </SwiperSlide>
        })}
    </Swiper>
}

export default SwiperCarousel