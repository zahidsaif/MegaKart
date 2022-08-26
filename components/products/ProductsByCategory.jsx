import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductsByCategory = ({ category, className }) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const selectedProducts = async () => {
            try {
                //Converting the category to lowercase as the API expects a request that is in lowercase
                const response = await axios.get(`https://dummyjson.com/products/category/${category.toLowerCase()}`)
                const { products } = await response.data
                
                setProducts(prevState => products)
            } catch (error) {
                console.error(`Error occurred while trying to get data from the server!!! ${error}`)
            }
        }
        
        selectedProducts()
    }, [category])
    
    return <section className={`py-4 ${className}`}>
        <h2 className={"fw-bold p-2 ps-1 text-secondary"}>{category}</h2>
        
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
}

export default ProductsByCategory