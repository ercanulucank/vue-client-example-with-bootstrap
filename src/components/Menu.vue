<template>
  <div>
    <div class="lime-sidebar">
    <div class="lime-sidebar-inner slimscroll">
        <ul class="accordion-menu">
            <li class="sidebar-title">
                İşlemler
            </li>
            <li>
                <a href=""><i class="material-icons">dashboard</i>Anasayfa</a>
            </li>
            <li>
                <a href=""><i class="material-icons">person_outline</i>Profil</a>
            </li>
        </ul>
    </div>
</div>
<div class="theme-settings-sidebar">
    <div class="theme-settings-inner">
        <h3 class="theme-sidebar-title">Tema Seç</h3>
        <p class="themes-info">Bir tema seçiniz</p>
        <a class="theme-item active" href="#">
            <img src="" alt="">
            <h4 class="theme-title">Açık Tema</h4>
        </a>
        <a class="theme-item" href="#">
            <div class="coming-theme">Yakında</div>
            <img src="" alt="">
            <h4 class="theme-title">Koyu Tema</h4>
        </a>
    </div>
</div>
    <div class="lime-header">
      <nav class="navbar navbar-expand-lg">
        <section class="material-design-hamburger">
          <a href=""><span class="material-design-hamburger__layer"></span></a>
        </section>
        <a to="/" class="navbar-brand">HPS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0 search">
                <input class="form-control mr-sm-2" type="search" placeholder="Ara..." aria-label="Search">
            </form>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <router-link to="/" class="navbar-link"><i class="material-icons">home</i> Anasayfa</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link to="/giris_yap" class="navbar-link"><i class="material-icons">person</i> Giriş Yap</router-link>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
