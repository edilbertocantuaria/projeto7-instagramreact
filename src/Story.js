export default function Story(){
    const story =[
        {
            src:"assets/imgs/stories/9gag.png",
            user:"9gag",
        },

        {
            src:"assets/imgs/stories/meowed.png",
            user:"meowed",
        },

        {
            src:"assets/imgs/stories/barked.png",
            user:"barked.",
        },

        {
            src:"assets/imgs/stories/nathanwpyle.png",
            user:"nathanwpyle",
        },

        {
            src:"assets/imgs/stories/wawawiwacomicsa.png",
            user:"wawawiwacomicsa",
        },

        {
            src:"assets/imgs/stories/respondeai.png",
            user:"respondeai",
        },
                
        {
            src:"assets/imgs/stories/filomoderna.png",
            user:"filomoderna",
        },

        {
            src:"assets/imgs/stories/memeriagourmet.png",
            user:"memeriagourmet",
        },
    ]

    return(
        <div class="stories">
{story.map((info) => (
     <div class="story">
      <img
          class="backgroundStories"
          src="assets/imgs/stories/story_background.png"
        />
        <img class="perfilStories" src={info.src} />

        <h1>{info.user}</h1>
    </div>
  ))}
</div>
)
}