(function() {
  'use strict';
  window.BK_Dialog = Backbone.View.extend({
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
    }
  });
})();
