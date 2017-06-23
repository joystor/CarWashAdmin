var App;

(function() {
	'use strict';

  App = (function ($, Backbone, global) {
      var init = function () {
          /*global.bk_Header = new BK_Header();
          global.bk_Arbitros = new BK_Arbitros();
          global.bk_Inicio = new BK_Inicio();
          global.bk_opsTorneo = new BK_OpsTorneo();
          global.bk_partidos = new BK_Partidos();*/
      };
      return {
          init: init
      };
  }($, Backbone, window));

  $(function () {
      App.init();
  });


})();
