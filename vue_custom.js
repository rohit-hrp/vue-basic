
var app = new Vue({
  el: '#app',
  data: {
        message: 'Hello Vue!',
        users: [ 
            { "id": "1", "name": "Shad Jast", "email": "pfeffer.matt@yahoo.com" },
            { "id": "2", "name": "Duane Metz", "email": "mohammad.ferry@yahoo.com" }, 
            { "id": "3", "name": "Myah Kris", "email": "evolkman@hotmail.com" }, 
            { "id": "4", "name": "Dr. Kamron Wunsch", "email": "lenora95@leannon.com" }
        ],
        selected: [],
        check_option:[],
        },
    methods: {
        check: function(e) {
          if (e.target.checked) {
            console.log(e.target.value)
          }
        }
    },
    computed: {
        selectAll: {
            get: function () {
                return this.users ? this.selected.length == this.users.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.users.forEach(function (user) {
                        selected.push(user.id);
                    });
                }

                this.selected = selected;
            }
        },
        optionAll:{
            get: function () {
                return this.check_option.length == 4;
            },
            set: function (value) {
                var selected = [];
                this.check_option = selected;
            }
        }
    }
})