<template>
<section class="make_different">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_tabs_">
                    <h2>What makes Body Restore different?</h2>
                    <p>Enjoy the ultimate at home spa experience as easy as 1, 2, 3</p>
                    <ul class="overlay-panel-actions-primary">
                        <li v-for="(tab, index) in tabs" :key="index" @click="currentTab = index">{{ tab }}</li>
                    </ul>

                    <div class="content-bd">
                        <div class="tab-content">
                            <div v-show="currentTab === 0">
                                <img :src="require('../assets/images/bodyrestore1.webp')" alt="">
                            </div>
                            <div v-show="currentTab === 1">
                                <img :src="require('../assets/images/bodyrestore2.webp')" alt="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
data() {
    return {
        currentTab: 0,
        tabs: ['Body Restore', 'Other']
    };
},
}
</script>


<style scoped>
section.make_different {
    padding: 60px 0;
    background: #f8f9fa;
}

.main_tabs_ h2 {
    font-size: 45px;
    font-weight: 700;
}

.main_tabs_ p {
    font-size: 22px;
    margin: 0 0 30px 0;
}

.main_tabs_ ul.overlay-panel-actions-primary {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid var(--tab-background-color);
    border-radius: 9px;
    justify-content: center;
    list-style: none;
    font-size: 22px;
}

.main_tabs_ ul.overlay-panel-actions-primary li {
    border: 2px solid blue;
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
    flex: 0 0 20%;
    margin: 0 0 0 10px;
    align-items: center;
    text-align: center;
}
</style>