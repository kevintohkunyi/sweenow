<template>
    <div class = "container">
        <div onclick="openItemFunction();" class = "card">
            <div class = "card-content">
                <h4>Spicy Italian Sub</h4>
                <p>Spice up your life with a match between beef pepperoni and slices pepperoni and slices pepperoni and slices.  </p>
                <div class = "price">200.000d</div>
            </div>
            <div class = "card-image" :style="{'background-image': 'url(' + require('../assets/subwaybg.jpg') + ')'}">
                <button class = "add-cart-btn">+</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'FoodItem',

}
</script>

<style scoped lang="scss">

.card-content p {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    display: -webkit-box;
    overflow: hidden;
}

.card-content {
    width: 70%;
    float: left;
    
}

.card-image {
    width: 23%;
    padding-top: 23%;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 3px;
    position: absolute;
    right: 24px;
}

.card {
    text-align: left;
    display: flex;
    overflow: hidden;
    border: 1px solid #ebebeb;
    width: calc(48% - 64px);
    margin-top: 16px;
    margin-right: 16px;
    padding: 24px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    position: relative;
    align-items: center;
    float: left;
    cursor: pointer;
}

p {
    color: #707070;
    font-size: 0.9rem;
    padding-top: 5px;
}

.price {
    color: #333;
    font-size: 1.1em;
    font-weight: 600;
    margin-top: 5px;
}

.add-cart-btn {
    background: #D70F64;
    height: 25px;
    width: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
    box-shadow: none;
    border: 0;
    color: white;
    font-size: 25px;
    font-weight: 400;
    line-height: 25px;
}



@media screen and (max-width: 500px) {
    .card-image {
        right: 0;
        width: 30% !important;
        padding-top: 30% !important;
    }
    .card-content {
        width: 66% !important;
    }
    h4 {
        font-size: 1rem !important; 
    }
    p {
        font-size: 0.8rem !important;
    }
    .price {
        font-size: 0.95rem !important;
    }
}
@media screen and (max-width: 768px) {
    .card {
        width: 100%;
        padding: 0;
        box-shadow: none;
        border: 0;
        border-bottom: 1px solid #ebebeb;     
        padding-bottom: 20px;
        padding-top: 5px;
        margin-right: 0;
        min-height: 100px;
        overflow: visible;
           
    }
    
    h4 {
        font-size: 1.1rem;
    }
    p {
        font-size: 1rem;
    }
    .card-image {
        right: 0;
        width: 18%;
        padding-top: 18%;
    }
    .card-content {
        width: 75%;
    }
    .price {
        font-size: 1.05rem;
    }
}
</style>