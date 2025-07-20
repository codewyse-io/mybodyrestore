<template>
<section class="experience_client">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_experienced_client">
                    <h2>Relaxation that you <span> MUST</span> experience at least <span> ONCE</span> in your life.</h2>
                    <p>Join the community of home spa owners who have stepped into an elevated shower experience.</p>
                    <ul class="mt-5 slider" ref="slider">
                        <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted   >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            <li v-for="(video, index) in videos" :key="index">
                            <video class="main_vido" loop :autoplay="autoplay[index]" muted  >
                                <source :src="require('../assets/images/experienced_1.mp4')" type="video/mp4">
                            </video> </li>
                            
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

export default {
  data() {
    return {
      autoplay: [], // Array to store autoplay values for each video
      videos: [1, 2, 3, 4, 5] // Sample data, replace with actual video data
    };
  },
  mounted() {
    const slider = jquery(this.$refs.slider);

    // Initialize Slick Slider
    slider.slick({
      centerMode: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    // Listen for the afterChange event of Slick Slider
    slider.on('afterChange', (event, slick, currentSlide) => {
      // Reset autoplay values for all videos
      this.autoplay = Array(this.videos.length).fill(false);

      // Set autoplay value for the centered video
      this.autoplay[currentSlide] = true;
    });
  }
};
</script>

<style scoped>

.slick-slide.slick-current.slick-center div li video.main_vido {position: relative;top: -60px;}




</style>