<template>
<section class="sec_1">
    <div class="container-fluid">
        <div class="row align-items-center">

            <div class="col-md-6">
                <div class="main_banner_video category">
                    <video class="main_vido" autoplay muted loop>
                        <source :src="require('../assets/images/banner_side.mp4')" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="col-md-6">
                <div class="main_banner_text">
                    <h2>Effortless, Affordable Luxury Self Care</h2>
                    <p>Over 1,000,000+ bags sold</p>
                    <div class="global_btn">
                        <a href="#"><button class="shop_btn">Shop now</button></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<section class="product_list">

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="Product_head justify-content-center">
                    <h2>Let’s Pick Your Spa Experience</h2>
                    <!-- <RouterLink to="/ShopCollection"><button class="shopAll">Shop All <i class="fa-solid fa-chevron-right"></i></button></RouterLink> -->
                </div>
                <LimitedTimeProduct :limitedProducts="[{id: 1},{id: 2},{id: 3}]" />

                <h2 class="text-start p-4 ">Single Pack:</h2>
                <ProductSlider :products="[{id: 1},{id: 2},{id: 3}]" />
            </div>

        </div>

    </div>

</section>

<BundlesProduct :bundles="[{id:1},{id:2}]" />

<ReviewSection />
<FooterSection />
</template>

  
<script>
import LimitedTimeProduct from "@/components/LimitedTimeProduct.vue"
import ProductSlider from "@/components/ProductSlider.vue"
import BundlesProduct from "@/components/BundlesProduct.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ShopCollection',
    components: {
        LimitedTimeProduct,
        ProductSlider,
        BundlesProduct,
        ReviewSection,
        FooterSection,
    }
};
</script>
