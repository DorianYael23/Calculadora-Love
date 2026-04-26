function calculateLove() {
    // variables para los inputs
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    // abrir el modal y mostrar el resultado o error
    const modal = document.querySelector("#modal")
    const resultElement = document.getElementById("result");
    
    if (name1 && name2) {
        //crea un hash con los nombre de las inputs y hace la funcion de modulo para el porcentaje obtenido.
        const hash = (name1 + name2).split('').reduce((acc, char)=> acc + char.charCodeAt(0),0);
        const lovePorcentage = hash % 101;
        // segun el porcentaje es el color del mensaje que sale
        if (lovePorcentage >= 70) {
            document.getElementById("result").style.color = `green`;
            document.getElementById("result").textContent = `!Increible¡ Tienes un ${lovePorcentage}% de compatibilidad`;
        } else if (lovePorcentage >=40) {
            document.getElementById("result").style.color = `brown`;
            document.getElementById("result").textContent = `Tienes un ${lovePorcentage}% de compatibilidad`;
        }else{
            document.getElementById("result").style.color = `blue`;  
            document.getElementById("result").textContent = `Tienes un ${lovePorcentage}%, mejor ni lo intentes xd`;
        }
        // Muestra el modal
        modal.showModal();
    } else{
        // maneja el error de si el usuario no ingresa ambos campos
        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = `Por favor, ingresa ambos nombres`;
        modal.showModal();
    }
}
// Maneja la logica para cerrar el modal y limpiar los campos del formulario
document.getElementById("btnCerrar").addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    modal.close();

    name1.value = "";
    name2.value = "";

    document.getElementById("result").textContent = ""
});