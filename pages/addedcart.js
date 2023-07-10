import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '@/Feature/cartSlice'

const Addedcart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart)

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <>
            <div className='container mx-auto'>
                <div>
                    {
                        products.map((product) => (
                            <div className='flex gap-7 justify-center items-center mb-9' key="">
                                <div>
                                    <a href="">
                                        <Image
                                            alt={product.category}
                                            src={product.image}
                                            width={200}
                                            height={200}
                                        />
                                    </a>
                                </div>
                                <div className='w-[49rem]'>
                                    <p>{product.title}</p>
                                    <span className="h-6 bg-blue-100 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-blue-200 dark:text-blue-800  overflow-hidden break-words text-ellipsis ">
                                        {product.description}
                                    </span>
                                    <div className="text-3xl font-bold">${product.price}</div>
                                </div>
                                <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleRemove(product.id)}>Remove Items</button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Addedcart