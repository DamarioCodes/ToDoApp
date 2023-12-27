<template>
<div>
<Modal : selectedTask="selectedTask" @deleteThat="deleteTaskFromParent" @editTask="changeTaskData"  />
</div>



  <section class="intro">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
  <table class="table table-hover custom-table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Description</th>
      <th scope="col">Deadline</th>
      <th scope="col">Priority</th>
      <th scope="col">Is Complete</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
     <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{task.title}}</td>
        <td>{{task.description}}</td> 
        <td>{{task.deadline}}</td>
        <td>{{task.priority}}</td>
        <td><div class="form-check">
  <input  v-model="task.isComplete" class="form-check-input" type="checkbox"  id="flexCheckDefault">
   

    </td>
      <td>
      
 <div v-if="!task.isComplete">
    <button @click="updateSelectedTask(task)" @click="editTask(task)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" type="button btn" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .30rem;"><i class="fa-solid fa-pen-to-square"></i>Update</button>
  </div>
  <div>
    <button   @click="deleteTask(task)" @click="showDeleteToast" class="btn btn-danger" type="button" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .50rem;">
<i class="fa-solid fa-ban"></i>Delete</button>
  </div>

      </button>
      
      </td>
      </tr>
    </tbody>

 </table>
  </div>
  </div>
  </div>
  </div>
  </div>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
    <div id="deleteToast" class="toast hide bg-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Task Deleted</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        The task has been deleted successfully.
      </div>
    </div>
  </div>

</template>



<script>
import Modal from '../components/Modal.vue';
import sharedDataService from '../components/sharedDataService.js'


export default {
  name: 'Table',
  components:{
    Modal,
    sharedDataService,
  },

  props: {
    tasks: {
      type: Array,
      required: true
    },
    task1:{
      type: Array,
      required:true
    }
  },
  data() {
  return {
    titles: [],
    selectedTask: null
  }
},

methods: {

   

  deleteTask(task) {
      // Implement your task deletion logic here
      
      const index = this.tasks.findIndex(t => t === task);

  // Use Array.prototype.filter to filter out task object
      this.tasks.splice(index, 1)
      
      
    },
    showDeleteToast() {
      const toast = new bootstrap.Toast(document.getElementById('deleteToast'));
      toast.show();
    },
    editTask(task) {
    // Emit an event to notify the parent component to open the modal
    this.$emit('editTask',task)
    // this.$refs.modal.openModal(this.selectedTask);

  },
   updateSelectedTask(task) {
      const newTask = {
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        priority: task.priority,
      };
      sharedDataService.setSelectedTask(newTask);
   },
  
  
  },


}
</script>


<style scoped>
/* Table styles */
</style>