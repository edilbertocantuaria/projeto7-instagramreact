import React from "react";

function InfoUsuario(props){
  const [arrobaUser, setArrobaUser] = React.useState(props.arrobaUser)
  const [imgPerfil, setImgPerfil] = React.useState(props.imgPerfil)


  function editarArrobaUser(){
    let novoArroba = prompt("Digite seu novo @")

    if (novoArroba ==="" || novoArroba ===null || novoArroba===undefined){
     
    } else {
      setArrobaUser(novoArroba)
    }

}

function editarImgUser(){
  let novaImg = prompt("Deixe o link da nova imagem:")

  if (novaImg ==="" || novaImg ===null || novaImg===undefined){
   
  } else {
    setImgPerfil(novaImg)
  }

}

return (
  <div class="espHoriz espEsqPubli2">
        <img data-test="profile-image"
          src={imgPerfil}
          class="fotoPerfilSB"
          onClick={() => editarImgUser()} />
        <div class="espDirPubli centVert2 publi">
          <div class="user-icon espHoriz2"><h1 data-test="name" >{arrobaUser}</h1> <img class="pen-edit" data-test="edit-name" src="assets/Edit_fill.svg" onClick={() => editarArrobaUser()} /></div>
          <h2>{props.nomeUsuario}</h2>
          
        </div>
      </div>
)
}

export default function Usuario(){
    return(
      <div class="meuPerfil">
        <InfoUsuario imgPerfil="assets/imgs/quemPublicou/edilbertices_perfil.jpg" arrobaUser="edilbertices" nomeUsuario="Beto Cantuária" />
    </div>
    )
}