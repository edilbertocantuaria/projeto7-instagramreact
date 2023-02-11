export default function NavBar(){
    return(
        <div class="header">
            
        <div class="barraSuperior SpaceAround">
          <div class="menu e">
            <div><ion-icon name="logo-instagram"></ion-icon></div>
            <div class="barraVertical"></div>
            <div>
              <img src="assets/instagramNome.png" />
            </div>
          </div>
  
          <div class="pesquisar">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="menu d">
            <div><ion-icon name="paper-plane-outline"></ion-icon></div>
            <div>
              <ion-icon name="compass-outline" class="menuDireito"></ion-icon>
            </div>
            <div>
              <ion-icon name="heart-outline" class="menuDireito"></ion-icon>
            </div>
            <div>
              <ion-icon name="person-outline" class="menuDireito"></ion-icon>
            </div>
          </div>
        </div>
        
        <div class="barraSuperiorMobile centVertHor">
          <div><ion-icon name="logo-instagram"></ion-icon></div>
  
          <div><img src="assets/instagramNome.png" /></div>
  
          <div><ion-icon name="paper-plane-outline"></ion-icon></div>
        </div>
      </div>
    )
}