function enviaFormulario(event){
    event.preventDefault();
    console.log("chamando")
    const divInativa = document.getElementById('div-inativa');
    divInativa.classList.add("show")
    setTimeout(() => {
        divInativa.classList.remove("show")
    }, 3000)
}