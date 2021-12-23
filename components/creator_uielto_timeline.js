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

var uielto_timeline = {
      props:      {
                     steps:       { type: Array, required: true }
                  },

      mounted()   {
                    var swiper = new Swiper('.swiper-container', {
                      //pagination: '.swiper-pagination',
                      slidesPerView: 3,
                      paginationClickable: true,
                      grabCursor: true,
                      paginationClickable: true,
                      nextButton: '.next-slide',
                      prevButton: '.prev-slide',
                    });   
                  },

      template:   ' <div class="swiper-container">' +
                //'   <p class="swiper-control">' +
                //'     <b-button variant="info" size="sm" class="prev-slide">Prev</b-button>' +
                //'     <b-button variant="info" size="sm" class="next-slide">Next</b-button>' +
                //'   </p>' +
                  '   <div class="swiper-wrapper timeline">' +
                  '     <div class="swiper-slide" v-for="item in steps" style="width: 33%;">' +
                  '       <div class="timestamp">' +
                  '         <span class="date">{{item.year}}<span>' +
                  '       </div>' +
                  '       <div class="status">' +
                  '         <span>' +
                  '           <b-card :img-src="item.media_src" :img-alt="item.media_alt" img-top >' +
                  '             <b-card-text>' +
                  '               <p class="m-0" v-for="(text, index) in item.info" style="font-weight: lighter;">' +
                  '                 {{text}}' +
                  '                 <br>' +
                  '                 <br v-if="index == 0">' +
                  '               </p>' +
                  '             </b-card-text>' +
                  '             <b-button :href="item.url" target="_blank" variant="info">Open</b-button>' +
                  '           </b-card>' +
                  '         </span>' +
                  '       </div>' +
                  '     </div>' +
                  '   </div>' +
                  '   <!-- Add Pagination -->' +
                  '   <div class="swiper-pagination"></div>' +
                  ' </div>'
  }

Vue.component('timeline', uielto_timeline) ;