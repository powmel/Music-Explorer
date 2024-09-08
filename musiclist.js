window.addEventListener('message', function(event) {
    // セキュリティのためオリジンチェック（必要に応じて）
    //if (event.origin !== 'addlist.html') return;

    const { type, text } = event.data;
    console.log(text)
    if (type === 'textData') {
        document.getElementById('receivedText').textContent = text;
    }
});
function addpage(){
    window.location.replace('addlist.html');
}