import Post from "./Post"

export default function Posts(){
  const posts = [
    {
      imagemPerfil: "nbcbrooklyn99",
      nomeUsuario: "nbcbrooklyn99", 
      post: "nbcbrooklyn99",
      curtidoPor: "nbc",
      curtidas: "519.765",
      tipo: "imagem",
    },
    {
      imagemPerfil: "sexeducation", 
      nomeUsuario: "sexeducation", 
      post: "sexeducation",
      curtidoPor: "netflix",
      curtidas: "451.422",
      tipo: "imagem"
    },
    {
      imagemPerfil: "zoeysplaylist", 
      nomeUsuario: "zoeysplaylist", 
      post: "zoeysplaylist",
      curtidoPor: "nbc",
      curtidas: "6.406",
      tipo: "imagem"
    },
    {
      imagemPerfil: "nbcthegoodplace", 
      nomeUsuario: "nbcthegoodplace", 
      post: "nbcthegoodplace",
      curtidoPor: "nbc",
      curtidas: "27.421",
      tipo: "imagem"
    },
    {
      imagemPerfil: "strangerthingstv", 
      nomeUsuario: "strangerthingstv", 
      post: "strangerthingstv",
      curtidoPor: "netflix",
      curtidas: "953.816",
      tipo: "imagem"
    },
    {
      imagemPerfil: "lockeandkeynetflix", 
      nomeUsuario: "lockeandkeynetflix", 
      post: "lockeandkeynetflix",
      curtidoPor: "netflix",
      curtidas: "68.160",
      tipo: "imagem"
    },
    {
      imagemPerfil: "howtogetawaywithmurder", 
      nomeUsuario: "howtogetawaywithmurder", 
      post: "howtogetawaywithmurder",
      curtidoPor: "abc",
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
          curtidoPor={post.curtidoPor}
          curtidas={post.curtidas}
          tipo={post.tipo}
        />
      ))}
    </div>
  );
}