let amigos = [];
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let valor = inputAmigo.value.trim(); // Quita espacios al inicio y final

    if (valor !== "") {
        amigos.push(valor);
        inputAmigo.value = ""; // Ahora sí limpia el input
        console.log(amigos);
    } else {
        alert("Ingresa un nombre por favor");
    }  
}

function sortearAmigo() {
    if (amigos.length < 2) {
                alert("Se necesitan al menos 2 amigos para formar parejas.");
                return;
            }

            let copia = [...amigos]; // Copia para no alterar el original
            let parejasLista = document.getElementById("parejas");
            parejasLista.innerHTML = "";

            // Mezclar aleatoriamente la lista
            copia.sort(() => Math.random() - 0.5);

            // Formar parejas
            for (let i = 0; i < copia.length; i += 2) {
                if (i + 1 < copia.length) {
                    let li = document.createElement("li");
                    li.textContent = `🥰 ${copia[i]} - ${copia[i+1]} 🥰`;
                    parejasLista.appendChild(li);
                } else {
                    // Si queda alguien sin pareja
                    let li = document.createElement("li");
                    li.textContent = `😒 ${copia[i]} - (sin pareja) 😒`;
                    parejasLista.appendChild(li);
                }
            }
}
