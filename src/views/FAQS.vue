<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">FAQS</a></li>
            </ul>
            <!-- <h2>FAQ's</h2> -->
          </div>
        </div>
      </div>
    </div>
  </section>

<FaqsSection />

<FooterSection />

</template>




<script>

import FooterSection from "@/components/FooterSection.vue"
import FaqsSection from "@/components/FaqsSection.vue"


  export default {
      name: 'AboutUs',
      components: {
        FooterSection,
        FaqsSection,
      }
  };
  </script>