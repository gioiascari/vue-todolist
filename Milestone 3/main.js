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
        text: "Portare fuori il cane",
        done: false,
      },
      {
        text: "Andare al mercato",
        done: true,
      },
      {
        text: "Pattinare",
        done: false,
      },
      {
        text: "Fare una passeggiata in montagna",
        done: true,
      },
      {
        text: "Alzarsi dal letto",
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
