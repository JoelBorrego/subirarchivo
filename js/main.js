var progress = document.getElementById("progress");
var progressText = document.getElementById("progress-text");

document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('form_subir');

    form.addEventListener("submit", function(event){
        event.preventDefault();
        subir_archivo(this);
    });
});

var fileName = "/Public/DownloadFiles/4G/Commissioning_Example.xml";
 
    document.querySelector('#download-button')
        .addEventListener('click', function() {
            request = new XMLHttpRequest();
            request.responseType = 'blob';
            request.open('get', fileName, true);
            request.send();
 
            request.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    var obj = window.URL.createObjectURL(this.response);
                    document.getElementById('save-file').setAttribute('href', obj);
 
                    document.getElementById('save-file').setAttribute('download', fileName);
                    setTimeout(function() {
                        window.URL.revokeObjectURL(obj);
                    }, 60 * 1000);
                }
            };
    });

<span id="download-progress-text"></span>
 

     var downloadProgressText = document.getElementById("download-progress-text");
  
 document.querySelector('#download-button')
         .addEventListener('click', function() {
     var startTime = new Date().getTime();
 //// previous code in download button click listener
 });
  
     request.onprogress = function(e) {
         var duration = ( new Date().getTime() - startTime ) / 1000;
         var bps = e.loaded / duration;
         var kbps = bps / 1024;
         kbps = Math.floor(kbps);
  
         downloadProgressText.innerHTML = kbps + " KB / s";
     };

 


 
    request.onprogress = function(e) {
        progress.max = e.total;
        progress.value = e.loaded;
 
        var percent_complete = (e.loaded / e.total) * 100;
        percent_complete = Math.floor(percent_complete);
 
        progressText.innerHTML = percent_complete + "%";
    };



function subir_archivo(form){

    let barra_estado = form.children[1].children[0],
                span = barra_estado.children[0],
        botom_cancelar = form.children[2].children[1];

        //peticion
        let peticion = new XMLHttpRequest();

        //progreso
        peticion.upload.addEventListener("progress", (event) => {
            let porcentaje = Math.round((event.loaded / event.total) * 100);

            console.log(porcentaje);

            barra_estado.style.width = porcentaje+'%';
            span.innerHTML=porcentaje+'%';
        });

        //finalizado
        peticion.addEventListener("load", () =>{
            barra_estado.classList.add('barra_verde');var fileName = "Archive.zip";
 
    document.querySelector('#download-button')
        .addEventListener('click', function() {
            request = new XMLHttpRequest();
            request.responseType = 'blob';
            request.open('get', fileName, true);
            request.send();
 
            request.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    var obj = window.URL.createObjectURL(this.response);
                    document.getElementById('save-file').setAttribute('href', obj);
 
                    document.getElementById('save-file').setAttribute('download', fileName);
                    setTimeout(function() {
                        window.URL.revokeObjectURL(obj);
                    }, 60 * 1000);
                }
            };
    });
            span.innerHTML = "proceso completado";
        });

        //enviar datos
        peticion.open('post', 'subir.php');
        peticion.send(new FormData(form));

        //cancelar
        botom_cancelar.addEventListener("click", () =>{
            peticion.abort();
            barra_estado.classList.remove('barra_verde');
            barra_estado.classList.add('barra_roja');
            span.innerHTML="proceso cancelado";
        });

}