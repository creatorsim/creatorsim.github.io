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

var uielto_supported_browsers = {
      props:      {

                  },

      template:   ' <div class="col-lg-12 col-sm-12 row p-0 m-0">' +
                  '   <div class="col-lg-2 col-sm-0 p-0"> </div>' +
                  '   <div class="col-lg-8 col-sm-12 p-0">' +
                  '     <b-list-group horizontal>' +
                  '       <b-list-group-item class="d-flex justify-content-between align-items-center">' +
                  '         Google Chrome 70+' +
                  '         <b-badge pill style="background-color: transparent;">' +
                  '         <b-img src="./images/chrome.png" class="shadow" rounded="circle" fluid alt="Responsive image" style="height: 50px;width: auto;"></b-img>' +
                  '         </b-badge>' +
                  '       </b-list-group-item>' +
                  '       <b-list-group-item class="d-flex justify-content-between align-items-center">' +
                  '         Mozilla Firefox 60+' +
                  '         <b-badge pill style="background-color: transparent;">' +
                  '          <b-img src="./images/firefox.png" class="shadow" rounded="circle" fluid alt="Responsive image" style="height: 50px;width: auto;"></b-img>' +
                  '         </b-badge>' +
                  '       </b-list-group-item>' +
                  '       <b-list-group-item class="d-flex justify-content-between align-items-center">' +
                  '         Apple Safari 12+' +
                  '         <b-badge pill style="background-color: transparent;">' +
                  '          <b-img src="./images/safari.png" class="shadow" rounded="circle" fluid alt="Responsive image" style="height: 50px;width: auto;"></b-img>' +
                  '         </b-badge>' +
                  '       </b-list-group-item>' +
                  '     </b-list-group>' +
                  '   </div>' +
                  '   <div class="col-lg-2 col-sm-0 p-0"> </div>' +
                  ' </div>'
  }

Vue.component('supported_browsers', uielto_supported_browsers) ;