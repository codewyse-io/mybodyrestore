<template>

<!-- <button type="button" @click="toggleCart();"  >hello</button> -->

    <div class="off-canvas position-right" id="offCanvas34" >
      <div class="cart">
        <button class="close-button" aria-label="Close menu" type="button" @click="closeCart">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="cart__content">
          <h3 class="cart__title text-center">
            Your Cart
          </h3>
          <div class="cartbar_box">

          </div>
          <hr>
          <div v-if="cartItems.length === 0" class="cart__empty">
            Your cart is empty.
          </div>
          <ul v-if="cartItems.length > 0" class="cart__list no-bullet">
            <li v-for="(item, index) in cartItems" :key="index" class="cart__item clearfix">
              <div class="cart__item-top">
                <div class="cart__img-wrap">
                  <img :src="item.image" alt="" class="cart__item-img">
                </div>
                <a :href="item.link" class="cart__item-title">{{ item.title }}</a>
              </div>
              <div class="cart__item-bottom">
                <div class="cart__item-price"><span class="currency">{{ currency }}</span> {{ item.price }}</div>
                <div class="total_price">
                  <span class="cart__total-title">Total</span><span class="cart__total-price"><span class="currency">{{ currency }}</span> {{ totalPrice }}</span>
                </div>
                <div class="cart__item-qty">
                  <div class="b-qty">
                    <button class="b-qty__btn btn" @click="decrementItem(index)"><i class="fas fa-minus"></i></button>
                    <input type="text" class="b-qty__field text-center" v-model="item.quantity">
                    <button class="b-qty__btn btn" @click="incrementItem(index)"><i class="fas fa-plus"></i></button>
                  </div>
                </div>
                <!-- <div class="cart__item-price text-right"><span class="currency">{{ currency }}</span> {{ item.total }}</div> -->
              </div>
            </li>
          </ul>
          <div class="sugestion_box">
            <ul>
              <li>
                <div class="sug_img">
                  <img :src="require('../assets/images/sug_img.webp')" alt="">
                </div>
                <div class="sug_content">
                  <h4>GIFT BOX</h4>
                  <p><strong>$69.99</strong></p>
                  
                  <form action="">
                    <select  class="select__select" name="options[Size]" form="quick-add-cart-drawer6644845510752"><option value="1 Pack" selected="selected">
                                1 Pack
                              </option><option value="3 Pack">
                                3 Pack
                              </option></select>

                              <input type="submit" value="Add To Cart">
                  </form>

                </div>
              </li>
            </ul>
          </div>
          <div class="cart__total flex-container align-justify">
          </div>
          <button @click="checkout" class="button success expanded">Go to Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { 
            title: 'BUY 3 GET 3 FREE BUNDLE',
            image: require('../assets/images/Relief_6pack.jpg'),
            link: '#',
            price:  99.99,
            quantity: 1
          }
        ],
        currency: '$'
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    methods: {
      incrementItem(index) {
        this.cartItems[index].quantity++;
      },
      decrementItem(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity--;
        }
      },
      closeCart() {
  // Close the cart logic
 // Toggle the cart open/close
 const offCanvasElement = document.getElementById('offCanvas34');
  console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
  if (offCanvasElement) {
    offCanvasElement.classList.toggle('is-open');
  }},

checkout() {
  // Proceed to checkout logic
  console.log('Proceeding to checkout');
},

addToCart(item) {
  // Add item to cart logic
  this.cartItems.push(item);
},

toggleCart() {
  // Toggle the cart open/close
  const offCanvasElement = document.getElementById('offCanvas34');
  console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
  if (offCanvasElement) {
    offCanvasElement.classList.toggle('is-open');
  } 
},
    }
  };
  </script>
  
  <style scoped>
.off-canvas {
  width: 320px;
  height: 100%; /* Ensure the off-canvas menu fills the entire height */
  background-color: #fff;
  position: fixed; /* Ensure it stays fixed when scrolling */
  top: 0;
  right: 0;
  z-index: 1000; /* Ensure it appears above other content */
  transform: translateX(100%); /* Initially off-screen */
  transition: transform 0.3s ease; /* Add a transition effect for smooth animation */
}

.off-canvas.is-open {
  transform: translateX(0); /* Slide in when 'is-open' class is applied */
}

.cart {
  padding: 20px;
}

.cart__content {
  max-height: 400px; /* Adjust the max height as needed */
  overflow-y: auto; /* Enable vertical scrolling */
}

.cart__title {
  margin-bottom: 20px;
}

.cart__empty {
  text-align: center;
  margin-top: 20px;
}

.cart__list {
  margin: 0;
  padding: 0;
}

.cart__item {
  list-style: none;
  padding: 10px 0;
  
}

.cart__item-top {
  display: flex;
  align-items: center;
}

.cart__img-wrap {
  flex: 0 0 50px; /* Fixed width for image */
  margin-right: 10px;
}

.cart__item-img {
  width: 100%;
  height: auto;
}

.cart__item-title {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.cart__item-price {
  flex: 1; /* Take remaining space */
  text-align: left;
    padding: 0px 0 0px 60px;
    margin: -14px 0 10px 0;
}

.cart__item-qty {
  flex: 0 0 auto; /* Fixed width for quantity */
}

.b-qty {
  display: flex;
  align-items: center;
}

.b-qty__btn {
  padding: 5px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.b-qty__field {
  width: 40px;
  text-align: center;
}

.cart__total {
  margin-top: 20px;
}

.cart__total-title {
  font-weight: bold;
}

.cart__total-price {
  font-weight: bold;
  text-align: right;
  display: block;
}

.button {
  margin-top: 20px;
}

.success {
  background-color: #4caf50;
  color: #fff;
}

.expanded {
  width: 100%;
}
.sugestion_box ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
}

.sugestion_box ul li {
    display: flex;
    padding: 0;
    background: #e2eced;
    padding: 10px 0px 10px 0;
    border-radius: 10px;
}

.sugestion_box ul li .sug_img img {
    width: 90%;
}

.sugestion_box ul li .sug_img {
    flex: 0 0 40%;
}

.sugestion_box ul li .sug_content {
    flex: 0 0 50%;
}

.sugestion_box ul li .sug_content h4 {
    text-align: start;
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 1px 0;
}

.sugestion_box ul li .sug_content p strong {
    text-align: start;
    margin: 0 0 0 -70px;
}

.sugestion_box ul li .sug_content form select.select__select {
    height: 2rem;
    width: 100%;
    border-radius: 10px;
    margin: 0 0 10px 0;
    padding: 0 0 0 10px;
    font-size: 15px;
}

.sugestion_box ul li .sug_content form input[type="submit"] {
  width: 100%;
    background: white;
    border-radius: 10px;
    border: none;
    padding: 10px 0 10px 0;
    font-size: 18px;
}
button.close-button {
    position: absolute;
    left: unset;
    right: 14px;
    border: none;
    background: transparent;
    font-size: 41px;
    top: 0;
}

h3.cart__title.text-center {
    text-align: start !important;
    font-size: 29px;
    font-weight: 600;
}

div#offCanvas34 {
    background: #f8f9fa !important;
    width: 25rem;
}
.cartbar_box {
    background: #dbefee;
    border-radius: 16px;
    padding: 20px 15px;
    margin-bottom: 20px;
}

.cart__content {
    height: auto !important;
    max-height: 100vh !important;
}


.cart__item-qty {
    display: flex;
}

.b-qty {
    display: flex;
    position: relative;
    border-radius: 10px;
    height: 30px;
    color: black;
    position: relative;
    width: 115px;
    display: flex;
    border-radius: 10px;
    min-height: 38px;
    border: 1px solid black;
    padding: 5px 10px 5px 10px;
}

button.b-qty__btn.btn {
    flex-shrink: 0;
    font-size: 16px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(var(--color-foreground));
    padding: 0;
}

input.b-qty__field.text-center {
    color: currentColor;
    font-size: 20px;
    font-weight: 500;
    opacity: .85;
    background-color: transparent;
    border: 0;
    padding: 0 .5rem;
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    appearance: none;
}
button.button.success.expanded {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 10px 0 10px 0;
    cursor: pointer;
    font: inherit;
    font-size: 20px;
    text-decoration: none;
    color: white;
    background: #0c2331;
    border-radius: 20px;
    margin: 10px 0 20px 0;
}


  </style>
  
