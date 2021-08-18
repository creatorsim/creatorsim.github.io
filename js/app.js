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
    help_menu: "",
    student_help: "",
    teacher_help: "",
    faqs: "",
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

      $.getJSON('content/help/help_menu.json', function(cfg2){
        app._data.help_menu = cfg2;
      });

      $.getJSON('content/help/student_help.json', function(cfg3){
        app._data.student_help = cfg3;
      });

      $.getJSON('content/help/teacher_help.json', function(cfg4){
        app._data.teacher_help = cfg4;
      });

      $.getJSON('content/help/faq.json', function(cfg5){
        app._data.faqs = cfg5;
      });

      $.getJSON('content/publications.json', function(cfg6){
        app._data.publications = cfg6;
      });

      $.getJSON('content/evolution/evolution.json', function(cfg7){
        app._data.evolution = cfg7;
      });
    }
  },
});



/*************
 * Functions *
 *************/

