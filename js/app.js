/********************
 * Global variables *
 ********************/


/****************
 * Vue instance *
 ****************/


window.app = new Vue({

  /*DOM ID*/
  el: "#app",


  /*Vue data*/
  data: {
    getting_started: ""
  },


  /*Created vue instance*/
  created(){
    this.load_content();
  },


  /*Mounted vue instance*/
  mounted(){
    
  },


  /*Vue methods*/
  methods:{
    /*Load the available architectures and check if exists backup*/
    load_content() {
      $.getJSON('content/getting_started.json', function(cfg){
        app._data.getting_started = cfg;
      });
    }
  },
});



/*************
 * Functions *
 *************/

