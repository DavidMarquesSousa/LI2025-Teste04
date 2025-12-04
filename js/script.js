//ficheiro de script
(() => {

  //Selecionar formulário
  const forms = document.querySelectorAll('.needs-validation')

  //loop
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()