import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let OwlCarousel = require("react-owl-carousel");

const Slider = () => {
  return (
    //   <section className="section-slide">
    //     <div className="wrap-slick1">
    //       <div className="slick1">
    //         <div className="item-slick1" style={{}}>
    //           <div className="container h-full">
    //             <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
    //               <div
    //                 className="layer-slick1 animated visible-false"
    //                 data-appear="fadeInDown"
    //                 data-delay={0}
    //               >
    //                 <span className="ltext-101 cl2 respon2">
    //                   Women Collection 2018
    //                 </span>
    //               </div>
    //               <div
    //                 className="layer-slick1 animated visible-false"
    //                 data-appear="fadeInUp"
    //                 data-delay={800}
    //               >
    //                 <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
    //                   NEW SEASON
    //                 </h2>
    //               </div>
    //               <div
    //                 className="layer-slick1 animated visible-false"
    //                 data-appear="zoomIn"
    //                 data-delay={1600}
    //               >
    //                 <a
    //                   href="product.html"
    //                   className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
    //                 >
    //                   Shop Now
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    <>
      <OwlCarousel
        loop={true}
        autoplay={1000}
        items={1}
        nav
        className="owl-theme"
      >
        <div>
          <img
            src={"https://i.dummyjson.com/data/products/12/thumbnail.jpg"}
            alt="First slide"
            style={mystyle}
          />
        </div>
        <div>
          <img
            src={
              "https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Mobile-Phone-493177782-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NDEzN3xpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDRmLzk4OTA0NTA5MzE3NDIuanBnfDkyOGU4MDdkMWI3ODkwMzU1ZDhkMjJjMWM4ZTYzZWY0NTQzNTA5MmFlYmE2MDgyY2FlNDlkOTQ4YTY4YzY0NzM"
            }
            alt="Second slide"
            style={mystyle}
          />
        </div>
      </OwlCarousel>
    </>
  );
};

export default Slider;
const mystyle = {
  width: "280px",
  margin: "auto",
};
