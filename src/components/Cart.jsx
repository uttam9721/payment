import React from 'react'

const Cart = ({cartAllProduct,setCartAllProduct}) => {

    const handleIncrement=(id)=>{

        setCartAllProduct((p)=>
            p.map((item)=>item?.id===id?{...item,count:item?.count+1}:item)
            );
        };


    const handleDecrement=(id)=>{
        setCartAllProduct((p)=>
            p.map((item)=>item?.id===id?{...item,count:item?.count-1}:item)
            );
        };

    
    // const handleDecrement=()=>{};
    const handleDeleteItem=()=>{};
    
    // console.log("filteredObject",cartAllProduct);
  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => {
          return (
            <div
              className="col-8 border rounded d-flex gap-3"
              key={product?.id}
            >
              <div className="p-1">
                <img
                  src={product?.img}
                  alt={product?.model}
                  className="cart-product-size"
                />
              </div>
              <div className="p-1 d-flex gap-3">
                <div>
                  <h3 className="text-hiding m-0">
                    {product?.model?.toUpperCase()}
                  </h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold ">₹</span> {product?.price}
                  </p>
                  <p className="m-0 font-size-12 font-bold">{product?.space}</p>
                  <p className="m-0 font-size-12 font-bold">
                    {product?.camera}
                  </p>
                  <div className="d-flex gap-3 mt-1">
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleDecrement(product?.id)}
                    >
                      -
                    </p>
                    <p className="m-0 ">{product?.count}</p>
                    <p
                      className="m-0  border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleIncrement(product?.id)}
                    >
                      +
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <p>{product?.description}</p>
                  <p onClick={() => handleDeleteItem(product?.id)}>
                    <i className="fa-solid fa-trash text-danger pointer"></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {cartAllProduct.length == 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Availabe in Cart</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
