<template>
  <header>
   <!-- <Modal :modalActive="modalActive" > --> 
   
    <div class="title" style="color: white;"> <i class="fa-solid fa-bars"></i>  </i>  FRAMEWORKS</div>
    
    <button class="btn btn-primary shadow-sm"    data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="John Doe">
    
      <i class="fa-solid fa-circle-plus"></i> ADD
    </button>
  </header>

 



  

</template>


<script>
import Modal from '../components/Modal.vue'


import { ref } from "vue";
export default {
  name: 'Header',
  components:{
    Modal,
  },
   
data() {
  return {
    tasks: []
  }
},

methods: {
  addTask(task) {
    this.tasks.push(task)

  this.$emit('addtask', task)
  },

}
}



</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.button {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.button:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.title {
  text-align: center;
  flex-grow: 1;
}
</style>
