export default function Stories(){
  const stories = [
    {image: "9gag.svg", username: "9gag"},
    {image: "meowed.svg", username: "meowed"},
    {image: "barked.svg", username: "barked"},
    {image: "nathanwpylestrangeplanet.svg", username: "nathanwpylestrangeplanet"},
    {image: "wawawicomics.svg", username: "wawawicomics"},
    {image: "respondeai.svg", username: "respondeai"},
    {image: "filomoderna.svg", username: "filomoderna"},
    {image: "memeriagourmet.svg", username: "memeriagourmet"},

  ]
  
  return(
    <div class="stories">
      {stories.map((st) => (
        <Story image={st.image} username={st.username} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props){
  return(
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.image}`}/>
      </div>
      <div class="usuario">
        {props.username}
      </div>
    </div>
  );
}