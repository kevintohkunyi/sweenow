<template>
<div class = "maincontainer">
    <PopUp />
    <div class="order-right" id = "order-right">
      <Receipt />
    </div>
    <div class="order-left">
      <MerchantInfo />
      <div class = "seperator"></div>
      <OrderInfo />
      <div class = "seperator"></div>
      <OrderInfo />
      <div class = "seperator"></div>
      <OrderInfo />
      <div class = "bottombar">
        <button onclick="popupFunction();" class = "bottom-btn">
          <table class = "table-checkout">
            <tr>
              <td class = "td-icon"><img src = "../assets/bag.png"></td>
              <td class = "td-checkout-price">480.000d</td>
            </tr>
          </table>
        </button>
      </div>
      
    </div>
  
</div>
  
</template>



<script>
import MerchantInfo from '@/components/MerchantInfo.vue'
import OrderInfo from '@/components/OrderInfo.vue'
import Receipt from '@/components/Receipt.vue'
import PopUp from '@/components/PopUp.vue'

export default {
  name: 'Make-Order',
  components: {
    MerchantInfo,
    OrderInfo,
    Receipt,
    PopUp
  },
};

</script>


<style scoped lang="scss">


.order-right {
    width: 350px;
    background: white;
    position: fixed;
    z-index: 200;
    right: 0;
    box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
    height: 100%;
    overflow: hidden;
}
.order-left {
    width: calc(100% - 350px);
    background: white;
    display: block;
    left: 0;
    padding-bottom: 50px;
}
.seperator {
  background: #f7f7f8;
  display: block;
  width: 100%;
  height: 16px;
}

.seperator:last-of-type {
  background: white;
}

.bottombar {
  height: 65px;
  width: 100%;
  background: white;
  display: block;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
  display: none;
}
.bottom-btn {
  width: 100%;
  height: 100%;
  background: #D70F64;
  box-shadow: none;
  border: 0;
  color: white;
  padding: 0 20px;
  cursor: pointer;
}
.bottom-btn:after {
  content:'CHECKOUT';
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  font-weight: 700;
}
.table-checkout {
  width: 100%;
  font-family: Nunito;
}
.td-icon {
  width: 30%;
  text-align: left;
}
.td-icon img {
  width: 30px;
  margin-top: 3px;
}

.td-checkout-price {
  text-align: right;
  font-size: 15px;
  width: 70%;
}
.td-checkout {
  text-align: center;
  text-transform: uppercase;
}


@media screen and (max-width: 1024px) {
    .order-right {
      width: 100%;
      display: none;
    }

    .order-left {
      width: 100%;
    }
    .bottombar {
      display: block;
    }
    
}

</style>
