// sharedDataService.js

import { reactive } from 'vue';

const state = reactive({
  selectedTask: {
    title: '',
    description: '',
    deadline: '',
    priority: '',
    // other properties...
  },
});

export default {
  state,

  setSelectedTask(task) {
    
    state.selectedTask = task;
 
  },
};