(function () {
  'use strict';
  window.addEventListener('load', function () {
    
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
      event.preventDefault();
        
      if (form.checkValidity() === false) {
          event.stopPropagation();
      } 
      
      else {
          const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register",
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Basic bWF0aGV1cy5wcmVzdGVzX0BvdXRsb29rLmNvbTo="
            },
            "processData": false,
            "data": JSON.stringify({
              "name": "Matheus Gouveia Prestes",
              "email": "matheus.prestes_@outlook.com"
            })
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            alert(JSON.stringify(response))
          });
        }

        form.classList.add('was-validated');

      }, false);
    });

  }, false);
  
})();





