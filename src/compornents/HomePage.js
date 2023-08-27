import React from 'react'
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";

const Homepage = () => {
  return (
    <div className="container text-center">
    <h1>黒柳 美玖
    </h1>

    <img src={profileImage} className="profileImage" />

    <p>
      黒柳美玖(くろやなぎ みく)です。独学でプログラミング学習をしています。主にJavascript/Reactメインに学習しています。フロントエンドエンジニアを志望しています。
      現職を続けながらポートフォリオの作成とITの資格の勉強、転職活動を行っております。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">ランチシャッフルアプリ</h4>
            <p class="text-muted">
              時間が無い社会人の為に、昼食を選ぶ手間を省くアプリを作成しました。他には無い機能として、
              一時保存する機能を追加しました。1位に選ばれたランチはモーダルで浮かび上がるようにして、
              特別感を演出する工夫をしました。kumigi7869/Miku-Kuroyanagi-Portfolio (github.com)
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">電卓アプリ</h4>
            <p class="text-muted">
              四則演算ができる電卓アプリを作成しました。
              ホバー中に色が赤に変わる工夫をしたことによって、手入力でも使いやすい工夫をしました。
              現在はキーボード入力もできるように調整中です。https://github.com/kumigi7869/miku123app.git
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Comming Soon...</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="skill">
      <div class="text-center">
        <h1 class="title">スキル</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React</h4>
            <p>Reactがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>JavaScript</h4>
            <p>JavaScriptがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={firebaseImage} />
            <h4>Firebase</h4>
            <p>Firebaseがつかえます</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          スキル一覧
        </button>
      </div>
    </section>
  </div>
  );
};

export default Homepage;
