<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">Create account</a></li>
            </ul>
            <h2>Create account</h2>
            <div class="main_form">
              <form action="">
                <input type="text" placeholder="First Name" required>
                <input type="text" placeholder="Last Name" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="password" required>
                <input type="submit" value="Create">
              </form>
            </div>
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