/*
 *  Copyright 2018-2023 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos
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

var uielto_faq = {
      props:      {
                    question:       { type: String, required: true },
                    answer:         { type: String, required: true },
                    faq_id:         { type: String, required: true }
                  },

      template:   ' <ul>' +
                  '   <b-button v-b-toggle="faq_id" variant="info" class="btn btn-block" style="text-align: left;"><span class="fas fa-arrow-circle-down"></span> {{question}}</b-button>' +
                  '   <b-collapse :id="faq_id" style="text-align: left;margin:2%;">' +
                  '     <b-card>' +
                  '       <span v-for="line in answer">' +
                  '         {{line}}' +
                  '         <br>' +
                  '       </span>' +
                  '     </b-card>' +
                  '   </b-collapse>' +
                  ' </ul>'
  }

Vue.component('faq', uielto_faq) ;