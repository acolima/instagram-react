export default function Post({imagemPerfil, nomeUsuario, post, curtidoPor, curtidas, tipo}){
  return(
    <div class="post">
      <Topo imagemPerfil={imagemPerfil} nomeUsuario={nomeUsuario}/>
      <Conteudo post={post} tipo={tipo}/>
      <Fundo curtidoPor={curtidoPor} curtidas={curtidas}/>
    </div>
  );
}
  
function Topo({imagemPerfil, nomeUsuario}){
	return(
  	<div class="topo">
    	<div class="usuario">
      	<img src={`assets/img/icons/${imagemPerfil}.jpg`} alt={nomeUsuario}/>
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
  
function Fundo({curtidoPor, curtidas}){
  return(
    <div class="fundo">
      <Acoes/>
      <Curtidas curtidoPor={curtidoPor} curtidas={curtidas}/>
    </div>
  );
}
  
function Acoes(){
  return(
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
  );
}
  
function Curtidas({curtidoPor, curtidas}){
  return(
    <div class="curtidas">
      <img src={`assets/img/icons/${curtidoPor}.jpg`} alt={`${curtidoPor}`}/>
      <div class="texto">
        Curtido por <strong>{curtidoPor}</strong> e <strong>outras {curtidas} pessoas</strong>
      </div>
    </div>
  );
}