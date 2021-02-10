let data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

const vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

setTimeout(function(){
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = "changed!"
    }
  }
})

const vm3 = new Vue({
  el: 'hello',
  template: '<h1>Hello!</h1>'
})

//vm3.$mount();
//document.getElementById('app3').appendChild(vm3.$el);
