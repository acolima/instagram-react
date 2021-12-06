export default function Stories(){
  const stories = [
    {imagem: "driven.education", nomeUsuario: "driven.education"},
    {imagem: "harrystyles", nomeUsuario: "harrystyles"},
    {imagem: "dojacat", nomeUsuario: "dojacat"},
    {imagem: "imaginedragons", nomeUsuario: "imaginedragons"},
    {imagem: "niallhoran", nomeUsuario: "niallhoran"},
    {imagem: "george_ezra", nomeUsuario: "george_ezra"},
    {imagem: "silksonic", nomeUsuario: "silksonic"},
    {imagem: "lizzobeeating", nomeUsuario: "lizzobeeating"},
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
        <img src={`assets/img/icons/${imagem}.jpg`} alt={`${nomeUsuario}`}/>
      </div>
      <div class="usuario">
        {nomeUsuario}
      </div>
    </div>
  );
}