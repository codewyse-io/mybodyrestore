<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">Login</a></li>
            </ul>
            <h2>Login</h2>
            <div class="main_form">
              <form action="">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="password" required>
                <a href="#">Forgot your password?</a>
                <input type="submit" value="Submit">
                <RouterLink to="/CreateAccount">Create account</RouterLink>
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