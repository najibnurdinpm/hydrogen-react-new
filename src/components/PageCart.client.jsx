import {
  useCart,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  CartShopPayButton,
  CartEstimatedCost,
  useCartLine,
} from '@shopify/hydrogen/client';
import {Dialog} from '@headlessui/react';

import {useCartUI} from './CartUIProvider.client';
import CartIconWithItems from './CartIconWithItems.client';
import {BUTTON_PRIMARY_CLASSES} from './Button.client';

/**
 * A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
 */

 export default function PageCart() {
   
  const {totalQuantity} = useCart();
  return (
    <div className="px-7 flex-grow" role="table" aria-label="Shopping cart">
      <div role="row" className="sr-only">
        <div role="columnheader">Product image</div>
        <div role="columnheader">Product details</div>
        <div role="columnheader">Price</div>
      </div>
      {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <div className='row'>
                <div className='col-lg-7'>
                  <CartLines>
                      <LineInCart />
                  </CartLines>
                </div>
                <div className='col-lg-4'>
                  <CartFooter />
                </div>
              </div>
            </>
          )}
      
    </div>
  )
 }

 function CartEmpty() {
  return (
    <div className="p-7 flex flex-col">
      <p className="mb-4 text-lg text-gray-500 text-center">
        Your cart is empty
      </p>
        Continue Shopping
    </div>
  );
}


 function CartFooter() {
  return (

              <div class="shopping-cart__order-summary">
                <div class="order-summary__background">
                  <h3 class="order-summary__title">Order Summary</h3>
                  <div class="order-summary__subtotal">
                    <div class="summary-subtotal__title">Subtotal</div>
                    <div class="summary-subtotal__price">
                    <CartEstimatedCost
                        amountType="subtotal"
                        role="cell"
                        className="text-right "
                      />
                    </div>
                  </div>
                  <div class="order-summary__delivery-method">
                    <select>
                      <option>Standard Shipping (FREE)</option>
                      <option>Fast Shipping (FREE)</option>
                    </select>
                  </div>
                  <div class="order-summary__total">
                    <div class="summary-total__title">Total</div>
                    <div class="summary-total__price">
                      <CartEstimatedCost
                        amountType="subtotal"
                        role="cell"
                        className="text-right "
                      />
                    </div>
                  </div>
                  <div class="order-summary__proceed-to-checkout">
                    {/* <a href="checkout.html" class="second-button">Proceed to checkout</a> */}
                    <CartCheckoutButton className="second-button">
                        Proceed to checkout
                    </CartCheckoutButton>
                  </div>
                  <div class="order-summary__accept-payment-methods">
                    <h4 class="accept-payment-methods__title">Accept Payment Methods</h4>
                    <img src="assets/images/default/payment.png" alt="Payment" />
                  </div>
                </div>
                
                {/* <div class="order-summary__action">
                  <a href="shop.html">Continue shopping</a>
                </div> */}
              </div>

    //  <footer className="bottom-0 sticky pb-8 border-t border-black border-opacity-5">
    //   <div className="relative h-60 bg-white text-gray-900 p-7">
    //     <div role="table" aria-label="Cost summary">
    //       <div role="row" className="flex justify-between">
    //         <span className="font-semibold" role="rowheader">
    //           Subtotal
    //         </span>
    //         <CartEstimatedCost
    //           amountType="subtotal"
    //           role="cell"
    //           className="text-right "
    //         />
    //       </div>
    //       <div role="row" className="flex justify-between mt-2">
    //         <span className="font-semibold" role="rowheader">
    //           Shipping
    //         </span>
    //         <span role="cell" className="uppercase">
    //           Free
    //         </span>
    //       </div>
    //     </div>
    //     <CartShopPayButton className="flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md" />
    //     <CartCheckoutButton className={BUTTON_PRIMARY_CLASSES}>
    //       Checkout
    //     </CartCheckoutButton>
    //   </div>
    // </footer> 
  );
}

function LineInCart() {
  const {merchandise} = useCartLine();
  const hargaSatuan = <CartLinePrice />
  console.log(hargaSatuan)
  
  const replaceHS = hargaSatuan
  return (

          <div class="shopping-cart__container">
            <div class="table-responsive">
              <table class="shopping-cart__table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="shopping-cart__product">
                        <div class="cart-product__image">
                            {/* <img alt="Image" /> */}
                            <CartLineImage
                                className="bg-white border border-black border-opacity-5 rounded-xl "
                                loaderOptions={{width: 98, height: 98, crop: 'center'}}
                              />
                        </div>
                        <div class="cart-product__title-and-variant">
                          <h3 class="cart-product__title">
                            <CartLineProductTitle className="text-lg font-medium" />
                          </h3>
                          <div class="cart-product__variant">Bold Brown, 40</div>
                          <div class="cart-product__action"><a href="#">Edit</a></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="cart-product__price">

                        <CartLinePrice className="text-lg" />
                      </div>
                    </td>
                    <td>
                      <div class="cart-product__quantity-field">
                        {/* <div class="quantity-field__minus"><a href="#">-</a></div>
                        <input />
                        <div class="quantity-field__plus"><a href="#">+</a></div> */}
                        
                    <CartItemQuantity />
                      </div>
                    </td>
                    <td>
                      <div class="cart-product__price">
                        
                        <CartLinePrice className="text-lg" />
                      </div>
                    </td>
                    <td>
                      <div class="cart-product__delete">
                        <a href="#"><i class="lnil lnil-close"></i></a>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            
          </div>
          


    //     {/* <div
    //   role="row"
    //   className="flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900"
    // >
    //   <div role="cell" className="flex-shrink-0 mr-7">
    //     <Link to={`/products/${merchandise.product.handle}`}>
    //       <CartLineImage
    //         className="bg-white border border-black border-opacity-5 rounded-xl "
    //         loaderOptions={{width: 98, height: 98, crop: 'center'}}
    //       />
    //     </Link>
    //   </div>
    //   <div
    //     role="cell"
    //     className="flex flex-col w-full justify-between items-start flex-grow-1 mr-4"
    //   >
    //     <Link
    //       to={`/products/${merchandise.product.handle}`}
    //       className="hover:underline"
    //     >
    //       <CartLineProductTitle className="text-lg font-medium" />
    //     </Link>
    //     <ul className="text-xs space-y-1">
    //       {merchandise.selectedOptions.map(({name, value}) => (
    //         <li key={name}>
    //           {name}: {value}
    //         </li>
    //       ))}
    //     </ul>
    //     <CartItemQuantity />
    //   </div>
    //   <div role="cell" className="flex flex-col justify-between items-end">
    //     <CartLineQuantityAdjustButton
    //       adjust="remove"
    //       aria-label="Remove from cart"
    //       className="disabled:pointer-events-all disabled:cursor-wait"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-5 w-5"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </CartLineQuantityAdjustButton>
    //     <CartLinePrice className="text-lg" />
    //   </div>
    // </div> */}
   
  );
}

function CartItemQuantity() {
  return (
    <div className="flex border rounded border-gray-300 items-center overflow-auto mt-2">
      <CartLineQuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
        className="p-2 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
      <CartLineQuantity
        as="div"
        className="p-2 text-gray-900 text-xs text-center"
      />
      <CartLineQuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
    </div>
  );
}


