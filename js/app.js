/********************
 * Global variables *
 ********************/

var user_mode = [];
var userPage = [];
var advanced_mode = [];

/****************
 * Vue instance *
 ****************/


window.app = new Vue({

	/*DOM ID*/
  el: "#app",


  /*Vue data*/
  data: {
  	user_mode: [],
    advanced_mode: [],

    modal_text: "",
    modal_src: "",
    modal_alt: "",
    modal_video: "",

    userPage: userPage,
    advancedPage: 1,
    advancedNumPages: 1,

  },


  /*Created vue instance*/
  created(){
    this.load_user_mode();
    this.load_advanced_mode();
  },


  /*Mounted vue instance*/
  mounted(){
    
  },


  /*Vue methods*/
  methods:{
  	load_user_mode(){
      $.getJSON('data/user_mode.json', function(cfg){
        user_mode = cfg;
        app._data.user_mode = user_mode;
        console.log(userPage);
        for (var i = 0; i < Object.keys(user_mode).length; i++) {
          console.log(i);
          userPage.push(1);
        }
        app._data.userPage = userPage;
        console.log(userPage);
      });
    },

    load_advanced_mode(){
      $.getJSON('data/advanced_mode.json', function(cfg){
        advanced_mode = cfg;
        app._data.advanced_mode = advanced_mode;
        app._data.advancedNumPages = advanced_mode.length-1;
      });
    },

    modal(text, src, alt, video, button){
      this.modal_text = text;
      this.modal_src = src;
      this.modal_alt = alt;
      this.modal_video = video;
      this.$root.$emit('bv::show::modal', 'modal', button);
    }
  },
});



/*************
 * Functions *
 *************/

