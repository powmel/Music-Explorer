function sendmusic() {
    const text = document.getElementById('addmusic').value;
    console.log(text)
    // ウィンドウがスクリプトによって開かれている場合のみ、正常に動作する
    window.close();
    // 新しいウィンドウを開く（受信側のページを指定）
    const targetWindow = window.open('musiclist.html');

    
    // 新しいウィンドウが開かれるまで待つ
    targetWindow.onload = function() {
        targetWindow.postMessage({ type: 'textData', text: text }, '*'); // '*'は全てのオリジンに対して送信
    };
}
function saveAudio() {
    const fileInput = document.getElementById('addmusic');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const audioData = event.target.result;
        // 音声データをbase64エンコード
        localStorage.setItem('audioData', audioData);

         // 次のページに遷移
            window.location.href = 'page2.html';
    };

    reader.readAsDataURL(file);
}

function getFileName() {
    // id="fileInput" の要素を取得
    const fileInput = document.getElementById('fileInput');
    // ファイルが選択されているか確認
    if (fileInput.files.length > 0) {
        // 最初のファイルの名前を取得
        const fileName = fileInput.files[0].name;
        // ファイル名を表示
        document.getElementById('fileNameDisplay').textContent = fileName;
    } else {
        // ファイルが選択されていない場合の処理
        document.getElementById('fileNameDisplay').textContent = 'ファイルが選択されていません。';
    }
}