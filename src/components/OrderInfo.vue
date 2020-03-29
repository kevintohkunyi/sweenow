<template>
    <div class = "main">
        <h1>Promotions</h1>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
    </div>
</template>

<script>
import FoodItem from '@/components/FoodItem.vue'

export default {
  name: 'OrderInfo',
  components: {
    FoodItem
  }
}
</script>

<style scoped lang="scss">

.main {
    text-align: left;
    display: block;
    overflow: hidden;
    max-width: 850px;
    margin: auto;
    padding: 30px;
}

@media screen and (max-width: 1024px) {
    .main {
      padding-right: 20px;
      padding-left: 20px;
    }
    h1 {
      font-size: 1.2rem;
    }
}

</style>