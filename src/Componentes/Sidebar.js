import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div>
        <Usuario imagem="caapeeps" nomeUsuario="caapeeps" nome="Caroline Oliveira" />
        <Sugestoes />
        <p class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </p>
      </div>
    </div>
  );
}