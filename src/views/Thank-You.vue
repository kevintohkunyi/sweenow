<template>
<div class = "background">
    <div class = "container">
        <div class = "title">We have received your order</div>
        
        <div class = "delivery" style = "color:#707070; font-size: 1.1rem;">Our staff will contact you shortly to confirm your order and delivery fee.</div>

        <router-link to= "/">
            <button class = "button-done">Back to Menu</button>
        </router-link>
        <a href = "https://www.facebook.com">
            <button class = "button-fb">Visit us on Facebook</button>
        </a>
    </div>
</div>
  
</template>

<script>

export default {
  name: 'Thank-You',
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
    font-size: 1.3rem;
    max-width: 300px;
    margin: auto;
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 130px;
}

.button-done {
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
    margin-top: 30px;
    border-radius: 3px;
}

.button-fb {
    background: #4267B2;
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
    margin-top: 7px;
    border-radius: 3px;
}

.button-fb:hover {
    background: #29487d;
}

.button-done:hover {
    background: #cf0e60;
}

@media screen and (max-width: 768px) {
    .container {
        max-width: none;
        width: calc(100% - 60px);
    }
    .background {
        background: none;
    }
}

@media screen and (max-width: 500px) {
    .button-done, .button-fb {
        font-size: 0.85rem;
    }
    .container {
        width: calc(100% - 40px);
        padding: 20px;
    }
    .title {
        font-size: 1.2rem;
    }
    .delivery {
        font-size: 0.95rem !important;
    }
}



</style>