<?php
require_once(__DIR__ . '/form/config/config.php');
$form = new Monaka\Form();
?>

<?php include("./header.php") ?>

<main>
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

  <!--▼ここから-->
  <section class="contact" id="contact">
    <div class="contact__inner inner">
      <p>
        お問い合わせは、お電話にてお問い合せいただくか、下記のフォームよりご連絡ください。<br>
        <br>
        メール送信完了後、当サイトよりメールが届きます。
        (携帯の場合、メールが受信できるよう、ドメインの受信許可設定をお願いいたします。)
      </p>
      <form action="form/confirmation.php" method="post" enctype="multipart/form-data">
        <dl>
          <div class="wrap">
            <dt class="required">お名前</dt>
            <dd>
              <input type="hidden" name="お名前[params]" value="名前" />
              <input type="text" name="お名前[value]" placeholder="例：山田太郎" />
            </dd>
          </div>
          <div class="wrap">
            <dt class="required">お名前（フリガナ）</dt>
            <dd>
              <input type="hidden" name="お名前（フリガナ）[params]" value="名前" />
              <input type="text" name="お名前（フリガナ）[value]" placeholder="例：ヤマダタロウ" />
            </dd>
          </div>
          <div class="wrap">
            <dt class="required"><span>電話番号</span></dt>
            <dd>
              <input type="hidden" name="電話番号[params]" value="電話番号,必須" />
              <input type="text" name="電話番号[value]" placeholder="例：000-0000-0000" />
            </dd>
          </div>
          <div class="wrap">
            <dt class="required"><span>メールアドレス</span></dt>
            <dd>
              <input type="hidden" name="メールアドレス[params]" value="メール" />
              <input type="email" name="メールアドレス[value]" placeholder="例：sample@sample.co.jp">
            </dd>
          </div>
          <div class="wrap">
            <dt class="required"><span>メールアドレス（確認）</span></dt>
            <dd>
              <input type="hidden" name="メールアドレス確認[params]" value="再入力" />
              <input type="email" name="メールアドレス確認[value]" placeholder="例：sample@sample.co.jp">
            </dd>
          </div>
          <div class="wrap">
            <dt class="required"><span>性別</span></dt>
            <dd class="sel_box">
              <input type="hidden" name="性別[params]" />
              <div>
                <select name="性別[value]">
                  <option value="必須">--</option>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="wrap category">
            <dt class="required"><span>問い合わせカテゴリー</span></dt>
            <dd>
              <input type="hidden" name="問い合わせカテゴリー[params]" value="必須" />
              <label>
                <input type="radio" name="問い合わせカテゴリー[value]" value="予約" class="chk_input" />
                <span class="chk_style">予約</span>
              </label>
              <label>
                <input type="radio" name="問い合わせカテゴリー[value]" value="ご相談" class="chk_input" />
                <span class="chk_style">ご相談</span>
              </label>
              <p>※予約を選択された方…お日にちの希望日を選択してください。</p>
              <p>※ご相談を選択された方…おご相談内容を入力してください。</p>
            </dd>
          </div>
          <div class="wrap">
            <dt><span>第一希望日</span></dt>
            <dd class="sel_box">
              <input type="hidden" name="第一希望日[params]" />
              <div>
                <select name="第一希望日[value]">
                  <option value="--">--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                  <option value="3">7</option>
                  <option value="3">8</option>
                  <option value="3">9</option>
                  <option value="3">10</option>
                  <option value="3">11</option>
                  <option value="3">12</option>
                </select>
                <p>月</p>
                <select name="第一希望日[value]">
                  <option value="--">--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <p>日</p>
                <select name="第一希望日[value]">
                  <option value="8:30">8:30</option>
                  <option value="9:00">9:00</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="wrap">
            <dt><span>第二希望日</span></dt>
            <dd class="sel_box">
              <input type="hidden" name="第二希望日[params]" />
              <div>
                <select name="第二希望日[value]">
                  <option value="">--</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
                <p>月</p>
                <select name="第二希望日[value]">
                  <option value="">--</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
                <p>日</p>
                <select name="第二希望日[value]">
                  <option value="">8:30</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="wrap">
            <dt><span>第三希望日</span></dt>
            <dd class="sel_box">
              <input type="hidden" name="第三希望日[params]" />
              <div>
                <select name="第三希望日[value]">
                  <option value="">--</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
                <p>月</p>
                <select name="第二希望日[value]">
                  <option value="">--</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
                <p>日</p>
                <select name="第二希望日[value]">
                  <option value="">8:30</option>
                  <option value="項目1">項目1</option>
                  <option value="項目2">項目2</option>
                  <option value="項目3">項目3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="wrap">
            <dt>ご希望メニュー</dt>
            <dd>
              <input type="hidden" name="ご希望メニュー[params]">
              <label><input type="checkbox" name="ご希望メニュー[value][]" value="改善整体"> 改善整体</label>
              <label><input type="checkbox" name="ご希望メニュー[value][]" value="改善整体"> 改善整体</label>
              <label><input type="checkbox" name="ご希望メニュー[value][]" value="小顔改善"> 小顔改善</label>
              <label><input type="checkbox" name="ご希望メニュー[value][]" value="頭ほぐし"> 頭ほぐし</label>
              <label><input type="checkbox" name="ご希望メニュー[value][]" value="ふくらはぎ"> ふくらはぎ</label>
            </dd>
          </div>
          <div class="wrap">
            <dt><span>ご相談内容</span></dt>
            <dd>
              <input type="hidden" name="ご相談内容[params]">
              <textarea name="ご相談内容[value]" placeholder="ご相談内容を入力してください。"></textarea>
            </dd>
          </div>
        </dl>
        <p id="form_btn">
          <input type="submit" value="確認画面へ" class="btn">
        </p>
      </form>
    </div>
  </section>
  <!--▲ここまで-->
</main>



<?php include("./footer.php") ?>