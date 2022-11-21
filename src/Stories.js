export default function Stories(){
const arrStories=[
{imagem: "assets/img/9gag.svg", user: "9gag"},
{imagem: "assets/img/meowed.svg", user: "meowed"},
{imagem: "assets/img/barked.svg", user: "barked"},
{imagem: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
{imagem: "assets/img/wawawicomics.svg", user: "wawawicomics"},
{imagem: "assets/img/respondeai.svg", user: "respondeai"},
{imagem: "assets/img/filomoderna.svg", user: "filomoderna"},
{imagem: "assets/img/memeriagourmet.svg", user: "memeriagourmet"},
]

return (

    <div className="stories">
{arrStories.map( (n) => 
    <div className="story">
    <div className="imagem">
      <img src= {n.imagem}/>
    </div>
    <div className="usuario">
     {n.user}
    </div>
  </div>
)}

    </div>
)}
