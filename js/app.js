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
    advanced_mode: "",
    publications: "",
    evolution: ""
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

      $.getJSON('content/help/student_help.json', function(cfg2){
        app._data.getting_started = cfg2;
      });

      $.getJSON('content/help/teacher_help.json', function(cfg3){
        app._data.advanced_mode = cfg3;
      });

      $.getJSON('content/publications.json', function(cfg4){
        app._data.publications = cfg4;
      });

      $.getJSON('content/evolution/evolution.json', function(cfg5){
        app._data.evolution = cfg5;
      });
    },

    copy_clipboard(text){
      // Create a dummy input to copy the string array inside it
      var dummy = document.createElement("input");

      // Add it to the document
      document.body.appendChild(dummy);

      // Set its ID
      dummy.setAttribute("id", "dummy_id");

      // Output the array into it
      document.getElementById("dummy_id").value=text;

      // Select it
      dummy.select();

      // Copy its contents
      document.execCommand("copy");

      // Remove it as its not needed anymore
      document.body.removeChild(dummy);
      
    }
  },
});



/*************
 * Functions *
 *************/

