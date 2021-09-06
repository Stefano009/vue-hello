// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// Buon lavoro... ci vediamo mercoledì :faccia_leggermente_sorridente:
/**************************************************/
Vue.config.devtools = true;

const print = new Vue({
    el: '#root',
    data: {
        message: 'hello world',
        img: 'img/steampunk-duck.jpg',
        fontSize: 'font-large',
        textColor: ''
    },
    methods: {
        changeColor() {
            (this.textColor == '') ? this.textColor = 'red': this.textColor = '';
        }
    }
});