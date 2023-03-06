import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const ProductDetail = () => {
  let location = useLocation();
  const detail = location.state.product;
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots" />
                  <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                  <div className="slick3 gallery-lb">
                    <div className="item-slick3">
                      <div className="wrap-pic-w pos-relative">
                        <img src={detail.thumbnail} alt="IMG-PRODUCT" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {detail.title}
                </h4>
                <span className="mtext-106 cl2">Price ${detail.price}</span>

                <p className="stext-102 cl3 p-t-23">{detail.description}</p>

                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Size</div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Color</div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      {/* {cart.map((cartItem) => {
                        return (
                          <>
                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                              <div
                                className="btn-num-product-down cl8 trans-04 flex-c-m"
                                onClick={() => {
                                  dispatch(decrement(cartItem.id));
                                }}
                              >
                                {"-"}
                              </div>
                              <p className="mtext-104 cl3 txt-center num-product">
                                {" "}
                                {cartItem.quantity}
                              </p>

                              <div
                                className="btn-num-product-up cl8  trans-04 flex-c-m"
                                onClick={() => {
                                  dispatch(increament(cartItem.id));
                                }}
                              >
                                {"+"}
                              </div>
                            </div>
                          </>
                        );
                      })} */}

                      <Link
                        to="/add-to-cart"
                        onClick={() => {
                          dispatch(addToCart(detail));
                        }}
                      >
                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bor10 m-t-50 p-t-43 p-b-40">
            <div className="tab01">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
              </ul>

              <div className="tab-content p-t-43">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">{detail.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <RelatedProduct/> */}
    </>
  );
};

export default ProductDetail;
