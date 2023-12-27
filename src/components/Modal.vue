<template>
<div>
<Table ref="table":tasks="tasks" @editTask="changeTaskData" @deleteThat="deleteTaskFromParent"/>
</div>
<header >

</header>

  <div>
  

    <!-- The modal -->
    <div class="modal" ref="myModal" id="exampleModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title"><i class="fa-solid fa-circle-plus"></i> Add task </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>

        <div>
    <div class="form-floating mb-3">
      <input
        :class="{ 'is-invalid': !isValidTitle }"
        v-model="title"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Title"
      />
      <div v-if="!isValidTitle && !showRepeatPrompt" class="invalid-feedback">
        Title is required
      </div>
      <div v-if="showRepeatPrompt" class="invalid-feedback ">
       Title has to be unique
      </div>
      <label for="floatingInput">Title</label>
    </div>
  </div>

    <div>
    <div class="form-floating mb-3">
      <input
        :class="{ 'is-invalid': !isValidDescription }"
        v-model="description"
        type="text"
        class="form-control"
        id="description"
        placeholder="Description"
      />
      <div v-if="!isValidDescription" class="invalid-feedback">
        Description is required
      </div>
      <label for="description">Description</label>
    </div>
  </div>
       <div class="form-floating mb-3">
          <input type="date" class="form-control" id="deadline" v-model="deadline" placeholder="Deadline"  value="01-06-2017" required>
          <label for="floatingInput" >Deadline</label>
        </div>

        <div>
         <label for="radios"> Priority </label> 
         </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input"  v-model="priority" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="low" checked>
          <label class="form-check-label" for="inlineRadio1">low</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="priority"  name="inlineRadioOptions" id="inlineRadio2" value="med">
          <label class="form-check-label" for="inlineRadio2">med</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="priority"  name="inlineRadioOptions" id="inlineRadio3" value="high" >
          <label class="form-check-label" for="inlineRadio3">High</label>
        </div>

            </form>
      </div>
      <div class="modal-footer">
        <button  @click="submit" type="button" class="btn btn-primary" v-bind:data-bs-dismiss="shouldDismiss ? 'modal' : null" ><i class="fa-solid fa-circle-plus" ></i> ADD </button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  ><i class="fa-solid fa-ban"></i> Cancel</button>
        
      </div>
    </div>
  </div>
</div>

  <div class="modal" ref="myModal" id="exampleModal2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title"><i class="fa-solid fa-pen-to-square"></i> Edit task </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-floating mb-3">
      <input: 
        v-model="title"
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="Title"
        disabled hidden
        />
        

    <div>
    <div class="form-floating mb-3">
      <input
        :class="{ 'is-invalid': !isValidDescription }"
       v-model="description"
      
        type="text"
        class="form-control"
        id="description"
        placeholder="test"
      />
       <div v-if="!isValidDescription" class="invalid-feedback">
        Description is required
      </div>
      
      <label for="description">description</label>
    </div>
  </div>
       <div class="form-floating mb-3">
          <input type="date" class="form-control" id="deadline" v-model="deadline" placeholder="Deadline"  value="01-06-2017" required>
          <label for="floatingInput" >Deadline </label>
        </div>

        <div>
         <label for="radios"> Priority </label> 
         </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input"  v-model="priority" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="low" checked>
          <label class="form-check-label" for="inlineRadio1">low</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="priority"  name="inlineRadioOptions" id="inlineRadio2" value="med">
          <label class="form-check-label" for="inlineRadio2">med</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="priority"  name="inlineRadioOptions" id="inlineRadio3" value="high" >
          <label class="form-check-label" for="inlineRadio3">High</label>
        </div>

            </form>
      </div>
      <div class="modal-footer">
        <button  @click="submit2" type="button" class="btn btn-primary" v-bind:data-bs-dismiss="shouldExit ? 'modal' : null" ><i class="fa-solid fa-pen-to-square"></i> Edit </button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  ><i class="fa-solid fa-ban"></i> Cancel</button>
        
      </div>
    </div>
  </div>
</div>
    
  </div>

  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
    <div id="AddToast" class="toast hide bg-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Task Added</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        The task has been Added successfully.
      </div>
    </div>
  </div>

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
    <div id="editToast" class="toast hide bg-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Task Updated</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        The task has been Updated successfully.
      </div>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Table from '../components/Table.vue'
import sharedDataService from '../components/sharedDataService.js'

export default {
  name: 'Modal',
  components:{
    Header,
    Table,
    sharedDataService,
  },
  
  

  data() {
    return {
      showRepeatPrompt:false,
      isValidDescription :false,
      isValidTitle: false,
      shouldDismiss: false,
      shouldExit:false,
      title: '',
      description: '', 
      deadline: '2023-11-20',
      priority: "low",
      tasks: [],
      task1:[],
      makeButton:false,
      currentTask:[],
    // selectedTask: {},

    selectedTask: {
    title: '',
    description: '',
    deadline: '',
    priority: '',
    // add other properties as needed
  },

     
    };
  },
 // props: ['selectedTask'],

  
  methods: {
    updateShouldDismiss() {
    this.shouldDismiss = this.isValidTitle && this.isValidDescription;
  },
    resetFormData() {
      this.showRepeatPrompt= false;
      this.isValidTitle = false;
      this.isValidDescription = false;
      this.shouldDismiss = false;
      this.title = '';
      this.description = '';
      this.deadline = '2023-11-20';
      this.priority = "low";
    },
    updateRepeatPrompt(bool) {
    this.showRepeatPrompt = !bool
  },
    submit() {
      if(!this.isValidTitle || ! this.isValidDescription) {
    return
 } 
 
    const tasks = {
    title: this.title,
    description: this.description,
    deadline: this.deadline,
    priority: this.priority
    };
    //this.showSuccessToast()
    //this.sendTitleRequest()
    this.tasks.push(tasks);
    this.$emit('tasks', tasks)


    

    this.resetFormData();
    this.showSuccessToast()
  


    },
    
    
    submit2() {
      if(!this.isValidDescription) {
    return
 } 
    this.$refs.table.deleteTask(this.currentTask);
    const tasks = {
    title: this.title,
    description: this.description,
    deadline: this.deadline,
    priority: this.priority
    };
    
    const task1 = tasks;
    //this.showSuccessToast()
    //this.sendTitleRequest()
    this.tasks.push(tasks);
    this.$emit('tasks', tasks)
    
    this.resetFormData();
    this.showEditToast()
  


    },
    showSuccessToast() {
     const toast = new bootstrap.Toast(document.getElementById('AddToast'));
      toast.show();
    },
    showEditToast() {
     const toast = new bootstrap.Toast(document.getElementById('editToast'));
      toast.show();
    },
     changeTaskData(task){
       this.currentTask =task
       this.title = sharedDataService.state.selectedTask.title;
      this.description = sharedDataService.state.selectedTask.description;
      this.deadline = sharedDataService.state.selectedTask.deadline;
      this.priority = sharedDataService.state.selectedTask.priority;
      
    }
    
  },
  watch: {
    title(newValue){
    this.isValidTitle = newValue.trim() !== '';
    

    const isTitleUnique = !this.tasks.some(
      (task) => task.title.toLowerCase() === this.title.toLowerCase()
    );
    this.isValidTitle = this.isValidTitle && isTitleUnique;
    this.updateShouldDismiss();
    this.updateRepeatPrompt(isTitleUnique);
   


  },
  description(newValue){
    this.isValidDescription = newValue.trim() !== '';
    this.shouldExit=this.isValidDescription;
    this.updateShouldDismiss();;
    
    
  },
    makeButton(newValue){
      this.updateShouldDismiss();
    },
  } 
}


</script>

<style>
.modal-header{
  background-color: #1771BF;
  color: white;
}

</style>
