<template>
    <div>
        <p>I'M CHILDREN</p>
        <button class="give" @click="giveChips" >과자줘!!!</button>
    </div>
</template>

<script>
export default {
    methods: {
        giveChips : function(){
            this.$emit("takeSnak");
        }
    }
    
}
</script>