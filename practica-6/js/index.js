'use strict'




$('#play').click(() => {
    console.log('casita');
    
    console.log($('#post_id').val());
    if($('#post_id').val()){
        $('#contenido').html(`
        <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>`);
        var param = $("#formulario").serialize();
        $.get("https://jsonplaceholder.typicode.com/comments", param, (data) => {
            let texto = `<div><ul class="collapsible">`;
            for (let i in data) {
                texto += `
                    <li>
                        <div class="collapsible-header"><i class="tiny material-icons">dehaze</i> ID: ${data[i].id}</div>
                        <div class="collapsible-body left-align">
                            <span>ID: ${data[i].name}</span><br>
                            <span>Email: ${data[i].email}</span><br>
                            <span>Body: ${data[i].body}</span><br>
                        </div>
                    </li>`
            }
            texto += `</ul></div>`;
            $('#contenido').html(texto);
            
            $(document).ready(function () {
                $('.collapsible').collapsible();
            });
        });
    }
    else {
        $("#contenido").html(`
        <div class="row">
            <div class="col s10 push-s1">
                <div class="card-panel #b71c1c red darken-4">
                    <span class="white-text">No se ha expecificado postID</span>
                </div>
            </div>
    </div>
        `);
    }
});
        
 
