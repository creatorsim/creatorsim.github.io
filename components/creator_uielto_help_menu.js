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

var uielto_help_card = {
      props:      {
                     option:       { type: Object, required: true }
                  },

      template:   ' <b-card' +
                  '   :title="option.title"' +
                  '   :img-src="option.img"' +
                  '   :img-alt="option.img_alt"' +
                  '   img-top' +
                  '   style="max-width: 20rem;"' +
                  '   class="mb-2"' +
                  ' >' +
                  '   <b-card-text>' +
                  '     {{option.text}}' +
                  '   </b-card-text>' +
                  ' ' +
                  '   <b-button :href="option.url" variant="info">' +
                  '     <span class="fas fa-external-link-alt"></span> Open' +
                  '   </b-button>' +
                  ' </b-card>'
  }

Vue.component('card-help', uielto_help_card) ;