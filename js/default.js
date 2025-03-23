// リンクURLをデコードする関数
function fixEncodedUrl(url) {
    // 1回目のデコード（例えば、%2528 → %28）
    let decodedUrl = decodeURIComponent(url);
    
    // 2回目のデコード（%28 → ()）
    decodedUrl = decodeURIComponent(decodedUrl);
    
    return decodedUrl;
}

// ページ内のすべてのリンクをチェック
document.querySelectorAll('a').forEach(function(link) {
    let url = link.href;

    // URLが二重エンコードされている場合、修正する
    let fixedUrl = fixEncodedUrl(url);

    // 修正されたURLをリンクのhrefに再設定
    link.href = fixedUrl;
});
