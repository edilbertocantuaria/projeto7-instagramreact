export default function Posts(){
    return(

        <div class="publicacoes">
          <div class="postagem">
           
            <div class="parteSup">
              <div class="publicador espHoriz espEsqPubli">
                <img
                  src="assets/imgs/quemPublicou/frases_pvoce_perfil.jpg"
                  class="fotoPublicador"
                />
                <div class="centVert2 publi">
                  <h1>frases_pvoce</h1>
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
              <img src="assets/imgs/feed/frases_pvoce_20221008.jpeg" />
            </div>
            <div class="parteInf">
              <div class="reacoes espHoriz2">
                
                <div class="menu ccc espEsqPubli">
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="salvar espDirPubli">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
              
              <div class="curtidas espHoriz espEsqPubli">
                <img
                  src="assets/imgs/stories/respondeai.png"
                  class="fotoCurtiu"
                />
                <h1 class="curtida">
                  Curtido por <span> respondeai </span> e
                  <span>outras 101.523 pessoas </span>
                </h1>
              </div>
              <div class="comentario curtida espHoriz2 espEsqPubli espDirPubli">
                <h1>
                  <span>edilbertices</span> você aqui,
                  <span class="mencao">@mozaoimaginario</span>
                </h1>
                <ion-icon name="heart" class="heartComent redHeart"></ion-icon>
              </div>
              <div class="comentario curtida espHoriz2 espEsqPubli espDirPubli">
                <h1>
                  <span>mozaoimagionario</span> woont, obrigado pelo reconhecimento! É muito difícil! 
                 </h1>
                <ion-icon name="heart-outline" class="heartComent"></ion-icon>
              </div>
              <div class="comentario curtida maisComentario espDirPubli espEsqPubli">
                <h1>ver mais 1.350 comentários</h1>
              </div>
                <div class="comentar espHoriz2 espDirPubli espEsqPubli">
                    <ion-icon name="happy-outline"></ion-icon>
                    <div class="escreverComentário">
                        
                        <input type="text" placeholder="Digite um comentário" />
                      </div>
                      <button class="animacao">Comentar</button>
                </div>
                
              </div>
              
            </div>
            

            <div class="postagem">
             
              <div class="parteSup">
                <div class="publicador espHoriz espEsqPubli">
                  <img
                    src="assets/imgs/quemPublicou/diogoparodias_perfil.jpg"
                    class="fotoPublicador"
                  />
                  <div class="centVert2 publi">
                    <h1>diogoparodias</h1>
                    <h2>Onde a inveja não se cria</h2>
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
                <video
                  controls
                  autoplay
                  muted
                  preload
                  loop
                  src="assets/imgs/feed/anitta_pabllo_diogoparodias.mp4"
                  type="video/mp4"
                  class="post"
                ></video>
              </div>
              <div class="parteInf">
                <div class="reacoes espHoriz2">
                  
                  <div class="menu ccc espEsqPubli">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="salvar espDirPubli">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>
                
                <div class="curtidas espHoriz espEsqPubli">
                  <img
                    src="assets/imgs/stories/respondeai.png"
                    class="fotoCurtiu"
                  />
                  <h1 class="curtida">
                    Curtido por <span> respondeai </span> e
                    <span>outras 101.523 pessoas </span>
                  </h1>
                </div>
                
              </div>
              
            </div>
            

            <div class="postagem">
             
              <div class="parteSup">
                <div class="publicador espHoriz espEsqPubli">
                  <img
                    src="assets/imgs/quemPublicou/edilbertices_perfil.jpg"
                    class="fotoPublicador"
                  />
                  <div class="centVert2 publi">
                    <h1>edilbertices</h1>
                    <h2>Dóndé cótô</h2>
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
                <img src="assets/imgs/feed/gato_preto.jpg" class="post" />
              </div>
              <div class="parteInf">
                <div class="reacoes espHoriz2">
                  
                  <div class="menu ccc espEsqPubli">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div class="salvar espDirPubli">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>
                
                <div class="curtidas espHoriz espEsqPubli">
                  <img
                    src="assets/imgs/quemPublicou/edilbertices_perfil.jpg"
                    class="fotoCurtiu"
                  />
                  <h1 class="curtida">
                    Curtido por <span> respondeai </span> e
                    <span>outras 101.523 pessoas </span>
                  </h1>
                </div>
                
              </div>
              
            </div>
            
          </div>
    )
}