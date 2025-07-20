<template>
    <section class="about_us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="about_head">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">Contact Us</a></li>
              </ul>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  
  <FooterSection />
  
  </template>
  
  
  
  
  <script>
  import FooterSection from "@/components/FooterSection.vue"
  import ContactForm from "@/components/ContactForm.vue"
  
  
  
    export default {
        name: 'ContactUs',
        components: {
            ContactForm,
          FooterSection,
        }
    };
    </script>

    <style scoped>
.about_head h2 {
    text-align: start;
}
</style>