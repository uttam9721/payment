// import React from "react";
// import { Link } from "react-router-dom";

// const Cart = ({ cartAllProduct, setCartAllProduct }) => {
//   const handleIncrement = (id) => {
//     setCartAllProduct((prev) =>
//       prev.map((item) =>
//         item?.id === id ? { ...item, count: item?.count + 1 } : item
//       )
//     );
//   };

//   const handleDecrement = (id) => {
//     setCartAllProduct((prev) =>
//       prev.map((item) =>
//         item?.id === id && item.count > 1
//           ? { ...item, count: item?.count - 1 }
//           : item
//       )
//     );
//   };

//   const handleDeleteItem = (id) => {
//     const filteredItems = cartAllProduct?.filter((item) => item?.id !== id);
//     setCartAllProduct(filteredItems);
//   };

//   return (
//     <div className="container-fluid px-3 px-md-5">
//       <div className="row g-3 p-3">
//         {cartAllProduct?.map((product) => {
//           return (
//             <div
//               className="col-12 col-sm-12 col-md-10 col-lg-8 border rounded d-flex flex-column flex-md-row gap-3 bg-white shadow-sm p-3"
//               key={product?.id}
//             >
//               <div className="text-center">
//                 <img
//                   src={product?.img}
//                   alt={product?.model}
//                   className="img-fluid"
//                   style={{
//                     maxWidth: "120px",
//                     maxHeight: "100px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>
//               <div className="flex-grow-1">
//                 <h5 className="text-truncate m-0">{product?.model?.toUpperCase()}</h5>
//                 <p className="m-0 fs-5">
//                   <span className="fw-bold">₹</span> {product?.price}
//                 </p>
//                 <p className="m-0 text-muted">{product?.space}</p>
//                 <p className="m-0 text-muted">{product?.camera}</p>
//                 <div className="d-flex align-items-center gap-3 mt-2">
//                   <button
//                     className="btn btn-outline-primary btn-sm"
//                     onClick={() => handleDecrement(product?.id)}
//                   >
//                     -
//                   </button>
//                   <span>{product?.count}</span>
//                   <button
//                     className="btn btn-outline-primary btn-sm"
//                     onClick={() => handleIncrement(product?.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="d-flex flex-column justify-content-between align-items-center">
//                 <p className="m-0 text-muted text-truncate text-center">
//                   {product?.description}
//                 </p>
//                 <button
//                   className="btn btn-danger btn-sm mt-2"
//                   onClick={() => handleDeleteItem(product?.id)}
//                 >
//                   <i className="fa-solid fa-trash"></i> Remove
//                 </button>
//               </div>
//             </div>
//           );
//         })}

//         {cartAllProduct.length === 0 && (
//           <div className="col-12 text-center">
//             <h3 className="fs-4 text-muted">No Products Available in Cart</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };

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
            // </div>
          );
        })}

        {cartAllProduct.length == 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Availabe in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;