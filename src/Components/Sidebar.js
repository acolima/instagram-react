export default function Sidebar(){
  const profiles = [
    {
      image: "bad.vibes.memes.svg",
      username: "bad.vibes.memes",
      reason: "Novo no Instagram"
    },
    {
      image: "chibirdart.svg",
      username: "chibirdart",
      reason: "Segue você"
    },
    {
      image: "razoesparaacreditar.svg",
      username: "razoesparaacreditar",
      reason: "Novo no Instagram"
    },
    {
      image: "adorable_animals.svg",
      username: "adorable_animals",
      reason: "Novo no Instagram"
    },
    {
      image: "smallcutecats.svg",
      username: "smallcutecats",
      reason: "Segue você"
    },

  ]

  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {profiles.map((profile) => (
          <Profile
            image={profile.image}
            username={profile.username}
          />
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}

function Profile(props){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${props.image}`} />
        <div class="texto">
          <div class="nome">{props.username}</div>
            <div class="razao">Segue você</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}