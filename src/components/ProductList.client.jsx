import {
    flattenConnection,
    useProduct,
    useParsedMetafields,
    ProductProvider,
    ProductTitle,
    ProductDescription,
    ProductPrice,
    AddToCartButton,
    BuyNowButton,
  } from '@shopify/hydrogen/client';
  import ProductOptions from './ProductOptions.client';
  import Gallery from './Gallery.client';
  import {
    BUTTON_PRIMARY_CLASSES,
    BUTTON_SECONDARY_CLASSES,
  } from './Button.client';
  
  function AddToCartMarkup() {
    const {selectedVariant} = useProduct();
    const isOutOfStock = !selectedVariant.availableForSale;
  
    return (
      <div className="space-y-2 mb-8">
        <AddToCartButton
          className={BUTTON_PRIMARY_CLASSES}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? 'Out of stock' : 'Add to bag'}
        </AddToCartButton>
        {isOutOfStock ? (
          <p className="text-black text-center">Available in 2-3 weeks</p>
        ) : (
          <BuyNowButton
            variantId={selectedVariant.id}
            className={BUTTON_SECONDARY_CLASSES}
          >
            Buy it now
          </BuyNowButton>
        )}
      </div>
    );
  }
  
  function SizeChart() {
    return (
      <>
        <h3
          className="text-xl text-black font-semibold mt-8 mb-4"
          id="size-chart"
        >
          Size Chart
        </h3>
        <table className="min-w-full table-fixed text-sm text-center bg-white">
          <thead>
            <tr className="bg-black text-white">
              <th className="w-1/4 py-2 px-4 font-normal">Board Size</th>
              <th className="w-1/4 py-2 px-4 font-normal">154</th>
              <th className="w-1/4 py-2 px-4 font-normal">158</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-black">Weight Range</td>
              <td className="p-3 border border-black">120-180 lbs. /54-82kg</td>
              <td className="p-3 border border-black">150-200 lbs. /68-91 kg</td>
            </tr>
            <tr>
              <td className="p-3 border border-black">Waist Width</td>
              <td className="p-3 border border-black">246mm</td>
              <td className="p-3 border border-black">255mm</td>
            </tr>
            <tr>
              <td className="p-3 border border-black">Stance Width</td>
              <td className="p-3 border border-black">-40</td>
              <td className="p-3 border border-black">-40</td>
            </tr>
            <tr>
              <td className="p-3 border border-black">Binding Sizes</td>
              <td className="p-3 border border-black">
                Men&rsquo;s S/M, Women&rsquo;s S/M
              </td>
              <td className="p-3 border border-black">
                Men&rsquo;s L, Women&rsquo;s L
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  
  function ProductPrices() {
    const product = useProduct();
  
    return (
      <>
        <ProductPrice
          className="text-gray-500 line-through text-lg font-semibold"
          priceType="compareAt"
          variantId={product.selectedVariant.id}
        />
        <ProductPrice
          className="text-gray-900 text-lg font-semibold"
          variantId={product.selectedVariant.id}
        />
      </>
    );
  }
  
  export default function ProductDetails({product}) {
    const initialVariant = flattenConnection(product.variants)[0];
  
    const productMetafields = useParsedMetafields(product.metafields || {});
    const sizeChartMetafield = productMetafields.find(
      (metafield) =>
        metafield.namespace === 'my_fields' && metafield.key === 'size_chart',
    );
    const sustainableMetafield = productMetafields.find(
      (metafield) =>
        metafield.namespace === 'my_fields' && metafield.key === 'sustainable',
    );
    const lifetimeWarrantyMetafield = productMetafields.find(
      (metafield) =>
        metafield.namespace === 'my_fields' &&
        metafield.key === 'lifetime_warranty',
    );
  
    return (
      <>
        <ProductProvider data={product} initialVariantId={initialVariant.id}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
            <div className="md:hidden mt-5 mb-8">
              <ProductTitle
                as="h1"
                className="text-4xl font-bold text-black mb-4"
              />
              {product.vendor && (
                <div className="text-sm font-medium mb-2 text-gray-900">
                  {product.vendor}
                </div>
              )}
              <span />
              <div className="flex justify-between md:block">
                <ProductPrices />
              </div>
            </div>
  
            <Gallery />
  
            
  
            {/* <div>
              <div className="hidden md:block">
                <ProductTitle
                  as="h1"
                  className="text-5xl font-bold text-black mb-4"
                />
                {product.vendor && (
                  <div className="text-sm font-medium mb-2 text-gray-900">
                    {product.vendor}
                  </div>
                )}
                <ProductPrices />
              </div>
              Product Options
              <div className="mt-8">
                <ProductOptions />
                {sizeChartMetafield?.value && (
                  <a
                    href="#size-chart"
                    className="block underline text-gray-500 text-sm tracking-wide my-4"
                  >
                    Size Chart
                  </a>
                )}
                <AddToCartMarkup />
                <div className="flex items space-x-4">
                  {sustainableMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Sustainable Material
                      </span>
                    </span>
                  )}
                  {lifetimeWarrantyMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Lifetime Warranty
                      </span>
                    </span>
                  )}
                </div>
              </div>
              Product Description
              <ProductDescription className="prose border-t border-gray-200 pt-6 text-black text-md" />
              {sizeChartMetafield?.value && (
                <div className="border-t border-gray-200">
                  <SizeChart />
                </div>
              )}
            </div> */}
  
  
  
  
  
  
  
  
            <div class="">
              <h1 class="product__title">
              <ProductTitle
                as="h1"
                className="text-4xl font-bold text-black mb-4"
              />
              </h1>
              <div class="product__reviews">
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled active"></i>
                <i class="lnir lnir-star-filled"></i>
                <span>3 reviews</span>
              </div>
              <div class="product__price">
              {product.vendor && (
                  <div className="text-sm font-medium mb-2 text-gray-900">
                    {product.vendor}
                  </div>
                )}
                <ProductPrices />
                
              </div>
              Description
                <ProductDescription className="prose border-t border-gray-200 pt-6 text-black text-md" />
  
              <div className="mt-8">
                <ProductOptions />
                {sizeChartMetafield?.value && (
                  <a
                    href="#size-chart"
                    className="block underline text-gray-500 text-sm tracking-wide my-4"
                  >
                    Size Chart
                  </a>
                )}
                <AddToCartMarkup />
                <div className="flex items space-x-4">
                  {sustainableMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Sustainable Material
                      </span>
                    </span>
                  )}
                  {lifetimeWarrantyMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Lifetime Warranty
                      </span>
                    </span>
                  )}
                </div>
              </div>
  
              
               
              {/* <div class="product__options">
                <div class="product__colors d-flex align-items-center">
                  <ul class="product__available-colors">
                    <li class="active"><a href="#"><span class="custom-tooltip">Brown</span></a></li>
                    <li><a href="#" ><span class="custom-tooltip">Green</span></a></li>
                    <li><a href="#" class="open-tooltip"><span class="custom-tooltip">Black</span></a></li>
                    <li><a href="#" class="open-tooltip"><span class="custom-tooltip">Red</span></a></li>
                  </ul>
                  <div class="product__current-color">Color: <span>Brown</span></div>
                </div>
                <div class="product__sizes">
                  <select>
                    <option>Choose your size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select> 
                </div>
              </div> */}
  
  
              {/* <div class="product__action js-product-action">
                <div class="product__quantity-and-add-to-cart d-flex">
                  <div class="product__quantity">
                    <div class="product-quantity__minus js-quantity-down"><a href="#"><i class="lnil lnil-minus"></i></a></div>
                    <input type="text" value="2" class="product-quantity__input js-quantity-field" />
                    <div class="product-quantity__plus js-quantity-up"><a href="#"><i class="lnil lnil-plus"></i></a></div>
                  </div>  
                  <div class="product__add-to-cart">
                    <a href="#" class="eighth-button">Add to cart</a>
                  </div>
                </div>
                <div class="product__buy-now">
                  <a href="#" class="second-button">Buy now</a>
                </div>
              </div> */}
              {/* <ul class="product__information">
                <li><span>SKU</span><p>SS-501</p></li>
                <li><span>Category</span><p>Men’s Clothing</p></li>
                <li><span>Tags</span><p><a href="#">shirt</a>, <a href="#">men</a>, <a href="#">basic</a>, <a href="#">cotton</a></p></li>
              </ul>
              <ul class="product__socials">
                <li><a href="https://twitter.com" target="_blank"><i class="lnil lnil-twitter"></i></a></li>
                <li><a href="https://facebook.com" target="_blank"><i class="lnil lnil-facebook"></i></a></li>
                <li><a href="https://instagram.com" target="_blank"><i class="lnil lnil-Instagram"></i></a></li>
              </ul>
              <div class="product__mobile-tabs">
                <div class="accordion active js-accordion">
                  <div class="accordion__title js-accordion-title">
                    Description
                  </div>
                  <div class="accordion__content js-accordion-content">
                    <h3>Introduce</h3>
                    <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                    <h3>Material &amp; Washing Instructions</h3>
                    <ul class="tab__features">
                      <li><p><img src="assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                      <li><p><img src="assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                      <li><p><img src="assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                      <li><p><img src="assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                      <li><p><img src="assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                    </ul>
                  </div>
                </div>
                <div class="accordion js-accordion">
                  <div class="accordion__title js-accordion-title">
                    Ship &amp; return
                  </div>
                  <div class="accordion__content js-accordion-content">
                    <h3>Shipping</h3>
                    <ul>
                      <li>Complimentary ground shipping within 1 to 7 business days</li>
                      <li>In-store collection available within 1 to 7 business days</li>
                      <li>Next-day and Express delivery options also available</li>
                      <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                      <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                    </ul>
                    <h3>Returns &amp; Exchanges</h3>
                    <ul>
                      <li>Easy and complimentary, within 14 days</li>
                      <li>See conditions and procedure in our return FAQs</li>
                      <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                    </ul>
                  </div>
                </div>
                <div class="accordion js-accordion">
                  <div class="accordion__title js-accordion-title">
                    Review (3)
                  </div>
                  <div class="accordion__content js-accordion-content">
                    <h3 class="review__title">Customer’s Review (2)</h3>
                    <div class="review d-flex">
                      <div class="review__avatar">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/images/default/avatar_1.jpg 1560w,
                          assets/images/default/avatar_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload" />
                      </div>
                      <div class="review__details">
                        <div class="review__title-and-rating d-flex">
                          <div class="review__title">Quality product &amp; very comfortable!</div>
                          <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                          </div>
                        </div>
                        <div class="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                        <div class="review__meta">
                          <span>andy robertson.</span>  on 25 April, 2022
                        </div>
                      </div>
                    </div>
                    <div class="review d-flex">
                      <div class="review__avatar">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/images/default/avatar_2.jpg 1560w,
                          assets/images/default/avatar_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload" />
                      </div>
                      <div class="review__details">
                        <div class="review__title-and-rating d-flex align">
                          <div class="review__title">Awesome product</div>
                          <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                          </div>
                        </div>
                        <div class="review__content">I love it &amp; certainly that i’ll buy it once again. Perfection experience!</div>
                        <div class="review__meta">
                          <span>Alexander Arnold.</span>  on 25 April, 2022
                        </div>
                      </div>
                    </div>
                    <h3>Add A Review</h3>
                    <form class="review__form">
                      <div class="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                      <div class="form__your-rating d-flex align-items-center">
                        <div class="your-rating__title">Your rating</div>
                        <div class="your-rating__content js-rating-content">
                          <i class="lnir lnir-star-filled js-rating" data-value="1"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="2"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="3"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="4"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="5"></i>
                          <div class="d-none">
                            <input type="radio" name="rating" class="js-rating-input" value="1" />
                            <input type="radio" name="rating" class="js-rating-input" value="2" />
                            <input type="radio" name="rating" class="js-rating-input" value="3" />
                            <input type="radio" name="rating" class="js-rating-input" value="4" />
                            <input type="radio" name="rating" class="js-rating-input" value="5" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Give your review a tittle " />
                      </div>
                      <div class="form-group">
                        <textarea placeholder="Write your review here" class="form-group__textarea" rows="3"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                          </div>
                        </div>
                      </div>
                      <div class="form-checkbox">
                        <input type="checkbox" id="checkbox1" class="form-checkbox__input" />
                        <label class="form-checkbox__label" for="checkbox1">Save my name &amp; email in this browser for next time i comment</label>
                      </div>
                      <div class="form__action">
                        <button type="submit" class="second-button">Submit review</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="accordion js-accordion">]
                  <div class="accordion__title js-accordion-title">
                    Ask a question
                  </div>
                  <div class="accordion__content js-accordion-content">
                    <form class="contact-page__form">
                      <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Subject (optional)" />
                      </div>
                      <div class="form-group">
                        <textarea placeholder="Write your question here" class="form-group__textarea" rows="5"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                          </div>
                        </div>
                      </div>
                      <div class="form__action">
                        <button type="submit" class="second-button">Ask a question</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <ul class="product__tabs d-flex">
                <li><a href="#" class="js-open-tab" data-id="1">Description</a></li>
                <li><a href="#" class="js-open-tab" data-id="2">Ship &amp; return</a></li>
                <li><a href="#" class="js-open-tab" data-id="3">Review (3)</a></li>
                <li><a href="#" class="js-open-tab" data-id="4">Ask a question</a></li>
              </ul>
              <div class="tab js-tab" data-id="1">
                <div class="tab__overlay js-close-tab"></div>
                <div class="tab__content">
                  <div class="tab__heading d-flex align-items-center">
                    <h3 class="tab__h3">Description</h3>
                    <div class="tab__close"><a href="#" class="js-close-tab"><i class="lnil lnil-close"></i></a></div>
                  </div>  
                  <div class="tab__description">
                    <h3>Introduce</h3>
                    <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                    <h3>Material &amp; Washing Instructions</h3>
                    <p>Composition: 51% wool,45% polyester,2% acrylic,2% viscose.
                      Lining: 53% cotton,47% polyester.
                      Sleeve lining: 100% polyester</p>
                    <ul class="tab__features">
                      <li><p><img src="assets/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                      <li><p><img src="assets/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                      <li><p><img src="assets/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                      <li><p><img src="assets/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                      <li><p><img src="assets/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tab js-tab" data-id="2">
                <div class="tab__overlay js-close-tab"></div>
                <div class="tab__content">
                  <div class="tab__heading d-flex align-items-center">
                    <h3 class="tab__h3">Ship &amp; return</h3>
                    <div class="tab__close"><a href="#" class="js-close-tab"><i class="lnil lnil-close"></i></a></div>
                  </div>  
                  <div class="tab__description">
                    <h3>Shipping</h3>
                    <ul>
                      <li>Complimentary ground shipping within 1 to 7 business days</li>
                      <li>In-store collection available within 1 to 7 business days</li>
                      <li>Next-day and Express delivery options also available</li>
                      <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                      <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                    </ul>
                    <h3>Returns &amp; Exchanges</h3>
                    <ul>
                      <li>Easy and complimentary, within 14 days</li>
                      <li>See conditions and procedure in our return FAQs</li>
                      <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tab js-tab" data-id="3">
                <div class="tab__overlay js-close-tab"></div>
                <div class="tab__content">
                  <div class="tab__heading d-flex align-items-center">
                    <h3 class="tab__h3">Review (3)</h3>
                    <div class="tab__close"><a href="#" class="js-close-tab"><i class="lnil lnil-close"></i></a></div>
                  </div>  
                  <div class="tab__description">
                    <h3 class="review__title">Customer’s Review (2)</h3>
                    <div class="review d-flex">
                      <div class="review__avatar">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/images/default/avatar_1.jpg 1560w,
                          assets/images/default/avatar_1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyautosizes ls-is-cached lazyloaded" sizes="70px" srcset="assets/images/default/avatar_1.jpg 1560w,
                          assets/images/default/avatar_1.jpg 3120w" />
                      </div>
                      <div class="review__details">
                        <div class="review__title-and-rating d-flex">
                          <div class="review__title">Quality product &amp; very comfortable!</div>
                          <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                          </div>
                        </div>
                        <div class="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                        <div class="review__meta">
                          <span>andy robertson.</span>  on 25 April, 2022
                        </div>
                      </div>
                    </div>
                    <div class="review d-flex">
                      <div class="review__avatar">
                        <img alt="Image" data-sizes="auto" data-srcset="assets/images/default/avatar_2.jpg 1560w,
                          assets/images/default/avatar_2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyautosizes ls-is-cached lazyloaded" sizes="70px" srcset="assets/images/default/avatar_2.jpg 1560w,
                          assets/images/default/avatar_2.jpg 3120w" />
                      </div>
                      <div class="review__details">
                        <div class="review__title-and-rating d-flex align">
                          <div class="review__title">Awesome product</div>
                          <div class="review__rating">
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                            <i class="lnir lnir-star-filled active"></i>
                          </div>
                        </div>
                        <div class="review__content">I love it &amp; certainly that i’ll buy it once again. Perfection experience!</div>
                        <div class="review__meta">
                          <span>Alexander Arnold.</span>  on 25 April, 2022
                        </div>
                      </div>
                    </div>
                    <h3>Add A Review</h3>
                    <form class="review__form">
                      <div class="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                      <div class="form__your-rating d-flex align-items-center">
                        <div class="your-rating__title">Your rating</div>
                        <div class="your-rating__content js-rating-content">
                          <i class="lnir lnir-star-filled js-rating" data-value="1"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="2"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="3"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="4"></i>
                          <i class="lnir lnir-star-filled js-rating" data-value="5"></i>
                          <div class="d-none">
                            <input type="radio" name="rating" class="js-rating-input" value="1" />
                            <input type="radio" name="rating" class="js-rating-input" value="2" />
                            <input type="radio" name="rating" class="js-rating-input" value="3" />
                            <input type="radio" name="rating" class="js-rating-input" value="4" />
                            <input type="radio" name="rating" class="js-rating-input" value="5" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Give your review a tittle " />
                      </div>
                      <div class="form-group">
                        <textarea placeholder="Write your review here" class="form-group__textarea" rows="3"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                          </div>
                        </div>
                      </div>
                      <div class="form-checkbox">
                        <input type="checkbox" id="checkbox2" class="form-checkbox__input" />
                        <label class="form-checkbox__label" for="checkbox2">Save my name &amp; email in this browser for next time i comment</label>
                      </div>
                      <div class="form__action">
                        <button type="submit" class="second-button">Submit review</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tab js-tab" data-id="4">
                <div class="tab__overlay js-close-tab"></div>
                <div class="tab__content">
                  <div class="tab__heading d-flex align-items-center">
                    <h3 class="tab__h3">Ask a question</h3>
                    <div class="tab__close"><a href="#" class="js-close-tab"><i class="lnil lnil-close"></i></a></div>
                  </div>  
                  <div class="tab__description">
                    <form class="contact-page__form">
                      <div class="form-group">
                        <input type="text" name="subject" class="form-group__input" placeholder="Subject (optional)" />
                      </div>
                      <div class="form-group">
                        <textarea placeholder="Write your question here" class="form-group__textarea" rows="5"></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="name" class="form-group__input" placeholder="Full Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="email" name="email" class="form-group__input" placeholder="Your E-mail*" />
                          </div>
                        </div>
                      </div>
                      <div class="form__action">
                        <button type="submit" class="second-button">Ask a question</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </div>
  
          </div>
        </ProductProvider>
      </>
    );
  }
  