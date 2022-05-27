import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import CollectionList from './Collection.client';
import MobileNavigation from './MobileNavigation.client';
import CartIconWithItems from './CartIconWithItems.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (

    <header className="header">
      <div className="container container--type-2">
        <div className="header__container d-flex align-items-center">
          <div className="header__mobile-menu">
            <div className="mobile-menu__open">
              <a className="js-open-mobile-menu"><i className="lnil lnil-menu"></i></a>
            </div>
            <div className="mobile-menu js-mobile-menu">
              <div className="mobile-menu__overlay js-close-mobile-menu"></div>
              <div className="mobile-menu__content">
                <div className="mobile-menu__close">
                  <a href="#" className="js-close-mobile-menu"><i className="lnil lnil-close"></i></a>
                </div>
                <h3 className="mobile-menu__logo">DUROTAN</h3>
                <ul className="mobile-menu__nav">
                  <li className="mobile-menu__dropdown">
                    <a href="index.html">Home</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li><a href="index.html">Home Page 1</a></li>
                      <li><a href="index-2.html">Home Page 2</a></li>
                      <li><a href="index-3.html">Home Page 3</a></li>
                      <li><a href="index-4.html">Home Page 4</a></li>
                      <li><a href="index-5.html">Home Page 5</a></li>
                      <li><a href="index-6.html">Home Page 6</a></li>
                      <li><a href="index-7.html">Home Page 7</a></li>
                      <li><a href="index-8.html">Home Page 8</a></li>
                      <li><a href="index-9.html">Home Page 9</a></li>
                      <li><a href="index-10.html">Home Page 10</a></li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down"></span></div>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li className="mobile-menu__dropdown">
                    <a href="shop.html">Shop</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li><a href="shop.html">Shop Page </a></li>
                      <li><a href="product.html">Shop Details</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down"></span></div>
                  </li>
                  <li className="mobile-menu__dropdown">
                    <a href="404.html">Pages</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li><a href="404.html">404 Page </a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down"></span></div>
                  </li>
                  <li className="dropdown">
                    <a href="blog.html">News</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li><a href="blog.html">Blog 1</a></li>
                      <li><a href="blog-with-sidebar.html">Blog 2</a></li>
                      <li><a href="post.html">Blog Single</a></li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn"><span className="lnil lnil-chevron-down"></span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="header__logo">
          <Link to={`/`} className="text-blue-600 hover:underline"
            >DUROTAN
          </Link>
          </h1>
          <ul className="header__nav">
            <li>
            <Link to={`/`} className="text-blue-600 hover:underline"
              >Home
            </Link>
            </li>
            <li>
            <Link to={`/allshop`} className="text-blue-600 hover:underline nav__item"
              >All Shop
            </Link>
              {/* <a href="shop.html" className="nav__item">Shop</a> */}
              <div className="nav__mega-menu">
                <div className="mega-menu__standard-column">
                  <div className="standard-column__title">Shop</div>
                  
            
                  <CollectionList collections={collections} storeName={storeName} />
                </div>
              </div>
            </li>
            <li>
              
              <Link to={`/about`} className="text-blue-600 hover:underline"
                >About
              </Link>
            </li>
            
          </ul>

         
          

          <ul className="header__language-switcher">
            <li>
              
              <div className="">
              <Link to={`/PageCart`} className="text-blue-600 hover:underline">
                <CartIconWithItems />
              </Link>
              </div>
            </li>
          </ul>
          <ul className="header__rightd block sm:block md:hidden lg:hidden">
            <li>
            <Link to={`/`} className="js-open-popup-search"
              >Home
            </Link>
            <CollectionList collections={collections} storeName={storeName} />
            </li>
            <li><a href="#" className="js-open-popup-search"><i className="lnil lnil-search-alt"></i></a></li>
            <li><a href="account.html"><i className="lnil lnil-user"></i></a></li>
            <li className="header__cart">
              <a href="cart.html"><i className="lnil lnil-cart"></i><span>2</span></a>
              <div className="header-cart">
                <ul className="header-cart__items">
                  <li className="cart-item d-flex">
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/products/1/10a.jpg 400w,
                          assets/products/1/10a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyautosizes ls-is-cached lazyloaded" sizes="60px" srcset="assets/products/1/10a.jpg 400w,
                          assets/products/1/10a.jpg 800w" />
                      </a>
                    </p>
                    <p className="cart-item__details">
                      <a href="product.html" className="cart-item__title">Slim fit modal cotton shirt</a>
                      <span className="cart-item__variant">Grey, M</span>
                      <span className="cart-ietm__price">2 <i>x</i> $113.99</span>
                    </p>
                    <p className="cart-item__delete">
                      <a href="#"><i className="lnil lnil-close"></i></a>
                    </p>
                  </li>
                  <li className="cart-item d-flex">
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/products/1/11a.jpg 400w,
                          assets/products/1/11a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyautosizes ls-is-cached lazyloaded" sizes="60px" srcset="assets/products/1/11a.jpg 400w,
                          assets/products/1/11a.jpg 800w" />
                      </a>
                    </p>
                    <p className="cart-item__details">
                      <a href="product.html" className="cart-item__title">Suede sport shoes</a>
                      <span className="cart-item__variant">Bold Brown, 40</span>
                      <span className="cart-ietm__price">1 <i>x</i> $45.5</span>
                    </p>
                    <p className="cart-item__delete">
                      <a href="#"><i className="lnil lnil-close"></i></a>
                    </p>
                  </li>
                  <li className="cart-item d-flex">
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/products/1/12a.jpg 400w,
                          assets/products/1/12a.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyautosizes ls-is-cached lazyloaded" sizes="60px" srcset="assets/products/1/12a.jpg 400w,
                          assets/products/1/12a.jpg 800w" />
                      </a>
                    </p>
                    <p className="cart-item__details">
                      <a href="product.html" className="cart-item__title">Pebbled crossbody belt bag</a>
                      <span className="cart-ietm__price">1 <i>x</i> $129.99</span>
                    </p>
                    <p className="cart-item__delete">
                      <a href="#"><i className="lnil lnil-close"></i></a>
                    </p>
                  </li>
                </ul>
                <div className="header-cart__subtotal d-flex">
                  <div className="subtotal__title">Subtotal</div>
                  <div className="subtotal__value">$272.47</div>
                </div>
                <div className="header-cart__action">
                  <a href="checkout.html" className="header-cart__button header-cart__button--checkout">Checkout</a>
                  <a href="cart.html" className="header-cart__button">View cart</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>

    

    

    
    // <header className="h-20 lg:h-32" role="banner">
    //   <div
    //     className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
    //       isMobileNavOpen ? '' : 'bg-opacity-95'
    //     }`}
    //   >
    //     <div
    //       className="h-full flex lg:flex-col place-content-between"
    //       style={{
    //         paddingRight: isCartOpen ? scrollbarWidth : 0,
    //       }}
    //     >
    //       <div className="text-center w-full flex justify-between items-center">
    //         <CountrySelector />
    //         <MobileNavigation
    //           collections={collections}
    //           isOpen={isMobileNavOpen}
    //           setIsOpen={setIsMobileNavOpen}
    //         />
    //         <Link
    //           className="font-black uppercase text-3xl tracking-widest"
    //           to="/"
    //         >
    //           {storeName}
    //         </Link>
    //         <CartToggle
    //           handleClick={() => {
    //             if (isMobileNavOpen) setIsMobileNavOpen(false);
    //           }}
    //         />
    //       </div>
    //       <Navigation collections={collections} storeName={storeName} />
    //     </div>
    //   </div>
    // </header>
  );
}
