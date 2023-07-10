import Image from "next/image";
// import starIcon from '../public/star.svg';
import { useEffect, useState } from "react"
import { add } from "@/Feature/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log(data);
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product)); 
    }
    
    return (
        <>
            {
                products.map(product => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow my-5" key={product.id}>
                        <div className="p-3 ">
                            <div className="flex justify-center">
                                <Image
                                    alt={product.category}
                                    src={product.image}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="">
                                <h4 href="#">
                                    <p className="text-xl font-semibold tracking-tight text-gray-900 ">{product.title}</p>
                                </h4>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <span className="h-6 bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800  whitespace-nowrap overflow-hidden break-words text-ellipsis ">
                                        {product.description}
                                    </span>
                                </div>
                                <div>
                                    
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">${product.price}</span>
                                    <button onClick={()=>handleAdd(product)} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Products