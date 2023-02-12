import Post from "./Post"

export default function Posts(){
    const post =[
        {
            fotoUser:"assets/imgs/quemPublicou/frases_pvoce_perfil.jpg",
            user:"frases_pvoce",
            localizacao:"",
            srcPost:"assets/imgs/feed/frases_pvoce_20221008.jpeg",
            fotoCurtiu:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
            quemCurtiu:"edilbertices ",
            numCurtidas:101523,
            salvo: true,
            curtido: true
        },
    
        {
            fotoUser:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
            user:"edilbertices",
            localizacao:"Torre de TV - Brasília",
            srcPost:"assets/imgs/feed/torre_de_tv.jpeg",
            fotoCurtiu:"assets/imgs/quemPublicou/gloria_groove_perfil.jpg",
            quemCurtiu:"gloriagroove ",
            numCurtidas:105634,
            salvo: false,
            curtido: false
        },
    
        {
            fotoUser:"assets/imgs/quemPublicou/edilbertices_perfil.jpg",
            user:"edilbertices",
            localizacao:"Dóndé cótô",
            srcPost:"assets/imgs/feed/gato_preto.jpg",
            fotoCurtiu:"assets/imgs/stories/respondeai.png",
            quemCurtiu:"respondeai ",
            numCurtidas:596782,
            salvo: false,
            curtido: false
        },
    
        
    ]
    return(
        <div class="publicacoes">
    {post.map(info => ( 
            <Post
            fotoUser={info.fotoUser}
            user={info.user}
            localizacao={info.localizacao}
            srcPost={info.srcPost}
            fotoCurtiu={info.fotoCurtiu}
            quemCurtiu={info.quemCurtiu}
            numCurtidas={info.numCurtidas}
            salvo={info.salvo}
            curtido={info.curtido}

        />
    ))}
    </div>
    )
}