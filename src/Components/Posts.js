export default function Posts(){
  const posts = [
    {
      imageProfile: "meowed.svg",
      username: "meowed", 
      mediaPost: "gato-telefone.svg",
      imageLike: "respondeai",
      likes: "101.523"
    },
    {
      imageProfile: "barked.svg", 
      username: "barked", 
      mediaPost: "dog.svg",
      imageLike: "respondeai",
      likes: "81.523"
    }
  ]

  return(
    <div class="posts">
      {posts.map((post) => (
        <Post 
          imageProfile={post.imageProfile}
          username={post.username}
          mediaPost={post.mediaPost}
          imageLike={post.imageLike}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

function Post(props){
  return(
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.imageProfile}`} />
          {props.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={`assets/img/${props.mediaPost}`}/>
      </div>

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
          <img src="assets/img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>{props.imageLike}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
        </div>
      </div>
    </div>
  );
}