// 開始日時と終了日時を指定
const startTime = new Date('2015-05-28T00:00:00');
const endTime = new Date('2024-04-09T09:00:00');

// タイマー要素と進捗バー要素を取得
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progressBar');

// タイマーIDを格納する変数
let timerId;

// タイマーを表示する関数
function updateTimer() {
  const now = new Date();
  const remainingTime = endTime - now;
  const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24)
  const hours = Math.floor(remainingTime / 1000 / 60 / 60 ) % 24
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60
  const seconds = Math.floor(remainingTime / 1000) % 60

  timerElement.innerHTML = `残り${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

  // 現在の日時から開始日時までの経過時間を計算
  const elapsedTime = now - startTime;

  // 開始日時から終了日時までの総時間（ミリ秒）を計算
  const totalTime = endTime - startTime;

  // 進捗を計算し、進捗バーに反映
  const progress = (elapsedTime / totalTime) * 100;
  progressBar.value = progress;

  // 進捗が100%に達したらタイマーを停止
  if (progress >= 100) {
    clearInterval(timerId);
    timerElement.innerHTML = "残り0秒となりました。スプラトゥーン1のオンライン対戦はサービス終了しました。";
  }
}

// タイマーの初回呼び出し
updateTimer();

// タイマーを1秒ごとに更新
timerId = setInterval(updateTimer, 1000);

// 経過時間を表示する要素を取得
const 経過時間表示器 = document.getElementById('経過時間表示');

// 初期経過時間を0に設定
let elapsedDays = 0;
let elapsedHours = 0;
let elapsedMinutes = 0;
let elapsedSeconds = 0;

// 1秒ごとに経過時間を更新して表示する関数
function updateElapsedTime() {
  const now = new Date();

  // 開始日から経過した時間を計算
  const 経過時間 = now - startTime;
  elapsedDays = Math.floor(経過時間 / 1000 / 60 / 60 / 24)
  elapsedHours = Math.floor(経過時間 / 1000 / 60 / 60 ) % 24
  elapsedMinutes = Math.floor(経過時間 / 1000 / 60) % 60
  elapsedSeconds = Math.floor(経過時間 / 1000) % 60

  // 経過時間を表示
  経過時間表示器.textContent = `${elapsedDays}日 ${elapsedHours}時間 ${elapsedMinutes}分 ${elapsedSeconds}秒`;

  // 終了日時を過ぎた場合は経過時間の更新を停止
  if (now >= endTime) {
    clearInterval(timerId);
    経過時間表示器.textContent = "(スプラトゥーン1のオンライン対戦はサービス終了しました。)";
  }
}

// 1秒ごとに経過時間を更新
const 経過時間表示Id = setInterval(updateElapsedTime, 1000);