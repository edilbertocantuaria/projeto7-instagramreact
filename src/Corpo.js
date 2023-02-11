import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo(){
    return(
        <main>
            <div class="cantoEsquerdo">
            <Stories />
            <Posts />
            </div>
            <SideBar/>
        </main>
    )
}