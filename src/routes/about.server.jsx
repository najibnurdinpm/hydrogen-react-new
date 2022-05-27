import Layout from '../components/Layout.server';

import Welcome from '../components/Welcome.server';
export default function About() {

    return (
        // <Layout hero={<GradientBackground />}>
        <Layout>
          <div className="relative mb-12">
          <div class="home-about-us">
    <div class="container container--type-2">
      <div class="home-about-us__background">
        <div class="container">
          <h4 class="home-about-us__title">About Durotan</h4>
          <div class="home-about-us__description">Established in 1991, Durotan &amp; Logan Cee, 2 fashion artists work together in UK, start from design the casual for people around their location.The inspiration got from natural, color pastel &amp; activities the daily. Durotan’s items alway look very basic but never out trend, easy to mixed with any style. Then, they developed with serires 5 stores cover all United Kingdom</div>
          <div class="home-about-us__feature d-flex">
            <div class="feature__icon">
              <i class="lnil lnil-tshirt"></i>
            </div>
            <div class="feature__content">
              <h6 class="feature__h6">Quality materials</h6>
              <div class="feature__description">100% polyurethane. &amp; 100% polyester, products of Durotan alway choose detail and safety with customer. Your sastification is our reputation</div>
            </div>
          </div>
          <div class="home-about-us__feature d-flex">
            <div class="feature__icon">
              <i class="lnil lnil-ship"></i>
            </div>
            <div class="feature__content">
              <h6 class="feature__h6">Free shipping</h6>
              <div class="feature__description">Durotan free shipping for all orders over $199 in domestic &amp; over $399 for worldwide</div>
            </div>
          </div>
          <div class="home-about-us__feature d-flex">
            <div class="feature__icon">
              <i class="lnil lnil-money-protection"></i>
            </div>
            <div class="feature__content">
              <h6 class="feature__h6">Secure payment</h6>
              <div class="feature__description">We guarantee 100% secure with online payment on our site. In case if you have any problems with our product, you can return it back in 30 days</div>
            </div>
          </div>
          <div class="home-about-us__right-image">
            <img alt="Image" src="assets/images/default/feature_1.png" class=" ls-is-cached lazyloaded" />
          </div>
          <div class="home-about-us__right-image home-about-us__right-image--second">
            <img alt="Image" src="assets/images/default/feature_2.png" class=" ls-is-cached lazyloaded" />
          </div>
        </div>
      </div>
    </div>
  </div>
          </div>
        </Layout>
      );

}