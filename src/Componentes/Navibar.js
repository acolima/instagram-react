export default function Navibar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <InstagramMobile />
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src="assets/img/logo.png" alt="logo" />
    </div>
  );
}

function LogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}

function InstagramMobile() {
  return (
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" alt="logo mobile" />
    </div>
  );
}