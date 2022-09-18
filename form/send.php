<?php
require_once(__DIR__ . '/config/config.php');
$send = new Monaka\Send();
$send->run($adminMail, $adminName, $returnMailTitle, $returnMailHeader, $returnMailFooter);
?>






<?php include('../header.php') ?>





<main class="main">
  <!-- hero -->
  <section class="hero">
    <div class="hero__inner">
      <div class="text">
        <h2>お問い合わせ</h2>
      </div>
    </div>
  </section>
  <!-- /.hero -->

  <!-- breadcrumb -->
  <section class="breadcrumb">
    <div class="breadcrumb__inner inner">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          お問い合わせ
        </li>
      </ul>
    </div>
  </section>
  <!-- /.breadcrumb -->


  <!-- send -->
  <section class="send">
    <div class="send__inner inner">
      <div class="container">
        <h2>【送信完了】</h2>
        <p class="completion">
          <?php echo nl2br(h($completionMessage)); ?>
        </p>
        <div class="submit_area">
          <input class="single" type="button" value="TOPに戻る" onclick="window.location='<?php echo $returnUrl; ?>';">
        </div>
      </div>
    </div>
  </section>
  <!-- /.send -->


</main>






<?php include("../footer.php") ?>