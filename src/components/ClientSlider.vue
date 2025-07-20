<template>
    <div class="my-slider">
      <div ref="slider" class="slider">
        <div class="Main_slider">
            <p>"Customers rave about the heavenly & refreshing scent and how it transports them to a luxurious spa right from their own bathroom."</p>
        </div>
        <div class="Main_slider">
            <p>“These have saved me on so many trips where I’m so run down and tired.”</p>
           
        </div>
        <div class="Main_slider">
            <p>"A set of energy-restoring shower steamers for days when you wake up and you just can’t <em> even </em>. "</p>
            
        </div>
        <div class="Main_slider">
            <p>"Free from talc, SLS, and parabens, you can rest assured you’re inhaling only the best ingredients"</p>
            
        </div>
        <div class="Main_slider">
            <p>"Better than bath bombs: Amazon’s top-rated shower steamers offer instant stress relief."</p>
            
        </div>
        <div class="Main_slider">
            <p>"Reviewers say they last longer than many other tablets."</p>
            
        </div>
        

    </div>
    </div>
  </template>



<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';



export default {
  mounted() {
    // Initialize Slick Slider
    jquery(this.$refs.slider).slick({
      // Slick Slider options
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      // Add more options as needed
    });
  },
};
</script>



<style scoped>

.as_seen_main_head .my-slider {
    z-index: auto;
    background-color: #f0c151;
    border: 2px solid #000;
    border-radius: 6px;
    padding-top: 50px;
    padding-bottom: 2em;
    width: 100%;
    margin: 30px 0 0 0;
    height: 450px;
}

.Main_slider p {
  max-width: 100%;
    color: #181818;
    margin-bottom: 0;
    padding-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    width: 650px;
    margin: 20px auto 0;
}

.Main_slider span.divider {
    content: "-";
    width: 30px;
    height: 4px;
    color: #181818;
    background-color: #181818;
    display: block;
    margin: 30px auto 0;
}


.Main_slider img {
    width: 20%;
    margin: 30px auto 0px;
    filter: invert(1);
}
</style>