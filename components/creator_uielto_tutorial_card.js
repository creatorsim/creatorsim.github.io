/*
 *  Copyright 2018-2021 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos
 *
 *  This file is part of CREATOR.
 *
 *  CREATOR is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  CREATOR is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with CREATOR.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


/* jshint esversion: 6 */

var uielto_tutorial_card = {
      props:      {
                     title:       { type: String, required: true },
                     img:         { type: String, required: true },
                     text:        { type: Array,  required: true },
                     modal_id:    { type: String, required: true },
                     modal_title: { type: String, required: true },
                     video:       { type: String, required: true },
                     media_src:   { type: String, required: true },
                     ga:          { type: String, required: true }
                  },

      template:   ' <ul> ' +
                  '   <br v-if="title != \'\'">' +
                  '   <b-media tag="li" style="text-align: left;" v-if="title != \'\'">{{title}}</b-media>' +
                  '   <br v-if="title != \'\'">' +
                  ' ' +
                  '   <ul>' +
                  '     <b-media tag="li" class="mb-2">                        ' +
                  '        <b-card-group deck @click="eval(ga)">' +
                  '          <b-card v-b-modal="modal_id">' +
                  '           <b-row no-gutters>' +
                  '             <b-col md="6">' +
                  '                <b-card-img :src="img"></b-card-img>' +
                  '             </b-col>' +
                  '             <b-col md="6" v-if="video == \'null\'">' +
                  '                <b-card-text><b><a :href="text[0]">{{text[0]}}</a></b></b-card-text>' +
                  '             </b-col>' +
                  '             <b-col md="6" v-if="video != \'null\'">' +
                  '                <b-card-text v-if="text.length > 0">{{text[0]}}</b-card-text>' +
                  '                <b-card-text style="text-align: justify;margin:5%;" v-for="(item, index) in text" v-if="index != 0">{{item}}</b-card-text>' +
                  '             </b-col>' +
                  '           </b-row>' +
                  '          </b-card>' +
                  '       </b-card-group>' +
                  '     </b-media>' +
                  ' ' +
                  '     <b-modal :id="modal_id" :title="modal_title" size="xl" hide-footer v-if="video != \'null\'">' +
                  '       <b-img :src="media_src" fluid v-if="video == \'false\'"></b-img>' +
                  '       <b-embed type="video" aspect="16by9" :src="media_src" allowfullscreen controls v-if="video == \'true\'"></b-embed> ' +
                  '     </b-modal>' +
                  '   </ul>' +
                  ' </ul>'
  }

Vue.component('card-tutorial', uielto_tutorial_card) ;