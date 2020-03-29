<template>
    <div class = "main">
        <div class = "coverimg" :style="{'background-image': 'url(' + require('../assets/subwaybg.jpg') + ')'}"></div>
        <div class = "details">
            <div>
                <h1>Subway Restaurant</h1>
                <div class = "address">121 Hồ Tùng Mậu, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam</div>
            </div>
        </div>
        <div class = "menu-options">
            <div>
                <span>Special Promotions</span>
                <span>Mains</span>
                <span>Sides</span>
                <span>Appetizers</span>
                <span>Desserts</span>
                <span>Beverages</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MerchantInfo',
}
</script>

<style scoped lang = "scss">
.main {
    margin-top: 58px;
    background:white;
    display: block;
    position: sticky;
    top: -304px;
    z-index: 10;
}

.coverimg {
    display: block;
    background-size: cover !important;
    background-position: 50% 50% !important;
    width: 100%;
    height: 250px;
}

.address {
    color: #707070;
    font-family: Nunito;
    padding-top: 5px;
    font-size: 1rem;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    float: left;
}

.details {
    text-align: left;
    border-bottom: 1px solid #ebebeb;
    padding: 25px 30px;
    background: white;
    overflow: hidden;
  
}

.details div {
    max-width: 850px;
    margin: auto;
}

.menu-options {
    text-align: left;
    padding: 28px 30px;
    border-bottom: 1px solid #ebebeb;
    position: sticky;
    background: white;
    z-index: 11;
    max-width: 850px;
    margin: auto;
    overflow-x: auto ;
    overflow-y: hidden;
}


.menu-options div {
    max-width: 850px;
    margin: auto;
    width: 850px;
}

.menu-options div span {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-right: 40px;
    cursor: pointer;
    padding: 15px 0;
}

.menu-options span:hover {
    font-weight: 700;
    border-bottom: 1.5px solid #D70F64;
}

@media screen and (max-width: 768px) {
    .menu-options {
        width: calc(100% - 40px);
    }
    h1 {
        font-size: 1.2rem;
    }
    .address {
        font-size: 0.9rem;
    }
    .details {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        padding-right: 20px;
        z-index: 11;
        position: relative;
    }
    .menu-options {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
        z-index: 10;

    }
    .menu-options span {
        padding: 10px 0 !important;
        font-size: 0.75rem !important;
        margin-right: 22px !important;
    }
    .main {
        margin-top: 48px;
        top: -182px;
    }
    .coverimg {
        height: 150px;
    }
}

</style>