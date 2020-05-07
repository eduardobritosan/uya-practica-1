document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');

    const boton1 = document.querySelector("#acordeon1");
    boton1.onclick = () => {
        const body1 = document.querySelector("#body1").getAttribute("hidden");
        if (body1 === "false" || body1 === "false") {
            document.querySelector("#body1").setAttribute("hidden", "true");
        }else{
            document.querySelector("#body1").setAttribute("hidden", "false");
        }
    }

    var instances = M.Collapsible.init(elems, options);
    instances.open(3);
  });

$(document).ready(function(){
    $('.collapsible').collapsible();
  });
