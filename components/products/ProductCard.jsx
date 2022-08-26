import Link from "next/link";
import Image from "next/image";
import RatingBadge from "../extras/RatingBadge";

const ProductCard = ({ productID, title, imgSrc, description, productBrand, productRating, productPrice }) => {
    return <>
        <Link href={`/products/${productID}`}>
            <section className={"card rounded-3 shadow-sm h-100"} style={{cursor: "pointer"}}>
                <div>
                    <Image className={"rounded-top"} priority={true} src={imgSrc} alt={title} layout={"responsive"} width={"100%"} height={"75%"} />
                </div>
                
                <div className={"card-body"}>
                    <div className={"d-flex justify-content-between align-items-center"}>
                        <div>
                            <h5 className={"card-title"}>{title}</h5>
                            <h6 className={"card-subtitle mb-2 text-muted"}>{`By ${productBrand}`}</h6>
                        </div>
                        
                        <RatingBadge rating={productRating} />
                    </div>
                    
                    <h6 className={"fw-bold text-success mt-2"}>
                        Sells for: ${productPrice}
                    </h6>
                    
                    <p className={"card-text text-muted"}>{description}</p>
                </div>
            </section>
        </Link>
    </>
}

export default ProductCard