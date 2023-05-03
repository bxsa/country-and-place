<template>
    <div>
        <h1>父组件</h1>
      <HolidayList></HolidayList>
    </div>
</template>
<script>
   import  HolidayList from '../HolidayList/index.vue';
   export default{
    name:'all',
    data(){
    return {

    }
    },
    components:{
        HolidayList,
    }
   }

</script>