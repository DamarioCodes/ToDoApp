
<Table   />
<template>
  <div class="card card1" >
  <div class="card-body">
     <Header   />
      
  </div>
  </div>
  
  <Modal    >
  </Modal>

</section>
</template>


<script>

import Header from './components/Header.vue';
import Table from'./components/Table.vue';
import Modal from './components/Modal.vue';

import { ref } from "vue";
export default {
  name: 'App',
  components: {
    
    Header,
    Table,
    Modal,
    
  },

data() {
  return {
    tasks: []
  }
},

methods: {
  onAddTask(task) {
    this.tasks.push(task) 
  this.$emit('add-task', task)
},
  

    }
}



</script>

<style>
.card1{
  background-color: #1771BF; /* Set the background color to blue for the whole card */
   /* Set text color to white for better visibility */
  height:65px;
  display: flex; /* Enable Flexbox layout */
  flex-direction: column; /* Arrange children vertically */
}
.custom-table th {
  font-weight: normal; 
}




</style>
