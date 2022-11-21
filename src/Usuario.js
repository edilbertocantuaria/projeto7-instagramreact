import React from 'react'

let imgInicial="assets/img/catanacomics.svg";
let nomeInicial="Catana";

export default function Usuario(){
    return(
            <User imagem={imgInicial} idInsta="catanacomics" nomeUsuario={nomeInicial}/>
 
    )
}

function User(props){

    let [nome, setNome] = React.useState("Catana");
    let [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    function editaNome(){
        let   novoNomeUsuario = null;
        do{
            novoNomeUsuario = prompt("Insira o link da nova imagem:");
            console.log(novoNomeUsuario)
             if (novoNomeUsuario==null){
               return
             }

        } while (novoNomeUsuario=="" )
        setNome(novoNomeUsuario);
    }

    function editaImagem(){
        let novaImagem = null;
        do{
            novaImagem = prompt("Insira o link da nova imagem:");
            console.log(novaImagem)
             if (novaImagem==null){
               return
             }

        } while (novaImagem=="" )
    setImagem(novaImagem);
    }


return (
    <div className="usuario">
        <img src={imagem} onClick={editaImagem}/>
          <div class="texto">
            <strong>{props.idInsta}</strong>
         <span>
        {nome}
        <ion-icon name="pencil" onClick={editaNome}></ion-icon>
      </span>
      </div>
      </div>
)
}

