<template>
    <section class="main_sec">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="main_detail_img">
                        <div class="img">
                            <img :src="require('../assets/images/productDetails1.webp')" alt="">
                        </div>
                        <div class="details_img">
                            <ul>
                                <li>
                                    <img :src="require('../assets/images/frame_1.png')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_2.png')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_3.png')" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="detail_last_img">
                            <ul>
                                <li>
                                    <img :src="require('../assets/images/frame_last1.jpg')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_last1.jpg')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_last1.jpg')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_last1.jpg')" alt="">
                                </li>
                                <li>
                                    <img :src="require('../assets/images/frame_last1.jpg')" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="main_product_content_details">
                        <div class="main_tabs_content" v-if="activeTab === 1">
                            <h2>EUCALYPTUS</h2>
                            <h6>Nasal Congestion Relief</h6>
                        </div>
                        <div class="main_tabs_content" v-if="activeTab === 2">
                            <h2>EUCALYPTUS</h2>
                            <h6>Nasal Congestion Relief</h6>
                        </div>
                        <div class="review_star_banner">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="138" height="21" viewBox="0 0 138 21" fill="none">
                                        <path d="M20.833 7.40163L13.9221 6.76066L11.1768 0.386037C10.9846 -0.0603194 10.3518 -0.0603194 10.1596 0.386037L7.41437 6.7607L0.503418 7.40163C0.0195146 7.44651 -0.176055 8.04839 0.189039 8.3691L5.40337 12.9498L3.8774 19.7207C3.77056 20.1947 4.28255 20.5667 4.7004 20.3186L10.6682 16.775L16.636 20.3186C17.0539 20.5667 17.5659 20.1947 17.4591 19.7207L15.9331 12.9498L21.1474 8.3691C21.5125 8.04839 21.3169 7.44651 20.833 7.40163Z" fill="#FFC107"></path>
                                        <path d="M11.1768 0.386037C10.9846 -0.0603194 10.3517 -0.0603194 10.1596 0.386037L7.41437 6.7607L0.503417 7.40163C0.0195145 7.44651 -0.176055 8.04839 0.189039 8.3691L5.40337 12.9498L3.8774 19.7207C3.77055 20.1947 4.28254 20.5667 4.7004 20.3186L6.03238 19.5277C6.21674 11.939 9.74266 6.59506 12.5342 3.53799L11.1768 0.386037Z" fill="#FFC107"></path>
                                        <path d="M49.999 7.40175L43.0881 6.76078L40.3428 0.386159C40.1507 -0.0601974 39.5178 -0.0601974 39.3256 0.386159L36.5804 6.76083L29.6694 7.40175C29.1855 7.44663 28.99 8.04851 29.3551 8.36922L34.5694 12.95L33.0434 19.7208C32.9366 20.1948 33.4486 20.5668 33.8664 20.3187L39.8342 16.7751L45.8021 20.3187C46.2199 20.5668 46.7319 20.1948 46.6251 19.7208L45.0991 12.95L50.3134 8.36922C50.6785 8.04851 50.4829 7.44663 49.999 7.40175Z" fill="#FFC107"></path>
                                        <path d="M40.3428 0.386159C40.1506 -0.0601974 39.5178 -0.0601974 39.3256 0.386159L36.5804 6.76083L29.6694 7.40175C29.1855 7.44663 28.99 8.04851 29.3551 8.36922L34.5694 12.95L33.0434 19.7208C32.9366 20.1948 33.4486 20.5668 33.8664 20.3187L35.1984 19.5278C35.3828 11.9392 38.9087 6.59518 41.7002 3.53811L40.3428 0.386159Z" fill="#FFC107"></path>
                                        <path d="M79.1655 7.40175L72.2546 6.76078L69.5094 0.386159C69.3172 -0.0601974 68.6843 -0.0601974 68.4921 0.386159L65.7469 6.76083L58.8359 7.40175C58.352 7.44663 58.1565 8.04851 58.5216 8.36922L63.7359 12.95L62.2099 19.7208C62.1031 20.1948 62.6151 20.5668 63.0329 20.3187L69.0007 16.7751L74.9686 20.3187C75.3864 20.5668 75.8984 20.1948 75.7916 19.7208L74.2656 12.95L79.4799 8.36922C79.845 8.04851 79.6494 7.44663 79.1655 7.40175Z" fill="#FFC107"></path>
                                        <path d="M69.5093 0.386159C69.3172 -0.0601974 68.6843 -0.0601974 68.4921 0.386159L65.7469 6.76083L58.8359 7.40175C58.352 7.44663 58.1565 8.04851 58.5216 8.36922L63.7359 12.95L62.2099 19.7208C62.1031 20.1948 62.6151 20.5668 63.0329 20.3187L64.3649 19.5278C64.5493 11.9392 68.0752 6.59518 70.8667 3.53811L69.5093 0.386159Z" fill="#FFC107"></path>
                                        <path d="M108.331 7.40175L101.42 6.76078L98.6744 0.386159C98.4822 -0.0601974 97.8493 -0.0601974 97.6571 0.386159L94.9119 6.76083L88.001 7.40175C87.5171 7.44663 87.3215 8.04851 87.6866 8.36922L92.9009 12.95L91.375 19.7208C91.2681 20.1948 91.7801 20.5668 92.198 20.3187L98.1658 16.7751L104.134 20.3187C104.551 20.5668 105.063 20.1948 104.957 19.7208L103.431 12.95L108.645 8.36922C109.01 8.04851 108.814 7.44663 108.331 7.40175Z" fill="#FFC107"></path>
                                        <path d="M98.6744 0.386159C98.4822 -0.0601974 97.8493 -0.0601974 97.6571 0.386159L94.9119 6.76083L88.001 7.40175C87.5171 7.44663 87.3215 8.04851 87.6866 8.36922L92.9009 12.95L91.375 19.7208C91.2681 20.1948 91.7801 20.5668 92.198 20.3187L93.5299 19.5278C93.7143 11.9392 97.2402 6.59518 100.032 3.53811L98.6744 0.386159Z" fill="#FFC107"></path>
                                        <path d="M137.497 7.40175L130.586 6.76078L127.84 0.386159C127.648 -0.0601974 127.015 -0.0601974 126.823 0.386159L124.078 6.76083L117.167 7.40175C116.683 7.44663 116.488 8.04851 116.853 8.36922L122.067 12.95L120.541 19.7208C120.434 20.1948 120.946 20.5668 121.364 20.3187L127.332 16.7751L133.3 20.3187C133.717 20.5668 134.229 20.1948 134.123 19.7208L132.597 12.95L137.811 8.36922C138.176 8.04851 137.98 7.44663 137.497 7.40175Z" fill="#FFC107"></path>
                                        <path d="M127.84 0.386159C127.648 -0.0601974 127.015 -0.0601974 126.823 0.386159L124.078 6.76083L117.167 7.40175C116.683 7.44663 116.488 8.04851 116.853 8.36922L122.067 12.95L120.541 19.7208C120.434 20.1948 120.946 20.5668 121.364 20.3187L122.696 19.5278C122.88 11.9392 126.406 6.59518 129.198 3.53811L127.84 0.386159Z" fill="#FFC107"></path>
                                    </svg>
                                </li>
                                <li><span>(1188 Reviews)</span></li>
                            </ul>
                        </div>
                        <div class="price_tags">
                            <h3>$29.99</h3>
                            <h4 class="per_tab">$ 2.0 per tablet</h4>
                        </div>
                        <p>Take a sigh of Relief with our Eucalyptus & Mint Relief Shower Steamers!</p>
                        <ul>
                            <li>Helps with Nasal Congestion and Sinus Relief</li>
                            <li>Clean Ingredients </li>
                            <li>15 Tablets per bag </li>
                        </ul>
                        <hr class="line">
                        <div class="scent_sec">
                            <h3>Scent:<span>EUCALYPTUS</span></h3>
                            <ul>
                                <li>
                                    <a href=""><img :src="require('../assets/images/cent_1.webp')" alt=""></a>
                                </li>
                                <li>
                                    <a href=""><img :src="require('../assets/images/cent_2.jpg')" alt=""></a>
                                </li>
                                <li>
                                    <a href=""><img :src="require('../assets/images/cent_1.webp')" alt=""></a>
                                </li>
                                <li>
                                    <a href=""><img :src="require('../assets/images/cent_2.jpg')" alt=""></a>
                                </li>
                                <li>
                                    <a href=""><img :src="require('../assets/images/cent_1.webp')" alt=""></a>
                                </li>
                            </ul>
                        </div>
                        <div class="pack">
                            <h3>Pack Size</h3>
                            <div class="tab" @click="activeTab = 1" :class="{ active: activeTab === 1 }">1 Pack</div>
                            <div class="tab" @click="activeTab = 2" :class="{ active: activeTab === 2 }">3 Pack</div>
                        </div>
                        <div class="frequncy">
                            <h3>Frequency:</h3>
                            <form action="">
                            <ul class="list-unstyled" aria-label="Purchasing Option">
                    <li class="form-check">
                      <label class="form-check-label" for="purchase-option-one-time">
                        <input id="purchase-option-one-time" class="form-check-input" type="radio" name="purchase_option" value="one-time" checked="">
                        <div class="purchase-option-title">
                          <h3>One Time Purchase</h3>
                          <span><label class="Subscribe_price">$29.99</label> - Purchase this time only</span>
                        </div>
                      </label>
                    </li>
                    <li class="form-check">
                      <label class="form-check-label" for="purchase-option-subscribe">
                        <input id="purchase-option-subscribe" class="form-check-input" type="radio" name="purchase_option" value="subscribe" >
                        <div class="purchase-option-title">
                          <h3>Subscribe &amp; Save</h3> 
                          <span id="subscribe_offer"><label class="Subscribe_price">$23.99</label> - Get 20% OFF your 1st subscription then 10% onwards</span> 
                        </div>
                        <div id="product-form-delivery-option">
                          <div class="selling-plan-wrapper"><div class="selling-plan-item">
                                <input type="radio" name="delivery_option"  onchange="onchangeProductFormDeliveryOption(this, event)" checked="">
                                <label for="Selling-plan-747634784--1-no-js">
                                  <strong>15</strong>
                                  <span>Days</span>
                                </label>
                              </div><div class="selling-plan-item">
                                <input type="radio" name="delivery_option"  onchange="onchangeProductFormDeliveryOption(this, event)">
                                <label for="Selling-plan-747667552--2-no-js">
                                  <strong>30</strong>
                                  <span>Days</span>
                                </label>
                              </div><div class="selling-plan-item">
                                <input type="radio" name="delivery_option" onchange="onchangeProductFormDeliveryOption(this, event)">
                                <label for="Selling-plan-747700320--3-no-js">
                                  <strong>60</strong>
                                  <span>Days</span>
                                </label>
                              </div></div>
                          <p>Two delivery minimum before cancellation</p>
                        </div>
                      </label>
                    </li>
                  </ul>
                </form>
                        </div>
                        <div class="add_cart_btn">
                            <button class="product_add_tocart">Add To Cart</button>
                            <button class="product_by_shop">Buy With Shop</button>
                            <a href="">More Payment options</a>
                        </div>
                        <hr>
                        <div class="shiping_details">
                            <ul>
                                <li>
                                    <img :src="require('../assets/images/ship1.webp')" alt="">
                                    <h5>Free Shipping On Orders $49+</h5>
                                </li>
                                <li>
                                    <img :src="require('../assets/images/ship2.svg')" alt="">
                                    <h5>Free 30 Day Scent Exchange</h5>
                                </li>
                                <li>
                                    <img :src="require('../assets/images/ship3.svg')" alt="">
                                    <h5>100% Happiness Guarantee</h5>
                                </li>
                            </ul>
                        </div>
    
                        <div class="review_slider">
                            <h5>Hear from our customers:</h5>
                            <ul>
                                <li>
                                    <div class="review_box">
                                        <h4>Super Convenient Spa Experience!</h4>
                                        <span>11/15/2023</span>
                                    </div>
                                    <div class="rivew_box_star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="review_content">
                                        <p>So in love with this product. So therapeutic. Best gift ever!</p>
                                        <span>Natalie</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="faqs_sec">
                            <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Products Ingredients
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Sodium Sulfate, Sodium Bicarbonate, Citric Acid, Sodium Carbonate, Zea Mays (corn) Starch, Fragrance, Eucalyptus Globulus Leaf Oil, PEG-150
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Free Shipping & Returns
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            We proudly offer a 30-day money-back guarantee if you are not fully satisfied with your product for any reason.                                     </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    export default {
        components: {
    
        },
        data() {
            return {
                activeTab: 1
            };
        }
    };
    </script>
    
    <style scoped>
    .main_detail_img .img img {
        width: 100%;
    }
    .main_detail_img {display: flex;flex-wrap: wrap;}
    
    .main_detail_img .img {
        flex: 0 0 67%;
    }
    
    .main_detail_img .details_img {
        flex: 0 0 30%;
    }
    
    .main_detail_img .details_img ul {
        display: block;
        list-style: none;
    }
    
    .main_detail_img .details_img ul li {
        margin: 0 0 17px 0;
    }
    
    section.main_sec {
        padding: 50px 0;
    }
    .main_detail_img .detail_last_img ul {display: flex;flex-wrap: wrap;padding: 0;list-style: none;}
    .main_detail_img .detail_last_img ul li {
        flex: 0 0 45%;
        margin: 0 0 20px 10px;
    }
    .main_detail_img .detail_last_img ul li img {
        width: 100%;
        height: auto;
        border-radius: 17px;
    }
    .main_product_content_details .main_tabs_content h2 {
        font-size: 36px;
        font-weight: 700;
        text-align: start;
    }
    .main_product_content_details .main_tabs_content h6 {
        text-align: start;
        font-size: 22px;
        font-weight: 500;
        margin: 0 0 30px 0;
    }
    .main_product_content_details .review_star_banner ul {
        display: flex;
        padding: 0;
        list-style: none;
        margin: -13px 0 30px 0;
    }
    .main_product_content_details .review_star_banner ul li {
        margin: 0 20px 0 0;
    }
    .main_product_content_details .review_star_banner ul li span {
        font-weight: 700;
    }
    .main_product_content_details .price_tags {
        display: flex;
        align-items: center;
    }
    .main_product_content_details .price_tags h3 {
        font-size: 35px;
        font-weight: 800;
        margin: 0 20px 20px 0;
    }
    .main_product_content_details .price_tags h4.per_tab {
        background: black;
        border-radius: 20px;
        color: white;
        font-size: 17px;
        padding: 4px 10px 5px 10px;
        margin: -20px 0 0 0;
        font-weight: 700;
    }
    .main_product_content_details p {
        text-align: start;
        font-size: 18px;
        margin: 0 0 20px 0;
    }
    .main_product_content_details ul {
        display: flex;
        flex-direction: column;
        list-style: disc;
        padding: 0;
        justify-content: start;
        margin: 0;
        text-align: start;
    }
    .main_product_content_details ul li {
        position: relative;
        padding: 0 0 0 15px;
    }
    .main_product_content_details .scent_sec {
        margin: 30px 0 0 0;
    }
    .main_product_content_details .scent_sec ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0;
        list-style: none;
        margin: 0;
    }
    .main_product_content_details .scent_sec ul li {margin: 0 20px 0 0;}
    .main_product_content_details .scent_sec ul li a img {
        border-radius: 100%;
        height: 60px;
        width: 60px;
    }
    .main_product_content_details .scent_sec h3 {
        text-align: start;
        margin: -11px 0 20px  0;
        font-size: 25px;
        font-weight: 600;
    }
    
    .main_product_content_details .scent_sec h3 span {
        color: #9797c9;
        margin: 0 0 0 5px;
        font-weight: 600;
    }
    
    .main_product_content_details .pack {
        margin: 10px 0 20px 0;
        display: flex;
        flex-wrap: wrap;
    }
    
    .main_product_content_details .pack h3 {
        text-align: start;
        font-size: 27px;
        font-weight: 600;
        flex: 0 0 100%;
    }
    
    .main_product_content_details .pack .tab {
        padding: 11px 34px;
        border: 2px solid gray;
        border-radius: 46px;
        color: black;
        font-weight: 600;
        margin: 0 20px 0 0;
    }
    
    .main_product_content_details .pack .tab.active {
        background: #0c2331;
        color: white;
        border: 2px solid black;
    }
    
    .main_product_content_details .frequncy h3 {
        text-align: start;
        font-size: 28px;
        font-weight: 500;
    }
    
    .main_product_content_details .frequncy ul {
        border-radius: 8px;
        background: transparent;
        margin-bottom: 2rem;
        overflow: hidden;
        border: 1px solid #DDD;
        padding: 10px 0 0 20px;
    }
    
    .main_product_content_details .frequncy ul li.form-check label.form-check-label {
        position: relative;
    }
    
    .main_product_content_details .frequncy ul li.form-check label.form-check-label input {
        position: absolute;
        appearance: none;
        -webkit-appearance: none;
        top: 3px;
        left: 0;
    }
    
    .main_product_content_details .frequncy ul li.form-check label.form-check-label .purchase-option-title {
        padding: 0px 0 20px 10px;
    }
    
    .main_product_content_details .frequncy ul li.form-check label.form-check-label .purchase-option-title h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 3px 0;
    }
    
    .main_product_content_details .frequncy ul li.form-check label.form-check-label .purchase-option-title span label.Subscribe_price {
        font-weight: 800;
    }
    #product-form-selling-plan ul .form-check:first-child input[type=radio]:checked+.purchase-option-title{
    border-bottom: 1px solid #DDD;
    }
    #product-form-delivery-option {
        overflow: hidden;
        visibility: hidden;
        opacity: 0;
        height: 0;
        transition: all .3s ease-in-out;
    }
    .selling-plan-wrapper {
        padding: .8rem 3rem 2.4rem;
        display: flex;
        flex-wrap: wrap;
        column-gap: 4.4rem;
        row-gap: 2rem;
    }
    .selling-plan-item {
        max-width: calc(33.33% - 44px* 2 / 3);
        min-width: 10rem;
        width: 100%;
        text-align: center;
    }
    .main_product_content_details .add_cart_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .main_product_content_details .add_cart_btn button.product_add_tocart {
        margin-bottom: 1rem;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        transition: .3s all;
        padding: 18px;
        flex: 0 0 100%;
        background: #0c2331;
        border-radius: 16px;
    }
    
    .main_product_content_details .add_cart_btn button.product_by_shop {
        margin-bottom: 1rem;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        transition: .3s all;
        padding: 18px;
        flex: 0 0 100%;
        background: #ac98f9;
        border-radius: 16px;
        border: none;
    }
    
    .main_product_content_details .add_cart_btn a {
        font-size: 16px;
        color: black;
    }
    .main_product_content_details .shiping_details ul {
        display: flex !important;
        flex-direction: row;
        list-style: none;
        padding: 0;
        margin: 0 0 0 -30px;
    }
    
    .main_product_content_details .shiping_details ul li {
        text-align: center;
    }
    
    .main_product_content_details .shiping_details ul li img {
        margin: 0 0 10px 0;
    }
    .main_product_content_details .review_slider h5 {
        font-size: 27px;
        text-align: start;
        margin: 20px 0 19px 0;
    }
    
    .main_product_content_details .review_slider ul {
        display: flex;
        list-style: none;
    }
    
    .main_product_content_details .review_slider ul li {box-shadow: 0 0 5px #0000004d;padding: 15px 15px 15px 15px;border-radius: 20px;}
    
    .main_product_content_details .review_slider ul li .review_box {
        display: flex;
        justify-content: space-between;
    }
    
    .main_product_content_details .review_slider ul li .review_box h4 {
        font-size: 20px;
        font-weight: 600;
    }
    
    .main_product_content_details .review_slider ul li .rivew_box_star svg {
        color: gold;
        margin: 0 3px 5px 0;
    }
    
    .main_product_content_details .review_slider ul li .review_content p {
        font-size: 16px;
        margin: 0 0 7px 0;
    }
    
    .main_product_content_details .review_slider ul li .review_content span {
        font-weight: 600;
    }
    .main_product_content_details .faqs_sec {
        margin: 12px 0 0 0;
    }
    
    
    
    .main_product_content_details .faqs_sec div#accordionExample .accordion-item {
        margin: 10px 0 10px 0;
        border: none;
    }
    
    .main_product_content_details .faqs_sec div#accordionExample .accordion-item h2.accordion-header {
        background-color: white;
    }
    
    .main_product_content_details .faqs_sec div#accordionExample .accordion-item h2.accordion-header button.accordion-button {
        background-color: white;
    }
    
section.main_sec {
    padding: 230px 0 0 0 !important;
}
    </style>
    