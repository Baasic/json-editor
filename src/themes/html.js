JSONEditor.defaults.themes.html = JSONEditor.AbstractTheme.extend({
  getFormInputLabel: function(text) {
    var el = this._super(text);    
    el.className = 'ba-field__lbl';
    return el;
  },
  getFormInputDescription: function(text) {
    var el = this._super(text);        
    el.style.display = 'inline-block';
    return el;
  },
  getIndentedPanel: function() {
    var el = this._super();
    el.style.border = '1px dashed #ccc';
    el.style.padding = '16px';
    el.style.marginTop = '8px';
    el.className = 'ba-spc--sml';              
    return el;
  },
  getChildEditorHolder: function() {
    var el = this._super();   
    el.style.marginTop = '8px';	
    return el;
  },
  getHeaderButtonHolder: function() {
    var el = this.getButtonHolder();
    el.style.display = 'inline-block';
    el.style.marginLeft = '6px';
    el.style.marginBottom = '8px';
    return el;
  },
  getTable: function() {
    var el = this._super();
    el.style.borderBottom = '1px solid #ccc';
    el.style.marginBottom = '5px';
    return el;
  },
  addInputError: function(input, text) {
    input.style.borderColor = 'red';
    
    if(!input.errmsg) {
      var group = this.closest(input,'.form-control');
      input.errmsg = document.createElement('div');
      input.errmsg.setAttribute('class','errmsg');
      input.errmsg.style = input.errmsg.style || {};
      input.errmsg.style.color = 'red';
      group.appendChild(input.errmsg);
    }
    else {
      input.errmsg.style.display = 'block';
    }
    
    input.errmsg.innerHTML = '';
    input.errmsg.appendChild(document.createTextNode(text));
  },
  removeInputError: function(input) {
    input.style.borderColor = '';
    if(input.errmsg) input.errmsg.style.display = 'none';
  },
  getProgressBar: function() {
    var max = 100, start = 0;

    var progressBar = document.createElement('progress');
    progressBar.setAttribute('max', max);
    progressBar.setAttribute('value', start);
    return progressBar;
  },
  updateProgressBar: function(progressBar, progress) {
    if (!progressBar) return;
    progressBar.setAttribute('value', progress);
  },
  updateProgressBarUnknown: function(progressBar) {
    if (!progressBar) return;
    progressBar.removeAttribute('value');
  }
});
