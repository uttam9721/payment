// import React from "react";
// import productList from "./data";
// // import toast, { Toaster } from "react-hot-toast";

// const Home = ({setProductId}) => {
//     const handleAddToCart=(id)=>{
//         setProductId(id);

//     }

//   return (
//     <div className="container-fluid px-5">
//       <div className="row gap-4 justify-content-center">
//         {/* <Toaster /> */}
//         {productList?.map((product, index) => {
//           return (
//             <div className="col-2 border rounded mt-2" key={product?.id}>
//               <div className="d-flex justify-content-center p-2">
//                 <img src={product?.img} alt="" className="product-size" />
//               </div>
//               <div className="py-2">
//                 <div className="d-flex justify-content-between px-2">
//                   <p className="m-0 font-bold font-size-12">{product?.brand}</p>
//                   <p className="m-0 font-bold font-size-12">{product?.model}</p>
//                 </div>
//                 <div className=" px-2">
//                   <p className="m-0">
//                     <span className="font-bold">₹</span> {product?.price}
//                   </p>
//                   <p className="m-0 text-hiding">{product?.space}</p>
//                 </div>
//                 <div className="px-2 mt-1">
//                   <button
//                     className="btn btn-primary p-1 w-100"
//                     onClick={()=>handleAddToCart(product?.id)} 
//                   >
//                     AddToCart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import productList from "./data";
// import toast, { Toaster } from "react-hot-toast";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
  };

  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="row g-4 justify-content-center"> {/* Adjusted gap with g-4 */}
        {/* <Toaster /> */}
        {productList?.map((product) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
              key={product?.id}
            >
              <div
                className="border shadow-sm rounded p-3 bg-white h-100"
                style={{ overflow: "hidden" }}
              >
                <div className="d-flex justify-content-center p-2">
                  <img
                    src={product?.img}
                    alt={product?.brand}
                    className="img-fluid product-size"
                    style={{
                      maxHeight: "150px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="py-2">
                  <div className="d-flex justify-content-between px-2">
                    <p className="m-0 fw-bold text-truncate">{product?.brand}</p>
                    <p className="m-0 fw-bold text-truncate">{product?.model}</p>
                  </div>
                  <div className="px-2">
                    <p className="m-0">
                      <span className="fw-bold">₹</span> {product?.price}
                    </p>
                    <p className="m-0 text-muted text-truncate">{product?.space}</p>
                  </div>
                  <div className="px-2 mt-2">
                    <button
                      className="btn btn-primary p-1 w-100"
                      onClick={() => handleAddToCart(product?.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
