$(() => {
    let toDo = [];
    

    init()
    function init(){
        scriviLista()
    }

    function scriviLista(){
        let lista = '';

        for(i = 0; i < toDo.length; i++){
            lista += `<tr class="riga">
                        <td>${toDo[i]}</td>
                        <td  class="text-end p-2"><button type="button" class="btn bg-danger btn-danger elimina">Elimina</button></td>
                      </tr>`;
        }
        $('#risultato').html(lista);
    }
    


    $('#aggiungi').on('click', function(){
        let nuoVoce = $('#nuovaVoce').val();
        toDo.push(nuoVoce);
        scriviLista()
    });



    $('#risultato').on('click', '.elimina', function(){
       
       let elemento = $(this).parent().prev().text()
       let indice = toDo.indexOf(elemento);
       toDo.splice(indice,1);
       $(this).closest('.riga').remove();

    });
   


   

}); 
