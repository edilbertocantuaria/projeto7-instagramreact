import Sugestoes from './Sugestoes'
import Usuario from './Usuario'


export default function SideBar(){
    return(
      <div class="cantoDireito">
      <div class="sideBar centHor">
        <Usuario/>
        <Sugestoes/>

        <div class="sobreInstagram">
          <h1>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags •
            Idioma
          </h1>
          <h1>© 2021 INSTAGRAM DO FACEBOOK</h1>
        </div>
      </div>

    </div>
    )
}