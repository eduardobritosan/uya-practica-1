document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');

    const boton1 = document.querySelector("#acordeon1");
    const aria = document.querySelector("#acordeon1").getAttribute("aria-extended");
    boton1.onclick = () => {
        if (aria === "false") {
            document.querySelector("#acordeon1").setAttribute("aria", "true");
        }
    }

    var instances = M.Collapsible.init(elems, options);
    instances.open(3);
  });

$(document).ready(function(){
    $('.collapsible').collapsible();
  });
