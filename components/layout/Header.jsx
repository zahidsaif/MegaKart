import Image from "next/image";
import Link from "next/link";
import {BsBag} from "react-icons/bs";
import {useState} from "react";
import ReactHamburgerMenu from 'react-hamburger-menu'
import {AiFillHome} from "react-icons/ai";
import {MdOutlineAlignHorizontalLeft} from 'react-icons/md'
import {useSelector} from "react-redux";

const Header = () => {
    const [isMenuOpen, updateIsMenuOpen] = useState(false)
    const { cartCount } = useSelector((state) => state.cart)
    
    return <>
        <header className={"d-flex justify-content-between align-items-center pt-2 pb-3 bg-light"}>
            <div className={"ms-3"} style={{cursor: "pointer"}}>
                <ReactHamburgerMenu
                    width={22}
                    height={15}
                    isOpen={isMenuOpen}
                    animationDuration={0.25}
                    menuClicked={() => updateIsMenuOpen(prevState => !prevState)}
                />
            </div>
        
            <Link href={'/'}>
                <Image src={'/header-logo.png'} style={{cursor: "pointer"}} alt={"MegaKart Logo"} width={"35%"} height={"35%"} />
            </Link>
        
            <button className={"btn me-4 position-relative"}>
                <BsBag size={"1.5rem"} />
    
                <span className={"position-absolute top-0 mt-2 start-100 translate-middle badge rounded-pill bg-danger"}>
                    {cartCount}
                </span>
            </button>
        </header>
    
        <section className={`bg-light pb-1 border-bottom border-2 ${isMenuOpen || 'd-none'}`}>
            <HeaderLink href={"/"} itemName={"Home"} logo={<AiFillHome size={"1.5rem"} />} />
            <HeaderLink href={"/products"} itemName={"All Products"} logo={<MdOutlineAlignHorizontalLeft size={"1.5rem"} />} />
        </section>
    </>
}

const HeaderLink = ({ href, itemName, logo }) => {
    return <div className={"border-top border-2 py-2"}>
        <Link href={href}>
            <a className={"text-decoration-none text-black fw-bold d-flex align-items-center"}>
                <span className={"mx-2"}>{logo}</span> {itemName}
            </a>
        </Link>
    </div>
}

export default Header