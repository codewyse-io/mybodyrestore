<template>
    <section class="cart_">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="add_to_head">
                        <h2>Your cart</h2>
                        <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style="width:60%">Product</th>
        <th style="width:13%">Price</th>
        <th style="width:13%">Quantity</th>
        <th style="width:14%" class="text-center">Total</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img :src="require(`../assets/images/product1.webp`)" alt="..." class="img-responsive" /></div>
            <div class="col-sm-10">
              <h4 class="nomargin"><a href="ProductDetails/"> Audien EV1 Hearing Aid (Pair)</a></h4>
             <a class="product_remove" href="">Remove</a>
            </div>
          </div>
        </td>
        <td data-th="Price">$89.00</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" value="1">
        </td>
        <td data-th="Subtotal" class="text-center">$89.00</td>
      </tr>
    </tbody>
  </table>
  <div class="grid_subtotal">
    <ul>
        <li><p>Subtotal </p></li>
        <li><p>$89.00 USD </p></li>
    </ul>
    <p>Taxes and shipping calculated at checkout</p>
    <button class="check_out">
        check out
    </button>
  </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cart_reviews">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="icons">
                        <svg width="158" height="24" viewBox="0 0 158 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#EDB020"></path>
      <path d="M45 0L47.6942 8.2918H56.4127L49.3593 13.4164L52.0534 21.7082L45 16.5836L37.9466 21.7082L40.6407 13.4164L33.5873 8.2918H42.3058L45 0Z" fill="#EDB020"></path>
      <path d="M78 0L80.6942 8.2918H89.4127L82.3593 13.4164L85.0534 21.7082L78 16.5836L70.9466 21.7082L73.6407 13.4164L66.5873 8.2918H75.3058L78 0Z" fill="#EDB020"></path>
      <path d="M111 0L113.694 8.2918H122.413L115.359 13.4164L118.053 21.7082L111 16.5836L103.947 21.7082L106.641 13.4164L99.5873 8.2918H108.306L111 0Z" fill="#EDB020"></path>
      <path d="M146 0L148.694 8.2918H157.413L150.359 13.4164L153.053 21.7082L146 16.5836L138.947 21.7082L141.641 13.4164L134.587 8.2918H143.306L146 0Z" fill="#EDB020"></path>
    </svg> <p>4.9 out of 5.0 stars</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="inner_testi">
                        <div class="icons">
                        <svg width="158" height="24" viewBox="0 0 158 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#EDB020"></path>
      <path d="M45 0L47.6942 8.2918H56.4127L49.3593 13.4164L52.0534 21.7082L45 16.5836L37.9466 21.7082L40.6407 13.4164L33.5873 8.2918H42.3058L45 0Z" fill="#EDB020"></path>
      <path d="M78 0L80.6942 8.2918H89.4127L82.3593 13.4164L85.0534 21.7082L78 16.5836L70.9466 21.7082L73.6407 13.4164L66.5873 8.2918H75.3058L78 0Z" fill="#EDB020"></path>
      <path d="M111 0L113.694 8.2918H122.413L115.359 13.4164L118.053 21.7082L111 16.5836L103.947 21.7082L106.641 13.4164L99.5873 8.2918H108.306L111 0Z" fill="#EDB020"></path>
      <path d="M146 0L148.694 8.2918H157.413L150.359 13.4164L153.053 21.7082L146 16.5836L138.947 21.7082L141.641 13.4164L134.587 8.2918H143.306L146 0Z" fill="#EDB020"></path>
    </svg></div>
    <p>I was given a pair by a friend, have been using one & hearing is so much better... Great in fact. With the discount offer I just ordered another pair just in case I should somehow lose one. So glad I tried these.

</p>
<h6>- Ethel Richardson</h6>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="inner_testi">
                        <div class="icons">
                        <svg width="158" height="24" viewBox="0 0 158 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#EDB020"></path>
      <path d="M45 0L47.6942 8.2918H56.4127L49.3593 13.4164L52.0534 21.7082L45 16.5836L37.9466 21.7082L40.6407 13.4164L33.5873 8.2918H42.3058L45 0Z" fill="#EDB020"></path>
      <path d="M78 0L80.6942 8.2918H89.4127L82.3593 13.4164L85.0534 21.7082L78 16.5836L70.9466 21.7082L73.6407 13.4164L66.5873 8.2918H75.3058L78 0Z" fill="#EDB020"></path>
      <path d="M111 0L113.694 8.2918H122.413L115.359 13.4164L118.053 21.7082L111 16.5836L103.947 21.7082L106.641 13.4164L99.5873 8.2918H108.306L111 0Z" fill="#EDB020"></path>
      <path d="M146 0L148.694 8.2918H157.413L150.359 13.4164L153.053 21.7082L146 16.5836L138.947 21.7082L141.641 13.4164L134.587 8.2918H143.306L146 0Z" fill="#EDB020"></path>
    </svg></div>
    <p>I was given a pair by a friend, have been using one & hearing is so much better... Great in fact. With the discount offer I just ordered another pair just in case I should somehow lose one. So glad I tried these.

</p>
<h6>- Ethel Richardson</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>

<FooterSection />

</template>


<script>
import FooterSection from '@/components/FooterSection.vue'


export default {
    components: {
        FooterSection,
    }
}



</script>