$("#boton").click(() => {
    $.get("http://localhost:5000/amigos/", (data) => { //$ jQuery llamador para un metodo. inciia cueri con el singo $
    const lista = $("#lista"); 
    lista.empty(); //metodo Jquery, la lista se borra una vez que la subis al host. Logras que no se vuelva a imprimir al hacer click en el boton  
    data.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = element.name;
        lista.append(li);
        });
    });
});

$("#search").click(() => {
    const span = $("#amigo");    
    const input = $("#input");   
    span.text("") //metodo jQuery, adjudica texto al elemento html
    $.get("http://localhost:5000/amigos/" + input.val(), (data) => {
        span.text(data.name);
        input.val(""); //metodo jQuery para asignarle un valor al elemento html. en este caso reasigna el valor que agregaste en el input. (lo borra al poner "" vacías)
    });
});

$("#delete").click(() => {
    const span = $("#success");    
    const input = $("#inputDelete");   
    input.text("") //metodo jQuery, adjudica texto al elemento html
    $.ajax("http://localhost:5000/amigos/" + input.val(), {
        method: 'DELETE'
    }).done(() => {
        span.text("Tu amigo fue borrado con éxito.");
        input.val("")
    })
    });