export default function Usuario({ imagem, nomeUsuario, nome }) {
  return (
    <div class="usuario">
      <img src={`assets/img/icons/${imagem}.jpg`} alt={`${nomeUsuario}`} />
      <div class="texto">
        <strong>{nomeUsuario}</strong>
        {nome}
      </div>
    </div>
  );
}