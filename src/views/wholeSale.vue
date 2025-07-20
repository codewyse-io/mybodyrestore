<template>
    <section class="about_us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="about_head">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">Wholesale</a></li>
              </ul>
              <h2>Wholesale</h2>
              <div class="space"></div>
              <p>Thank you for your interest in becoming a partner with Body Restore. </p>
              <p>Please contact paul@mybodyrestore.com for wholesale details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  <FooterSection />
  
  </template>
  
  
  
  
  <script>
  
  import FooterSection from "@/components/FooterSection.vue"
  
  
  
    export default {
        name: 'AboutUs',
        components: {
          FooterSection,
        }
    };
    </script>
<style scoped>
.about_head .space {
    margin: 40px 0 0 0;
}

.about_head p {
    font-size: 20px;
    color: gray;
    margin: 0 0 40px 0;
}
</style>