<template>
  <div>
      <ul v-for="list in lists" :key="list.id">
          <li>
              <h2>{{list.title}}</h2>
              <p>{{list.price}}</p>
          </li>
      </ul>
      <button @click="addCar">添加到购物车</button>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            lists:[
                {id:'1',title:'斗破苍穹',price:'127'},
                {id:'2',title:'武动乾坤',price:'54'},
                {id:'3',title:'大主宰',price:'127'}
            ]
        }
    },
    methods:{
        addCar(){
            
        }
    }
}
</script>

<style scoped>
    li{
        list-style-type: none;
    }
</style>