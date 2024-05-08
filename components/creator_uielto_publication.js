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

var uielto_publication = {
      props:      {
                    publication:       { type: Object, required: true }
                  },

      methods:    {
                    copy_clipboard(text){
                      navigator.clipboard.writeText(text);
                    }
                  },

      template:   ' <b-card' +
                  '   :title="publication.title"' +
                  '   :img-src="publication.media_src"' +
                  '   :img-alt="publication.media_alt" img-height="25%"' +
                  '   img-top' +
                  '   style="width: 25rem;"' +
                  '   class="mb-2"' +
                  ' >' +
                  '   <b-card-text>' +
                  '     {{publication.year}}' +
                  '     <br>' +
                  '     <br>' +
                  '   </b-card-text>' +
                  '' +
                  '   <template #footer>' +
                  '     <b-button v-b-toggle="publication.id" variant="info" class="btn btn-block mb-1" style="text-align: center;"><span class="fas fa-arrow-circle-down"></span> More information</b-button>' +
                  '     <b-collapse :id="publication.id" style="text-align: center; margin:2%;">' +
                  '       <b-card>' +
                  '         <b>{{publication.type}}</b>' +
                  '         <br>' +
                  '         <b>{{publication.publisher}}</b>' +
                  '         <br>' +
                  '         <br>' +
                  '         <u>Authors</u>' +
                  '         <br>' +
                  '         <span v-for="author in publication.authors">' +
                  '           {{author}}' +
                  '           <br>' +
                  '         </span>' +
                  '       </b-card>' +
                  '     </b-collapse>' +
                  '' +
                  '     <b-button :href="publication.doi" target="_blank" variant="info">' +
                  '       <span class="fas fa-external-link-alt"></span> Open' +
                  '     </b-button>' +
                  '     <b-button variant="info" @click="copy_clipboard(publication.cite)">' +
                  '       <span class="fas fa-copy"></span> Cite' +
                  '     </b-button>' +
                  '   </template>' +
                  ' ' +
                  ' </b-card>'
  }

Vue.component('publication', uielto_publication);