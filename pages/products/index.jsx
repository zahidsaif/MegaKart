import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Head from "next/head";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../components/products/ProductCard";
import PageWrapper from "../../components/layout/PageWrapper";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [startCursor, setStartCursor] = useState(0)
    const [endCursor, setEndCursor] = useState(0)
    
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products', {
                    params: {
                        limit: 10,
                        skip: startCursor
                    }
                })
    
                const { products, total } = await response.data
    
                setEndCursor(prevState => total - 10)
                setProducts(prevState => [...prevState, ...products])
            } catch (error) {
                console.error(`Error occurred while trying to get data from the server!!! ${error}`)
            }
        }

        getAllProducts()
    }, [startCursor])
    
    return <PageWrapper>
        <Head>
            <title>All Products | MegaKart</title>
        </Head>
    
        <Header />
    
        <main className={"mt-4"}>
            <section className={"container"}>
                <h1 className={"ms-1 fw-bold"}>All Products</h1>
            
                <div className={"row"}>
                    {
                        products?.map(({ id, title, thumbnail, description, brand, price, rating }) => {
                            return <div key={id} className={"my-3 col-sm-6 col-lg-4 col-xxl-3"}>
                                <ProductCard productID={id} title={title} imgSrc={thumbnail} description={description} productBrand={brand} productRating={rating} productPrice={price} />
                            </div>
                        })
                    }
                </div>
            </section>
        
            {/*Logic to remove the view more button from display once we have fetched all
                products from server, and if the button is clicked when visible, more products will be fetched from the
                 server by updating the startCursor which shows us the next list of products (Pagination Logic) */}
            {
                (startCursor < endCursor)
                    ? <div className={"text-center my-4"}>
                        <button className={"btn btn-primary"} onClick={() => setStartCursor(prevState => prevState + 10)}>
                            View More
                        </button>
                    </div>
                    : <div className={"text-center text-success fw-bold my-4"}>
                        You have seen all the products we have to offer right now!
                    </div>
            }
        </main>
    
        <Footer className={"mt-auto"} />
    </PageWrapper>
}

export default AllProducts