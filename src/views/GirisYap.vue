<template>
  <div class="login-page">
            <div class="login-container">
                <div class="row">
                    <div class="col-lg-4 col-md-5 col-sm-9 lfh">
                        <div class="card login-box" id="giris_yap_block">
                            <div class="card-body">
                                <h4 class="card-title text-center">Giriş Yap</h4>
                                <form name="giris_yap">
                                    <div class="form-group">
                                    	<label>Personel Adı</label>
                                        <input type="text" class="form-control" name="kullanici_adi">
                                    </div>
                                    <div class="form-group">
                                    	<label>Şifre</label>
                                        <input type="password" class="form-control" name="sifre">
                                    </div>
                                    <router-link to="/" class="btn btn-primary btn-block">Giriş Yap</router-link>
                                    <footer class="mt-4 text-center text-muted">
                                      <small>Copyright &copy; 2020</small>
                                    </footer>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  name: 'GirisYap'
}
</script>
