export default function Sugestao(){    

    const sugestao =[
        {
            src: "assets/imgs/quemPublicou/rodrigo_hilberth_perfil.jpg",
            user: "rodrigohilberth",
            status: "Segue você"
        },
    
        {
            src: "assets/imgs/quemPublicou/britney_spears_perfil.jpg",
            user: "britneyspears",
            status: "Segue você"
        },
    
        {
            src: "assets/imgs/quemPublicou/bill_gates_perfil.jpg",
            user: "thisisbillgates",
            status: "Dos seus contatos"
        },
    
        {
            src: "assets/imgs/quemPublicou/apple_perfil.jpg",
            user: "apple",
            status: "Dos seus contatos"
        },
    
        {
            src: "assets/imgs/quemPublicou/gloria_groove_perfil.jpg",
            user: "gloriagroove",
            status: "Te visitou recentemente"
        },
    ]

    return(
        <>
            {sugestao.map ((info) =>
            <div class="sugestao">  
        <div class="centVertHor2">
          <div class="pessoaSugerida">
            <div class="espHoriz espEsqPubli2">
                              <img src={info.src} class="fotoPublicador" />
                             <div class="espEsqPubli">
                              <h1 class="publi3">{info.user}</h1>
                              <h2>{info.status}</h2>
                            </div>                        
            </div>
          </div>
          <div class="seguir centVert3">
            <button>Seguir</button>
          </div>
        </div>
        </div>
            )}
        </>
    )
}