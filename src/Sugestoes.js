export default function Sugestoes(){

    const arrSugestao=[
        {imgUsuario :"assets/img/bad.vibes.memes.svg", nomeUsuario:"bad.vibes.memes", status:"Segue você"},
         
        {imgUsuario :"assets/img/chibirdart.svg", nomeUsuario:"chibirdart", status:"Segue você"},
        
        {imgUsuario :"assets/img/razoesparaacreditar.svg", nomeUsuario:"razoesparaacreditar", status:"Novo no Instagram"},
        
        {imgUsuario :"assets/img/adorable_animals.svg", nomeUsuario:"adorable_animals", status:"Segue você"},
        
        {imgUsuario :"assets/img/smallcutecats.svg", nomeUsuario:"smallcutecats", status:"Novo no instagram"}, 
         
     ]
         

    return(
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {arrSugestao.map ( (n) =>
        <div className="sugestao">
          <div className="usuario">
            <img src={n.imgUsuario} />
            <div className="texto">
              <div className="nome">{n.nomeUsuario}</div>
              <div className="razao">{n.status}</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>
)}
      </div>
    )
}