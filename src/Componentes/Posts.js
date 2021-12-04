export default function Posts(){
  const posts = [
    {
      imagemPerfil: "nbcbrooklyn99.jpg",
      nomeUsuario: "nbcbrooklyn99", 
      post: "nbcbrooklyn99",
      iconCurtidas: "nbc",
      curtidas: "519.765",
      tipo: "imagem"
    },
    {
      imagemPerfil: "sexeducation.jpg", 
      nomeUsuario: "sexeducation", 
      post: "sexeducation",
      iconCurtidas: "netflix",
      curtidas: "451.422",
      tipo: "imagem"
    },
    {
      imagemPerfil: "zoeysplaylist.jpg", 
      nomeUsuario: "zoeysplaylist", 
      post: "zoeysplaylist",
      iconCurtidas: "nbc",
      curtidas: "6.406",
      tipo: "imagem"
    },
    {
      imagemPerfil: "nbcthegoodplace.jpg", 
      nomeUsuario: "nbcthegoodplace", 
      post: "nbcthegoodplace",
      iconCurtidas: "nbc",
      curtidas: "27.421",
      tipo: "imagem"
    },
    {
      imagemPerfil: "strangerthingstv.jpg", 
      nomeUsuario: "strangerthingstv", 
      post: "strangerthingstv",
      iconCurtidas: "netflix",
      curtidas: "953.816",
      tipo: "imagem"
    },
    {
      imagemPerfil: "lockeandkeynetflix.jpg", 
      nomeUsuario: "lockeandkeynetflix", 
      post: "lockeandkeynetflix",
      iconCurtidas: "netflix",
      curtidas: "68.160",
      tipo: "imagem"
    },
    {
      imagemPerfil: "howtogetawaywithmurder.jpg", 
      nomeUsuario: "howtogetawaywithmurder", 
      post: "howtogetawaywithmurder",
      iconCurtidas: "abc",
      curtidas: "301.759",
      tipo: "video"
    }
  ]

  return(
    <div class="posts">
      {posts.map((post) => (
        <Post 
          imagemPerfil={post.imagemPerfil}
          nomeUsuario={post.nomeUsuario}
          post={post.post}
          iconCurtidas={post.iconCurtidas}
          curtidas={post.curtidas}
          tipo={post.tipo}
        />
      ))}
    </div>
  );
}

function Post({imagemPerfil, nomeUsuario, post, iconCurtidas, curtidas, tipo}){
  return(
    <div class="post">
      <Topo imagemPerfil={imagemPerfil} nomeUsuario={nomeUsuario}/>
      <Conteudo post={post} tipo={tipo}/>
      <Fundo iconCurtidas={iconCurtidas} curtidas={curtidas}/>
    </div>
  );
}

function Topo({imagemPerfil, nomeUsuario}){
  return(
    <div class="topo">
        <div class="usuario">
          <img src={`assets/img/icons/${imagemPerfil}`} alt={nomeUsuario}/>
          {nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  );
}

function Conteudo({post, tipo}){
  return(
    <div class="conteudo">
      {(tipo === "imagem")? 
        <img src={`assets/img/posts/${post}.jpg`} alt={post}/> : 
        <video autoPlay muted loop>
          <source src={`assets/videos/${post}.mp4`} type="video/mp4"/>
          <source src={`assets/videos/${post}.ogg`} type="video/ogg" /> 
        </video>
      }
    </div>
  );
}

function Fundo({iconCurtidas, curtidas}){
  return(
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={`assets/img/icons/${iconCurtidas}.jpg`} alt={`${iconCurtidas}`}/>
          <div class="texto">
            Curtido por <strong>{iconCurtidas}</strong> e <strong>outras {curtidas} pessoas</strong>
          </div>
      </div>
    </div>
  );
}
