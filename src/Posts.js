import React from 'react'
export default function Posts(){
    const arrPosts=[
        {imgUsuario :"assets/img/meowed.svg", nomeUsuario:"meowed", publicacao:"assets/img/gato-telefone.svg",
        fotoQuemCurtiu:"assets/img/respondeai.svg", quemCurtiu:"respondeai", qtdCurtidas:"12.345"
         },
         
        {imgUsuario :"assets/img/barked.svg", nomeUsuario:"barked", publicacao:"assets/img/dog.svg",
        fotoQuemCurtiu:"assets/img/adorable_animals.svg", quemCurtiu:"adorable_animals", qtdCurtidas:"99.159"
         }
        ]


        const coracaoBranco =<ion-icon name="heart-outline" class="coracaoBranco" onClick={curtirPost}></ion-icon>
        const [curtida, setCurtida] = React.useState(coracaoBranco)


      const nsalvar=<ion-icon name="bookmark-outline" class="semSalvar" onClick={salvarPost}></ion-icon>
      const [salvar, setSalvar] = React.useState(nsalvar)



        function salvarPost(){
          let salvo = <ion-icon name="bookmark" class="salvo" onClick={dessalvarPost}></ion-icon>
          setSalvar(salvo);
        }

        function dessalvarPost(){
          let salvo = nsalvar
          setSalvar(salvo);
        }

        function curtirPost(){
          let coracaoCurtido = <ion-icon name="heart" class="coracaoCurtido" onClick={descurtirPost}></ion-icon>
         // aumentarCurtida();
          setCurtida(coracaoCurtido);
        }

        function descurtirPost(){
          let coracaoCurtido = coracaoBranco;
          //reduzirCurtida();
          setCurtida(coracaoCurtido);
        }


    return (
        <div className="posts">

        {arrPosts.map( (n) =>
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={n.imgUsuario}/>
             {n.nomeUsuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src={n.publicacao} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                {curtida}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                {salvar}
              </div>
            </div>

            <div className="curtidas">
              <img src={n.fotoQuemCurtiu} />
              <div className="texto">
                Curtido por <strong>{n.quemCurtiu}</strong> e <strong>outras {n.qtdCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
)}
      </div>
    )
}