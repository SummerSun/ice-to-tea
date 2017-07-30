// var Vue = require('vue');

new Vue({
  el: '#items',

  data: {
    item: { title: '', detail: '' },
    items: []
  },

  ready: function () {
    this.fetchItems();
  },

  methods: {

    fetchItems: function () {
      var Items = [];
    },

    addItem: function () {
    },

    deleteItem: function (index) {
    }
  }
});