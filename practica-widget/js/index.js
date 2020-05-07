document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
    instances.open(3);
  });

$(document).ready(function(){
    $('.collapsible').collapsible();
  });
