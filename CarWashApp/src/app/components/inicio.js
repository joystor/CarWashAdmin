(function() {
  'use strict';
  window.BK_Inicio = Backbone.View.extend({
    id: 'secInicio',
    tagName: 'div',
    className: 'sec-container',
    initialize: function() {
      this.template = _.template( window.templates.inicio() );
      $("#contenido").append( this.$el );
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    events: {
    }
  });
})();
