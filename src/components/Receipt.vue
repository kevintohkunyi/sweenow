<template>
    <div class = "container">
        <button onclick="closeFunction();" class = "close"><img src = "../assets/menu.png"></button>
        <div class = "receipt-title">Your order from<br> Subway Vietnam</div>
        <table class = "orders">
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub AAKSJFHAKJSFHA</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
            <tr>
                <td class = "td1">
                    <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
                </td>
                <td class = "td2"><span>Spicy Italian Sub</span></td>
                <td class = "td3">200.000d</td>
            </tr>
        </table>
        <div class = "seperator"></div>
        <table class = "subtotal">
            <tr>
                <td class = "td2-left">Subtotal</td>
                <td class = "td2-right">400.000d</td>
            </tr>
            <tr style = "color: #707070">
                <td class = "td2-left">VAT (10%)</td>
                <td class = "td2-right">40.000d</td>
            </tr>
            
        </table>
        <div class = "seperator"></div>
        <table class = "total" style = "margin-bottom: 30px;">
            <tr style = "font-weight:700">
                <td class = "td2-left">Total</td>
                <td class = "td2-right">480.000d</td>
            </tr>
        </table>
        <div class = "checkout">
            <router-link to= "/confirm-order">
                <button class = "checkoutbtn">Checkout</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FoodItem',

}
</script>

<style scoped lang="scss">

.container {
    position: relative;
    height: 80%;
    overflow-y: scroll;
}


.container::-webkit-scrollbar {
    display: none;
}

.receipt-title {
    font-weight: 700;
    font-size: 1.2rem;
    color:#333;
    margin-bottom: 15px;
    margin-top: 35px;
    padding: 0 20px;
}


table {
    width: 100%;
    font-size: 0.95rem;
    padding: 0 20px 0 17px;
}

td { padding-top: 5px; padding-bottom: 5px; vertical-align: middle; }

.td1 { width: 20%; text-align: left; position:relative; top:-2px;}

.td2 { 
    width: 50%; 
    text-align: left; 
    padding-left: 5px;    
}

.td2 span {
    max-width: 150px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.td3 { width: 30%; text-align: right;}

.plus, .minus {
    background: none;
    border: 0;
    color: #D70F64;
    font-family: Nunito;
    font-weight: 400;
    font-size: 1.3rem;
    padding: 3px;
    cursor: pointer;
}

.unit {
    display: inline-block;
    width: 20px;
    text-align: center;
    font-weight: 600;
    
}

.seperator {
    height: 1px;
    background: #ebebeb;
    display: block;
    margin: 15px 0;
    overflow: hidden;
}

.td2-left {
    text-align: left;
}

.td2-right {
    text-align: right;
}
.deliverybtn {
    float: right;
    background: #D70F64;
    border: 0;
    color: white;
    padding: 10px 15px;
    font-weight: 700;
    border-radius: 3px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    font-size: 0.9rem;
    cursor: pointer;
    font-family: Nunito;
}
.checkoutbtn {
    background: #D70F64;
    border: 0;
    float: left;
    text-transform: uppercase;
    font-family: Nunito;
    font-weight:700;
    font-size: 0.95rem;
    line-height: 1;
    padding: 18px;
    width: 100%;
    cursor: pointer;
    color: white;
    border-radius: 3px;
}

.checkoutbtn:hover {
    background:#cf0e60;
}
.checkout {
    position: fixed;
    bottom: 0;
    width: 310px;
    padding: 10px 20px;
    border-top: 1px solid #ebebeb;
    overflow: hidden;
    display: block;
    background: white;
}
.close {display: none;}

@media screen and (max-width:1024px) {
    .checkout {
        width: calc(100% - 40px);
    }
    .close {
        width: 36px;
        padding: 0;
        background: white;
        border: 3px solid white;
        position: fixed;
        right: 5px;
        top: 55px;
        border-radius: 1000px;
        display: block;
        cursor: pointer;
    }
    .close img {
        width: 100%;
    }
    .td2 span {
        max-width: 500px;
    }
}

@media screen and (max-width: 500px) {
    .plus, .minus {
        font-size: 1.1rem;
    }
    .unit {
        width: 15px;
    }
    .td2 {
        font-size: 0.9rem; 
    }
    .td3 {
        font-size: 0.9rem;
    }
    .subtotal, .total {
        font-size: 0.9rem;
    }
    .total {
        margin-bottom: 20px !important;
    }
    .receipt-title {
        font-size: 1.1rem;
    }
    .td2 span {
        max-width: 150px;
    }
}



</style>