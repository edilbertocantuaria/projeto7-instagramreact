export default function Posts(){
    const arrPosts=[
        {imgUsuario :"assets/img/meowed.svg", nomeUsuario:"meowed", publicacao:"assets/img/gato-telefone.svg",
        fotoQuemCurtiu:"assets/img/adorable_animals.svg", quemCurtiu:"respondeai", qtdCurtidas:"12.345"
         },
         
        {imgUsuario :"assets/img/barked.svg", nomeUsuario:"barked", publicacao:"assets/img/dog.svg",
        fotoQuemCurtiu:"assets/img/adorable_animals.svg", quemCurtiu:"adorable_animals", qtdCurtidas:"99.159"
         }
        ]
         
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
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={n.quemCurtiu} />
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