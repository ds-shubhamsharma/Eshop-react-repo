import React from "react";

function MenuBar() {
  return (
    <>
      <div id="navigation">
        {/* container */}
        <div className="container">
          <div id="responsive-nav">
            {/* category nav */}
            <div className="category-nav">
              <span className="category-header">
                Categories <i className="fa fa-list" />
              </span>
              <ul className="category-list">
                <li className="dropdown side-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Women’s Clothing <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row hidden-sm hidden-xs">
                      <div className="col-md-12">
                        <hr />
                        <a className="banner banner-1" href="#">
                          <img src="./img/banner05.jpg" alt />
                          <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                            <h3 className="white-color font-weak">HOT DEAL</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Men’s Clothing</a>
                </li>
                <li className="dropdown side-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Phones &amp; Accessories <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 hidden-sm hidden-xs">
                        <a className="banner banner-2" href="#">
                          <img src="./img/banner04.jpg" alt />
                          <div className="banner-caption">
                            <h3 className="white-color">
                              NEW
                              <br />
                              COLLECTION
                            </h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Computer &amp; Office</a>
                </li>
                <li>
                  <a href="#">Consumer Electronics</a>
                </li>
                <li className="dropdown side-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Jewelry &amp; Watches <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Bags &amp; Shoes</a>
                </li>
                <li>
                  <a href="#">View All</a>
                </li>
              </ul>
            </div>
            {/* /category nav */}
            {/* menu nav */}
            <div className="menu-nav">
              <span className="menu-header">
                Menu <i className="fa fa-bars" />
              </span>
              <ul className="menu-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li className="dropdown mega-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Women <i className="fa fa-caret-down" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row hidden-sm hidden-xs">
                      <div className="col-md-12">
                        <hr />
                        <a className="banner banner-1" href="#">
                          <img src="./img/banner05.jpg" alt />
                          <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                            <h3 className="white-color font-weak">HOT DEAL</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown full-width">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Men <i className="fa fa-caret-down" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a className="banner banner-1" href="#">
                            <img src="./img/banner06.jpg" alt />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Women’s
                              </h3>
                            </div>
                          </a>
                          <hr />
                        </div>
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a className="banner banner-1" href="#">
                            <img src="./img/banner07.jpg" alt />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Men’s
                              </h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a className="banner banner-1" href="#">
                            <img src="./img/banner08.jpg" alt />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Accessories
                              </h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a className="banner banner-1" href="#">
                            <img src="./img/banner09.jpg" alt />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Bags
                              </h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="#">Women’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Men’s Clothing</a>
                          </li>
                          <li>
                            <a href="#">Phones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="#">Bags &amp; Shoes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li className="dropdown default-dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Pages <i className="fa fa-caret-down" />
                  </a>
                  <ul className="custom-menu">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Product Details</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* menu nav */}
          </div>
        </div>
        {/* /container */}
      </div>
    </>
  );
}

export default MenuBar;
