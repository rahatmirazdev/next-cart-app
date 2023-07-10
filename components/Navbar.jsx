import Image from "next/image"
import Logo from "../public/next.svg"
import { useSelector } from "react-redux"
import Link from "next/link"


const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <>
            <header>
                <div className="">
                    <div className="container position-relative mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <div className="header-logo">
                                    <Image
                                        src={Logo}
                                        height={50}
                                        width={100}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="align-self-center d-none d-lg-block">
                                <div className="flex justify-center items-center">
                                    <ul className="flex flex-wrap mb-0 pl-0 align-middle">
                                        <li className="dropdown flex text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px]">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="dropdown ml-[50px] flex text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px]">
                                            <Link href="/addedcart">Cart</Link>
                                        </li>
                                        {/* <li className="dropdown ml-[50px] flex text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px]" >
                                            <Link href="/blogs" >Blogs</Link>
                                        </li>
                                        <li className="ml-[50px] text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px]">
                                            <Link href="" >About us</Link>
                                        </li>
                                        <li className="ml-[50px] text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px]">
                                            <Link href="" >Contact us</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-auto align-self-center pl-0">
                                <div className="header-actions flex items-center">
                                    {/* <span className="header-action-btn text-[#fb5d5d] font-semibold">Sign In</span> */}
                                    <span className="text-sm font-semibold no-underline uppercase text-[#4c4c4c] block relative leading-[100px] pr-0 ml-5">
                                        Cart Items: {items.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar