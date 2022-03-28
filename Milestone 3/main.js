console.log("Ok Vue Js :)");
/*MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
 il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */
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
    textValue: "",
  },
  methods: {
    addTask() {
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
