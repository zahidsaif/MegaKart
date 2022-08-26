import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Head from "next/head";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Pagination, Thumbs } from "swiper";
import SwiperCarousel from "../../components/swiper/SwiperCarousel";
import {BsBag} from "react-icons/bs";
import PageWrapper from "../../components/layout/PageWrapper";
import RatingBadge from "../../components/extras/RatingBadge";
import {useDispatch} from "react-redux";
import {increment} from "../../redux/reducers/cart";

const Product = () => {
    const router = useRouter()
    const { pid: ProductID } = router.query
    const [productDetails, setProductDetails] = useState({})
    const [activeThumb, setActiveThumb] = useState(null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${ProductID}`)
                const productDetails = await response.data
    
                setProductDetails(prevState => productDetails)
            } catch (error) {
                console.error(`Error occurred while trying to get data from the server!!! ${error}`)
            }
        }
        
        getProductDetails()
    }, [ProductID])
    
    const { title, description, price, rating, brand, images, stock } = productDetails
    
    const swiperMobileProps = {
        loop: true,
        pagination: true,
        className: "d-block d-lg-none",
        modules: [Pagination]
    }
    
    const swiperDesktopMainImageProps = {
        spaceBetween: 10,
        grabCursor: true,
        thumbs: {
            swiper: activeThumb
        },
        modules: [Thumbs]
    }
    
    const swiperDesktopSubImagesProps = {
        spaceBetween: 10,
        slidesPerView: 5,
        onSwiper: setActiveThumb,
        modules: [Thumbs]
    }
    
    return <PageWrapper>
        <Head>
            <title>{title} | MegaKart</title>
        </Head>
    
        <Header />
    
        <main>
            <SwiperCarousel imgArray={images} title={title} layout={"responsive"} imgHeight={"90%"} swiperProps={swiperMobileProps} />
        
            <section className={"container-lg"}>
                <div className={"row mt-lg-4"}>
                    <section className={"col-lg-5 d-none d-lg-block"}>
                        <SwiperCarousel imgArray={images} title={title} layout={"responsive"} imgHeight={"80%"} imgClassName={"rounded-4"} swiperProps={swiperDesktopMainImageProps} />
                        <SwiperCarousel imgArray={images} title={title} layout={"responsive"} swiperSlideClassName={"rounded-3 mt-4 swiper-slide"} imgClassName={"rounded-2"} swiperProps={swiperDesktopSubImagesProps} />
                    </section>
                
                    <section className={"col-lg-7"}>
                        <div className={"mt-4 ms-2"}>
                            <div className={"d-flex justify-content-between align-items-center"}>
                                <div>
                                    <h6 className={"mb-0 fw-bold"}>{title ?? title}</h6>
                                
                                    <span className={"text-muted"}>
                                        <small>{`By ${brand}`}</small>
                                    </span>
                                
                                    <div className={"fw-bold text-success mt-2"}>{`$${price}`}</div>
                                </div>
                            
                                <RatingBadge className={"me-3"} rating={rating} />
                            </div>
                        
                            <h6 className={"mt-4 fw-bold mb-1"}>Product Details</h6>
                        
                            <p className={"text-muted pe-2"}>
                                <small>{description ?? description}</small>
                            </p>
                        
                            <div className={"fw-bold"}>
                                Available Stock: <span className={"text-success"}>{`${stock} ${stock > 1 ? 'Units' : 'Unit'}`}</span>
                            </div>
                        </div>
                    
                        <div className={"text-center mt-5 pb-4"}>
                            <button className={"btn btn-lg btn-outline-danger"} onClick={() => dispatch(increment())}>
                                Add to cart <BsBag className={"pb-1"} size={"1.5rem"} />
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    
        <Footer className={"mt-auto"} />
    </PageWrapper>
}

export default Product