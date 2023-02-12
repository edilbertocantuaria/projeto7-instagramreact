import React from "react";

export default function Post(props){
  const {
    fotoUser,
    user,
    localizacao,
    srcPost,
    fotoCurtiu,
    quemCurtiu,
    numCurtidas,
    salvo,
    curtido,

  } = props

  const [salvarPost, setSalvarPost] = React.useState(salvo);
  const [liked, setLiked] = React.useState(curtido);
  const [contador, setContador]=React.useState(numCurtidas);


function daLike(){
  if (liked === true){
    setContador(contador-1)
  } else {
    setContador(contador+1)
  }
  setLiked(!liked)
}

  return(
             <div data-test="post" class="postagem">
             
             <div class="parteSup">
               <div class="publicador espHoriz espEsqPubli">
                 <img  data-test="post-image"
                   src={fotoUser}
                   class="fotoPublicador"
                 />
                 <div class="centVert2 publi">
                   <h1>{user}</h1>
                   <h2>{localizacao}</h2>
                 </div>
               </div>
               <div class="opcoes espDirPubli centVertHor">
                 <ion-icon
                   name="ellipsis-horizontal"
                   class="iconePubli"
                 ></ion-icon>
               </div>
             </div>
             <div class="post centVertHor">
               <img src={srcPost} class="post" />
             </div>
             <div class="parteInf">
               <div class="reacoes espHoriz2">
                 
                 <div class="menu ccc espEsqPubli">

                 <div><ion-icon
                  data-test="like-post"
                  onClick ={() => daLike()}
                  name={liked ? "heart" : "heart-outline"}
                  // className={liked? "redheart md hydrated":"redheart md hydrated"}
                  class={liked? "redHeart md hydrated":"whiteHeart md hydrated"}>
                  </ion-icon></div>
                   <div><ion-icon name="chatbubble-outline"></ion-icon></div>
                   <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                 </div>
                 <div class="salvar espDirPubli">
                   <ion-icon 
                   data-test="save-post" 
                   onClick={() => setSalvarPost(!salvarPost)}
                   name={salvarPost? "bookmark" : "bookmark-outline"}
                   >
                    </ion-icon>                
                 </div>
               </div>
               
               <div class="curtidas espHoriz espEsqPubli">
                 <img
                   src={fotoCurtiu}
                   class="fotoCurtiu"
                 />
                 <h1 data-test="likes-number" class="curtida">
                 Curtido por <span> {quemCurtiu}</span> e <span> outras {contador} pessoas</span>
                 </h1>
               </div>
               
             </div>
             
           </div>
)
}