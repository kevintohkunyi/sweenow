<template>
<div class = "background">
    <div class = "container">
        <div class = "title">Please provide these information to continue with checkout</div>
        <form class = "customerinfo">
            <input class = "required" type = "text" placeholder = "Full Name*" required>
            <input class = "required" type = "email" placeholder = "Email Address*" required>
            <input class = "required" type = "number" placeholder = "Phone Number*" required>
            <input class = "required" type = "text" placeholder = "Delivery Address*" required>
            <textarea rows = "3" placeholder = "Let us know if you have any special instructions"></textarea>
            <input onclick = "location.href= '/#/thank-you';" type = "submit" class = "submitbtn" value = "Submit Order (Cash on Delivery)">
        </form>
        <div class = "delivery" style = "color:#707070; font-size: 0.9rem;">Additional delivery fee applies. We will contact you shortly to confirm your order and delivery fee.</div>
    </div>
</div>
  
</template>

<script>

export default {
  name: 'Confirm-Order',
};
</script>

<style scoped lang = "scss">

.background {
    display: block;
    width: 100%;
    height: 100vh;
    background: url(../assets/restaurant-bg.jpg);
    background-size: cover;
    background-position: 50% 50%;
    overflow-y: scroll;
}
.container {
    background:white;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    float: left;    
    overflow: hidden;
    line-height: 1.3;
    min-height: calc(100vh - 60px);
    display: block;
    flex-direction: column;
    justify-content: center;
}

.title {
    font-family: Nunito;
    font-size: 1.2rem;
    max-width: 300px;
    margin: auto;
    color: #333;
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 70px;
}

input, textarea {
    display: block;
    width: calc(100% - 40px);
    margin-bottom: 15px;
    padding: 10px 20px;
    font-family: Nunito;
    font-size: 0.95rem;
    border: 1px solid #ebebeb;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    border-radius: 3px;
    resize: none;
}

.submitbtn {
    background: #D70F64;
    border: 1px solid #D70F64;
    border-radius: 3px;
    color: white;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    width: 100%;
    font-family: Nunito;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    font-size: 0.95rem;
    padding: 18px;
    display: block;
    margin-top: 20px;
    cursor: pointer;
}

.submitbtn:hover {
    background: #cf0e60;
}

@media screen and (max-width: 768px) {
    .container {
        max-width: none;
        width: calc(100% - 60px);
        padding: 30px;
    }
    .background {
        background: none;
    }
}

@media screen and (max-width: 500px) {
    .container {
        max-width: none;
        width: calc(100% - 40px);
        padding: 20px;
    }
    .background {
        background: none;
    }
    .submitbtn {
        font-size: 0.85rem;
    }
    input, textarea {
        font-size: 0.9rem;
    }
    .title {
        font-size: 1.1rem;
        margin-bottom: 25px;
        margin-top: 80px;
    }
    .delivery {
        font-size: 0.8rem !important;
    }
}



</style>