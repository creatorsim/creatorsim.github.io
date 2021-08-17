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
    highlights: "",
    getting_started: "",
    advanced_mode: ""
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
    load_content() {
      $.getJSON('content/highlights.json', function(cfg1){
        app._data.highlights = cfg1;
      });

      $.getJSON('content/getting_started.json', function(cfg2){
        app._data.getting_started = cfg2;
      });

      $.getJSON('content/advanced_mode.json', function(cfg3){
        app._data.advanced_mode = cfg3;
      });
    }
  },
});



/*************
 * Functions *
 *************/

