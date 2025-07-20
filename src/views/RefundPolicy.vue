<template>
<section class="about_us">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="about_head">
                    <ul class="termss">
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">Refund policy </a></li>
                    </ul>
                    <h2>Refund policy</h2>
                    <div class="rte">

                        <div class="p1">
                            <h2>HAPPINESS GUARANTEE</h2>
                            <p>We proudly offer a<span>&nbsp;</span><strong>30-day money-back guarantee</strong><span>&nbsp;</span>if you are not fully satisfied with your product for any reason.&nbsp;</p>
                            <p>If 30 days have gone by since your purchase, unfortunately we cannot offer you a refund or exchange.&nbsp; But please contact us and we will try to make it right.</p>
                            <p>Non-refundable items:</p>
                            <ul>
                                <li>Gift cards</li>
                            </ul>
                            <p>There are certain situations where only partial refunds are granted (if applicable/approved)</p>
                            <ul>
                                <li>Any item that is returned<span>&nbsp;</span><strong>more than 30 days after</strong><span>&nbsp;</span>delivery.</li>
                            </ul>
                            <p>To complete your return, we require a receipt or proof of purchase/order confirmation.</p>
                            <p>Please do not send your products back without contacting us first.</p>
                            <ul></ul>
                            <p>PROCESS START</p>
                            <p>Please contact help@MyBodyRestore.com to initiate your refund and/or return.&nbsp;</p>
                            <p>FREE RETURNS</p>
                            <p>We&nbsp;will provide instructions on how to return the unused product(s).&nbsp; We will send you a postage-paid shipping label, however you may have to reuse the mailer or pack the product into a box that you provide.</p>
                            <p>REFUND PROCESS</p>
                            <p>Your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 3-5 business days.</p>
                            <p>If you haven’t received a refund after 5 business days (from shipping back your product), please contact us at help@MyBodyRestore.com</p>
                        </div>
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
    name: 'TermsOfService',
    components: {
        FooterSection,
    }
};
</script>
<style scoped>
.about_head ul.termss{
    display: flex !important;
    list-style: none !important;
    position: absolute !important;
    top: 180px !important;
    left: 60px !important;
}
.about_head ul {
    position: unset;
    padding: 0;
}
</style>