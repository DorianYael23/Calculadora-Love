function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    
    if (name1 && name2) {
        const hash = (name1 + name2).split('').reduce((acc, char)=> acc + char.charCodeAt(0),0);
        const lovePorcentage = hash % 101;
        if (lovePorcentage > 70) {
            document.getElementById("result").style.color = `green`;
            document.getElementById("result").textContent = `!Increible¡ Tienes un ${lovePorcentage}% de compatibilidad`;
        } else if (lovePorcentage > 40) {
            document.getElementById("result").style.color = `orange`;
            document.getElementById("result").textContent = `Tienes un ${lovePorcentage}% de compatibilidad`;
        }else{
            document.getElementById("result").style.color = `blue`;  
            document.getElementById("result").textContent = `Tienes un ${lovePorcentage}%, mejor ni lo intentes xd`;
        }
    } else{
        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = `Por favor, ingresa ambos nombres`;
    }
}
