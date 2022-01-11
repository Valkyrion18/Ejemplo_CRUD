let btnCategoria1 = document.getElementById('btnCategory1')
let btnCategoria2 = document.getElementById('btnCategory2')

const getElementos = async (url) =>{
    const resp = await fetch(url)
    const data = await resp.json()
    let mostrarElementos = document.querySelector('.grid-elementos')
    mostrarElementos.innerHTML = ''

    data.forEach(heroe => {
        const {imagen, apodo, equipo, personalidad} = heroe;
        mostrarElementos.innerHTML += `
        <div class="col elementos">
            <a href="#" class="enlace-detalle-elemeto"></a>
            <div class="card bg-dark text-white gradiente">
                <img src="${imagen}" class="card-img" alt="imagen de heroe>"
                <div class="card-img-overlay">
                    <h5 class="card-title body2Bold">${apodo}</h5>
                    <p class="card-text body2Regular">${equipo}</p>
                </div>
            </div>
        </div>
        `
    });

    console.log(data)
}

btnCategoria1.addEventListener('click', () => {
    getElementos('http://localhost:4000/marvel')
})

btnCategoria2.addEventListener('click', () => {
    getElementos('http://localhost:4001/dc')
})