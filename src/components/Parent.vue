<template>
    <div> 
        <p>{{msg}} </p>
        <Child @takeSnak="takeSnak2"></Child>
        <p >Chip : <span id="chips">{{chipsCount}}</span></p>
    </div>
</template>

<script>
import Child from "./Child"
export default {
    props : {
        msg : String 
    },
    components : {
        Child
    },
    methods : {
        takeSnak2 : function(){
            this.chipsCount--;
        }
    },
    data() {
        let chipsCount = 10;
        return {
            chipsCount : chipsCount
        }
    }
}
</script>
