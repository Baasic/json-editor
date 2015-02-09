JSONEditor.defaults.editors.integer = JSONEditor.defaults.editors.number.extend({
  sanitize: function(value) {
    if (value === "undefined" || value === "null"){
        return 0;
    }
    value = value + "";
    return value.replace(/[^0-9\-]/g,'');
  },
  getNumColumns: function() {
    return 2;
  }
});
