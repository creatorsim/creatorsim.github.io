/*
 *  Copyright 2018-2022 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos
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

  var uielto_pseudoinstructions_reset = {

        props:      {
                      id:                             { type: String, required: true },
                      architecture_name:              { type: String, required: true }
                    },

        data:       function () {
                      return {
                        
                      }
                    },

        methods:    {
                      //Reset pseudoinstructions
                      reset_pseudoinstruction()
                      {
                        show_loading();

                        //Read original value from JSON
                        for (var i = 0; i < load_architectures.length; i++)
                        {
                          if(this._props.architecture_name == load_architectures[i].id)
                          {
                            var aux_arch = JSON.parse(load_architectures[i].architecture);
                            var aux_architecture = register_value_deserialize(aux_arch);

                            architecture.pseudoinstructions = aux_architecture.pseudoinstructions;
                            app._data.architecture = architecture;

                            hide_loading();
                            show_notification('The registers has been reset correctly', 'success') ;

                            return;
                          }
                        }

                        $.getJSON('architecture/'+this._props.architecture_name+'.json', function(cfg){
                          var aux_architecture = cfg;

                          var aux_architecture_2 = register_value_deserialize(aux_architecture);
                          architecture.pseudoinstructions = aux_architecture_2.pseudoinstructions;

                          app._data.architecture = architecture;

                          hide_loading();
                          show_notification('The pseudoinstruction set has been reset correctly', 'success') ;
                        });
                      },
                    },

        template:   '<b-modal :id ="id" ' +
                    '         title="Reset Pseudoinstruction" ' +
                    '         ok-variant="danger" ' +
                    '         ok-title="Reset" ' +
                    '         @ok="reset_pseudoinstruction(architecture_name)">' +
                    '  <span class="h6">Are you sure you want to reset the pseudoinstructions?</span>' +
                    '</b-modal >'

  }

  Vue.component('pseudoinstructions-reset', uielto_pseudoinstructions_reset) ;