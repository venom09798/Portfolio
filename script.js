(function(){
  var open = 4, c = document.getElementById('count');
  
  document.querySelectorAll('.alert').forEach(function(a){
    function done(t, esc) {
      var actsEl = a.querySelector('.acts');
      if (actsEl) {
        actsEl.outerHTML = '<div class="done' + (esc ? ' esc' : '') + '">' + t + '</div>';
      }
      open--;
      if (c) {
        c.textContent = open ? open + ' open' : 'All clear';
      }
    }
    
    var buttons = a.querySelectorAll('button');
    if (buttons.length >= 2) {
      buttons[0].addEventListener('click', function(){ done('Escalated to tier 2', true); });
      buttons[1].addEventListener('click', function(){ done('Closed as benign', false); });
    }
  });
})();