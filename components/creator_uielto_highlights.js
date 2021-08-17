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

var uielto_highlights= {
      props:      {
                    highlights:        { type: Array,  required: true }
                  },

      template:   ' <div class="col-lg-12 col-sm-12" style="margin-top: 2%;">' +
                  '   <b-carousel id="carousel" :interval="20000" fade controls indicators img-width="1024" img-height="480">' +
                  '     <b-carousel-slide v-for="item in highlights" :caption="item.caption" :img-src="item.media_src"></b-carousel-slide>' +
                  ' </div>'
  }

Vue.component('highlights', uielto_highlights) ;