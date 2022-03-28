console.log("Ok Vue Js :)");
/*Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */
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
  },
});
