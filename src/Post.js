import React from "react";


export default function Post(){
  const [salvarPost, setSalvarPost] = React.useState(false);
  const [curtirPost, setCurtirPost] = React.useState(false);

const post =[
    {
        fotoUser:"assets/imgs/quemPublicou/frases_pvoce_perfil.jpg",
        user:"frases_pvoce",
        localizacao:"",
        srcPost:"assets/imgs/feed/frases_pvoce_20221008.jpeg",
        fotoCurtiu:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
        quemCurtiu:"edilbertices ",
        numCurtidas:"101.523",
    },

    {
        fotoUser:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
        user:"edilbertices",
        localizacao:"Torre de TV - Brasília",
        srcPost:"assets/imgs/feed/torre_de_tv.jpeg",
        fotoCurtiu:"assets/imgs/quemPublicou/gloria_groove_perfil.jpg",
        quemCurtiu:"gloriagroove ",
        numCurtidas:"105.634",
    },

    {
        fotoUser:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
        user:"edilbertices",
        localizacao:"Dóndé cótô",
        srcPost:"assets/imgs/feed/gato_preto.jpg",
        fotoCurtiu:"assets/imgs/stories/respondeai.png",
        quemCurtiu:"respondeai ",
        numCurtidas:"596.782",
    },

    
]
return(
    <>
{post.map((info) => (
             <div data-test="post" class="postagem">
             
             <div class="parteSup">
               <div class="publicador espHoriz espEsqPubli">
                 <img  data-test="post-image"
                   src={info.fotoUser}
                   class="fotoPublicador"
                 />
                 <div class="centVert2 publi">
                   <h1>{info.user}</h1>
                   <h2>{info.localizacao}</h2>
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
               <img src={info.srcPost} class="post" />
             </div>
             <div class="parteInf">
               <div class="reacoes espHoriz2">
                 
                 <div class="menu ccc espEsqPubli">
                   {/* <ion-icon data-test="like-post" name="heart-outline"
                    
                    onClick={() => setCurtirPost(!curtirPost)}
                    ></ion-icon> */}
                    <ion-icon data-test="like-post" name={curtirPost ? "heart" : "heart-outline"}
            class={`${curtirPost ? "redHeart" : ""}`}
            onClick={() => setCurtirPost(!curtirPost)}
  ></ion-icon>
                   <ion-icon name="chatbubble-outline"></ion-icon>
                   <ion-icon name="paper-plane-outline"></ion-icon>
                 </div>
                 <div class="salvar espDirPubli">
                   <ion-icon data-test="save-post" name={salvarPost [info.srcPost]? "bookmark" : "bookmark-outline"}
                   className={`${salvarPost [info.srcPost]? "postSalvo" : ""}`}
                   onClick={() => setSalvarPost( {salvarPost, [info.srcPost]: !salvarPost[info.srcPost]})}></ion-icon>
                 </div>
               </div>
               
               <div class="curtidas espHoriz espEsqPubli">
                 <img
                   src={info.fotoCurtiu}
                   class="fotoCurtiu"
                 />
                 <h1 data-test="likes-number" class="curtida">
                 Curtido por <span> {info. quemCurtiu}</span> e <span> outras {info.numCurtidas} pessoas</span>
                 </h1>
               </div>
               
             </div>
             
           </div>
  ))}
</>
)
}