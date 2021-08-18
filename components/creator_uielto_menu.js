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

  var uielto_menu = {
        props:      {

                    },

        template:   ' <b-navbar type="dark" toggleable="sm" class="header" variant="dark" style="margin: 1px; padding-right: 3%; padding-left: 3%; text-align: center;">' +
                    '  <b-navbar-toggle target="nav_collapse2"></b-navbar-toggle>' +
                    ' ' +
                    '  <b-collapse is-nav id="nav_collapse2" is-nav>' +
                    '    <b-navbar-nav>' +
                    '      <b-nav-item href="index.html#introduction">Introduction</b-nav-item>' +
                    '      <b-nav-item-dropdown text="Help" right>' +
                    '       <b-dropdown-item href="student_help.html">Student</b-dropdown-item>' +
                    '       <b-dropdown-item href="teacher_help.html">Teacher</b-dropdown-item>' +
                    '       <b-dropdown-item href="command_line_help.html">Command Line</b-dropdown-item>' +
                    '       <b-dropdown-item href="faq.html">FAQ</b-dropdown-item>' +
                    '      </b-nav-item-dropdown>' +
                    '      <b-nav-item href="index.html#browsers">Supported Browsers</b-nav-item>' +
                    '      <b-nav-item href="index.html#publications">Publications</b-nav-item>' +
                    '      <b-nav-item href="index.html#evolution">Evolution</b-nav-item>' +
                    '      <b-nav-item href="index.html#authors">Authors</b-nav-item>' +
                    '    </b-navbar-nav>' +
                    '  </b-collapse>' +
                    ' </b-navbar>'
    }

  Vue.component('menu-creator', uielto_menu) ;


