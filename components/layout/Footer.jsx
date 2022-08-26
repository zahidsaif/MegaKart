import Image from "next/image";
import productCategories from "../products/productCategories";

const Footer = ({ className }) => {
    return <footer className={`text-center bg-light pb-4 ${className}`}>
        <div className={"pt-3"}>
            <Image src={'/MegaKart-logos_black.png'} width={"100%"} height={"100%"} />
        </div>
    
        <h3 className={"mt-2"}>Products</h3>
    
        <section>
            {
                productCategories.map(({ id, category }) => <div key={id} className={"d-block mt-1"}>{category}</div>)
            }
        </section>
    
        <div className={"fw-bold mt-4"}>MegaKart © {new Date().getFullYear()}</div>
    </footer>
}

export default Footer