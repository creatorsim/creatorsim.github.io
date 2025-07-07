
/*
 *  Copyright 2018-2025 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos
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

  var uielto_memory_layout = {

    props:      {
                  memory_layout:                  { type: Array,  required: true }
                },

    data:       function () {
                  return {
                    
                  }
                },

    methods:    {

                },

    template:   '<div class="col-lg-12 col-sm-12 row memoryLayoutDiv  mx-0 px-0">' +
                '' +
                '  <div class="col-lg-3 col-sm-12 "></div>' +
                '' +
                '  <!-- Memory layout sketch -->' +
                '  <div class="col-lg-6 col-sm-12 ">' +
                '    <b-list-group class="memoryLayout">' +
                '      <b-list-group horizontal>' +
                '        <b-list-group-item variant="info" class="memoryLayout">' +
                '          <br>' +
                '          .text' +
                '          <br>' +
                '          <br>' +
                '        </b-list-group-item>' +
                '        <b-list-group-item class="memoryLayout noBorder left">' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[0].value}}' +
                '          </span>' +
                '          <br>' +
                '          <br>' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[1].value}}' +
                '          </span>' +
                '        </b-list-group-item>' +
                '      </b-list-group>' +
                '' +
                '      <b-list-group horizontal>' +
                '        <b-list-group-item variant="warning" class="memoryLayout">' +
                '          <br>' +
                '          .data' +
                '          <br>' +
                '          <br>' +
                '        </b-list-group-item>' +
                '        <b-list-group-item class="memoryLayout noBorder left">' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[2].value}}' +
                '          </span>' +
                '          <br>' +
                '          <br>' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[3].value}}' +
                '          </span>' +
                '        </b-list-group-item>' +
                '      </b-list-group>' +
                '' +
                '      <b-list-group horizontal>' +
                '        <b-list-group-item variant="secondary" class="memoryLayout">' +
                '          <br>' +
                '          ...' +
                '          <br>' +
                '          <br>' +
                '        </b-list-group-item>' +
                '        <b-list-group-item class="memoryLayout noBorder">' +
                '          ' +
                '        </b-list-group-item>' +
                '      </b-list-group>' +
                '' +
                '      <b-list-group horizontal>' +
                '        <b-list-group-item variant="success" class="memoryLayout">' +
                '          <br>' +
                '          stack' +
                '          <br>' +
                '          <br>' +
                '        </b-list-group-item>' +
                '        <b-list-group-item class="memoryLayout noBorder left">' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[4].value}}' +
                '          </span>' +
                '          <br>' +
                '          <br>' +
                '          <span class="h6" v-if="memory_layout.length > 0">' +
                '            {{memory_layout[5].value}}' +
                '          </span>' +
                '        </b-list-group-item>' +
                '      </b-list-group>' +
                '    </b-list-group>' +
                '  </div>' +
                '' +
                '  <div class="col-lg-3 col-sm-12 "></div>' +
                '' +
                '</div>'

  }

  Vue.component('memory-layout', uielto_memory_layout) ;