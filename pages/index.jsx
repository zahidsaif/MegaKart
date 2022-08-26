import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductsByCategory from "../components/products/ProductsByCategory";
import PageWrapper from "../components/layout/PageWrapper";
import productCategories from "../components/products/productCategories";

function Home() {
    return <PageWrapper>
        <Head>
            <title>Home | MegaKart</title>
        </Head>
    
        <Header />
    
        <main className={"container"}>
            {
                productCategories.map(({ id, category, className }) => {
                    return <ProductsByCategory key={id} category={category} className={className} />
                })
            }
        </main>
    
        <Footer className={"mt-auto"} />
    </PageWrapper>
}

export default Home