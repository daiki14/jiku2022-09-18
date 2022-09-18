<?php
require_once(__DIR__ . '/config/config.php');
$app = new Monaka\Confirmation();
$app->run($adminMail, $ext_denied, $EXT_ALLOWS, $maxmemory, $max, $_SERVER["CONTENT_LENGTH"]);
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


  <!-- config -->
  <section class="config">
    <div class="config__inner inner">
      <div class="container">
        <?php if (!empty($app->seriousError)) : ?>
          <p class="confirmation">
            <?php echo $app->seriousError; ?>
          </p>
        <?php else : ?>
          <?php if (empty($app->err)) : ?>
            <p class="confirmation">下記内容で送信してよろしいですか？</p>
          <?php else : ?>
            <p class="confirmation">
              入力に誤りがあります。エラーの内容をご確認いただき、<br>
              戻るボタンから修正をお願いいたします。
            </p>
          <?php endif; ?>
        <?php endif; ?>

        <div class="submit_content">
          <?php if (!empty($_SESSION["submitContent"]) && empty($app->seriousError)) : ?>
            <form action="send.php" method="post" enctype="multipart/form-data">
              <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                <dl>
                  <dt><?php echo h($key); ?></dt>
                  <dd>
                    <p>
                      <?php
                      if (empty($app->err[$key])) {
                        if (strpos($value, "\n") !== false) {
                          echo nl2br(h($value));
                        } else {
                          echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                        }
                      } else {
                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                      }
                      ?>
                    </p>
                  </dd>
                </dl>
              <?php endforeach; ?>
              <?php $_SESSION["submitFile"] = array(); ?>
              <?php foreach ($_SESSION["fileData"] as $key => $value) : ?>
                <dl>
                  <dt><?php echo h($key); ?></dt>
                  <dd>
                    <p>
                      <?php
                      if (empty($app->err[$key])) {
                        if (strpos("jpg,jpeg,gif,png,JPG,JPEG,GIF,PNG", $value["ext"]) !== false) {
                          $img = base64_encode(file_get_contents($value["tmp"]));
                          echo "<img src=\"data:image/{$value["ext"]};base64,{$img}\" width=\"150\" ><br>\n";
                        }
                        echo "{$value["name"]}\n";
                        $_SESSION["submitFile"][$key][$value["name"]] = $value["file"];
                      } else {
                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                      }
                      ?>
                    </p>
                  </dd>
                </dl>
              <?php endforeach; ?>

              <div class="submit_area">

                <input type="hidden" name="requiredItem[mailaddress]" value="<?php echo h($app->requiredItem["mailaddress"]); ?>">
                <input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>">
                <?php if (empty($app->err) && empty($app->seriousError)) {
                  echo "<input type=\"submit\" value=\"送信\">";
                } ?>
                <input type="button" value="戻る" onclick="history.back();">
              </div>

            </form>
          <?php else : ?>
            <div class="submit_area">
              <input type="button" value="戻る" onclick="history.back();">
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
  <!-- /.config -->



</main>




<?php include("../footer.php") ?>