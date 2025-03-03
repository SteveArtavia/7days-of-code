const containerForm = document.querySelector(".container__form");

let frutas = { nombre : 'Frutas', productos: [] };
let congelados = { nombre : 'Congelados', productos: []  };
let dulces = { nombre : 'Dulces', productos: []  };
let higiene = { nombre : 'Higiene', productos: []  };

function respuestaSi() {
    containerForm.innerHTML = `
        <h3>Que producto deseas agregar?</h3>
        <input id="producto" type='text' class='container__form__input' placeholder='Escribe aqui...' required>
        <button class='container__form__button' onclick='agregarProducto();'>agregar</button>
    `;
    
    return;
}

function agregarProducto(){
    //en que categoria se agrega el producto?
    let producto = document.getElementById('producto').value;
    containerForm.innerHTML = `
        <h3>En que categoria encaja este producto?</h3>
        <div class="botones-compras">
            <button class="container__form__button" onclick="categoriaProducto(frutas, '${producto}');">Frutas</button>
            <button class="container__form__button" onclick="categoriaProducto(congelados, '${producto}');">Congelados</button>
            <button class="container__form__button" onclick="categoriaProducto(dulces, '${producto}');">Dulces</button>
            <button class="container__form__button" onclick="categoriaProducto(higiene, '${producto}');">Higiene</button>
        </div>
    `;
}

//agregar producto a categoria
function categoriaProducto(categoria, producto){
    categoria.productos.push(producto);
    alert(`${producto} se ha agregado a ${categoria.nombre}`);

    containerForm.innerHTML = `
        <h3>Deseas agregar otro producto a tus compras?</h3>
            <div class="botones-compras">
                <button id="btnSi" class="container__form__button" onclick="respuestaSi();">Si</button>
                <button id="btnNo" class="container__form__button" onclick="respuestaNo();">No</button>
            </div>
    `;
}

function respuestaNo() {
    containerForm.innerHTML = `
        <h3>Lista de compras:</h3>
        <div>
            Frutas:
            <ul id='frutas'></ul>
        </div>
        <div>
            Congelados:
            <ul id='congelados'></ul>
        </div>
        <div>
            Dulces:
            <ul id='dulces'></ul>
        </div>
        <div>
            Higiene:
            <ul id='higiene'></ul>
        </div>
    `;

    agregarLista('frutas', frutas);
    agregarLista('congelados', congelados);
    agregarLista('dulces', dulces);
    agregarLista('higiene', higiene);
}

function agregarLista(categoriaId, lista){
    lista.productos.forEach(item => {
        let listaProductos = document.getElementById(categoriaId);
        listaProductos.innerHTML += `
            <li>${item}</li>
        `;
    });
}