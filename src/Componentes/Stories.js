export default function Stories(){
  const stories = [
    {imagem: "driven.education.jpg", nomeUsuario: "driven.education"},
    {imagem: "harrystyles.jpg", nomeUsuario: "harrystyles"},
    {imagem: "dojacat.jpg", nomeUsuario: "dojacat"},
    {imagem: "imaginedragons.jpg", nomeUsuario: "imaginedragons"},
    {imagem: "niallhoran.jpg", nomeUsuario: "niallhoran"},
    {imagem: "george_ezra.jpg", nomeUsuario: "george_ezra"},
    {imagem: "silksonic.jpg", nomeUsuario: "silksonic"},
    {imagem: "lizzobeeating.jpg", nomeUsuario: "lizzobeeating"},
  ]
  
  return(
    <div class="stories">
      {stories.map((story) => (
        <Story imagem={story.imagem} nomeUsuario={story.nomeUsuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story({imagem, nomeUsuario}){
  return(
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/icons/${imagem}`} alt={`${nomeUsuario}`}/>
      </div>
      <div class="usuario">
        {nomeUsuario}
      </div>
    </div>
  );
}