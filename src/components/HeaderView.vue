<template>
<div class="select_header">
    <div class="top_hea">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="anouce_bar">
                        <RouterLink to=''>🐰 EASTER SALE: BUY 3 GET 3 FREE </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="main">
        <div class="container-fluid">
            <div class="row align-items-center">

                <div class="col-md-4">
                    <nav class="navbar navbar-expand-lg ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <RouterLink class="nav-link active" to="/ShopCollection" @click="closeNavbar">Shop</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/wholeSale" @click="closeNavbar">Wholesale</RouterLink>
                                </li>

                                <!-- <li class="nav-item">
                                        <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Track Order</RouterLink>
                                    </li> -->
                            </ul>
                            <div class="cart-ad list_item menue_drawer d-none">
                                <ul>
                                  
                                    <li class="nav-item"><RouterLink to="/LoginPage" class=""><svg class="svg-inline--fa fa-user" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                            </svg>Log in<!-- <i class="fa-solid fa-user"></i> Font Awesome fontawesome.com --></RouterLink></li>
                                            <li class="nav-item dropdown"><a href="/" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="/img/us.b0d1ca46.svg" alt=""><svg class="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                            </svg><!-- <i class="fas fa-chevron-down"></i> Font Awesome fontawesome.com --><svg class="svg-inline--fa fa-chevron-up d-none" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                <path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                                            </svg><!-- <i class="fa-solid fa-chevron-up d-none"></i> Font Awesome fontawesome.com --></a>
                                        <ul class="dropdown-menu">
                                            <li><a aria-current="page" href="/ShopCollection" class="router-link-active active dropdown-item"><img src="/img/ca.ba21f921.svg" alt=""> CAD $ | Canada </a></li>
                                            <li><a aria-current="page" href="/ShopCollection" class="router-link-active active dropdown-item"><img src="/img/us.b0d1ca46.svg" alt=""> USD $ | United States </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
                <div class="col-md-4">
                    <div class="logo">
                        <RouterLink to="/"> <img src="../assets/images/logo-light.svg" alt=""></RouterLink>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="cart-ad list_item">
                        <ul>
                            <li class="nav-item dropdown for_mobile_none">
                                <RouterLink class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../assets/images/us.svg" alt="">
                                    <i class="fas fa-chevron-down"></i>
                                    <i class="fa-solid fa-chevron-up d-none"></i>
                                </RouterLink>
                                <ul class="dropdown-menu" ref="navbarDropdown">
                                    <li>
                                        <RouterLink class="dropdown-item" to="" @click="closeNavbar"><img src="../assets/images/ca.svg" alt=""> CAD $ | Canada </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="" @click="closeNavbar"><img src="../assets/images/us.svg" alt=""> USD $ | United States </RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-default navbar-btn" @click="openModal">
                                    <i class="fa-solid fa-magnifying-glass"></i>

                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <form class="navbar-form" role="search">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Search">
                                                        <button class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                    <!-- <button type=".submit" class="btn btn-default">Submit</button> -->
                                                </form>
                                                <div class="close_modal_btn">
                                                    <button type="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li class="nav-item for_mobile_none">
                                <RouterLink to="/LoginPage"><i class="fa-solid fa-user"></i></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="" @click="toggleCart();" id="offCanvas"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

</div>
<router-view></router-view>
</template>

<script>
import {
    RouterLink
} from 'vue-router';

export default {
    name: 'HeaderView',
    props: {
        msg: String
    },
    components: {
        RouterLink
    },
    data() {
        return {
            isNavbarOpen: false,
        };
    },
    methods: {
        openModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        closeModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbar() {
            this.isNavbarOpen = false;
            this.$nextTick(() => {
                this.$refs.navbarDropdown.classList.remove('show');
            });
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvas34');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>
