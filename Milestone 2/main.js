console.log("Ok Vue Js :)");
/*MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista. */
const app = new Vue({
  el: "#todoListVue",
  data: {
    todos: [
      {
        text: "lorem Ippsum",
        done: false,
      },
      {
        text: "lorem Ippsum",
        done: true,
      },
      {
        text: "lorem Ippsum",
        done: false,
      },
      {
        text: "lorem Ippsum",
        done: true,
      },
    ],
    doneTasks: [],
    textValue: "",
  },
  methods: {
    addTask(index) {
      this.doneTasks.push(index);
      if (this.textValue) {
        this.todos.push({
          done: false,
        });
      }
      this.textValue = "";
    },
    addNewTask() {
      const newTask = this.newTask.trim();
      if (newTask.length > 0) {
        this.todos.push(newTask);
      }
    },
  },
});
