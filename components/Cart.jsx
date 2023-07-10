import Products from "../pages/produtcs"

const Cart = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-evenly gap-2 ">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default Cart