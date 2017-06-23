(function() {
  'use strict';
  window.BK_Header = Backbone.View.extend({
    el: '#headApp',
    tagName: 'header',
    className: '',
    initialize: function() {
      this.template = _.template( window.templates.header() );
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    events: {
      "click #menu a":"openSec"
    },
    openSec:_.debounce((event)=>{
      if($("#contenido").hasClass('animationend')){
        return;
      }

      $('#headApp').find('a.sec-menu-open').removeClass('sec-menu-open');

      var $openSec = $(event.target);
      $openSec.addClass('sec-menu-open');
      var sec2open = $openSec.data('sec2open');

      $("#contenido").off('animationstart').on('animationstart', function(e) {
        $('.sec-container').each(function(s,o){
          if(o.id !== sec2open){
            $('#'+o.id).addClass('sec-hidden');
          }
        });
        $('#'+sec2open).removeClass('sec-hidden');
      });
      $("#contenido").off('animationend').on('animationend', function(e) {
        $("#contenido").removeClass('animated flip');
      });
      $("#contenido").addClass('animated flip');
    },500,true)
  });
})();
