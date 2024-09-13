<template>
    <main>
        <div class="page-wrapper">
            <div v-if="message">
                <h2 class="message">{{ message }}</h2>
            </div>
            <ul v-else class="list">
                <li v-for="name in filteredNames" :key="name">
                    <p>{{ name }}</p>
                </li>
            </ul>
        </div>
    </main>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
    export default defineComponent({
        data() { 
            return {
                names: ["Edward","zenda", "Emili", "Desk", "Anto", "Anna", "Anna", "Berna"],
                filteredNames: [] as string[],
                message: "",
            };
        },
        created() {
             this.names.forEach(name => {
                if(name.length >= 255){
                    this.message="Sorry Cannot complete Process"
                    return
                }
                if(!this.filteredNames.includes(name)) {
                    if(name.includes("a") || name.includes("A")){
                        this.filteredNames.push(name)
                    }  
                    this.filteredNames.sort();
                }
            })
        },
    })
</script>
<style scoped>
main{
    display: flex;
    justify-content: center;
    width: 100%;
}
.message{
    text-align: center;
    color: #a20505;
    font-weight: 500;
    font-size: 1.5rem;
}
ul{
    list-style: disc;
}
</style>