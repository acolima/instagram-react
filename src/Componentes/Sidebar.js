export default function Sidebar(){
  return (
    <div class="sidebar">
      <Usuario imagem="caapeeps" nomeUsuario="caapeeps" nome="Caroline Oliveira"/>
      <Sugestoes/>
      <Links/>
      <Copyright/>
    </div>
  );
}

function Usuario({imagem, nomeUsuario, nome}){
  return(
    <div class="usuario">
        <img src={`assets/img/icons/${imagem}.jpg`} alt={`${nomeUsuario}`} />
        <div class="texto">
          <strong>{nomeUsuario}</strong>
          {nome}
        </div>
      </div>
  );
}

function Sugestoes(){
  const profiles = [
    {
      imagem: "zayn",
      nomeUsuario: "zayn",
      reason: "Segue você"
    },
    {
      imagem: "littlemix",
      nomeUsuario: "littlemix",
      reason: "Segue você"
    },
    {
      imagem: "jamesbaymusic",
      nomeUsuario: "jamesbaymusic",
      reason: "Novo no Instagram"
    },
    {
      imagem: "gloriagroove",
      nomeUsuario: "gloriagroove",
      reason: "Novo no Instagram"
    },
    {
      imagem: "officialqueenmusic",
      nomeUsuario: "officialqueenmusic",
      reason: "Segue você"
    },
  ]
  return(
    <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {profiles.map((perfil) => (
          <Perfil
            imagem={perfil.imagem}
            nomeUsuario={perfil.nomeUsuario}
            reason={perfil.reason}
          />
        ))}
      </div>
  );
}

function Perfil({imagem, nomeUsuario, reason}){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/icons/${imagem}.jpg`} alt={`${nomeUsuario}`}/>
        <div class="texto">
          <div class="nome">{nomeUsuario}</div>
            <div class="razao">{reason}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}

function Links(){
  return(
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyright(){
  return(
    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );
}