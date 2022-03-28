console.log("Ok Vue Js :)");
/*MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
 il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */
console.log("Ok Vue Js :)");

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
      if (this.textValue) {
        this.todos.push({
          text: this.textValue,
          done: false,
        });
      }
      this.textValue = "";
      this.doneTasks.push(index);
    },
  },
});
