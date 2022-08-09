# instagram-display
``` javascript
(function ($) {
  $.ajax({  // jQueryのajaxでjsonデータを取得します
    type: 'GET',
    url: 'https://graph.facebook.com/v14.0/[InstagramビジネスアカウントID]?access_token=[無期限トークン]&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}',
    dataType: 'json',
    success: function (json) {
      var insta = json.media.data;
      for (var i = 0; i < 10; i++) {
        let url = insta[i].media_url; // メディアソースのURLを取得
        let href = insta[i].permalink; // リンク先URLを取得
        if (url.indexOf('.mp4') <= 0) { // 動画は除外。 .mp4以外を<li>タグで描画
          $('.insta_list').append(`
<li class="insta_list_content">
  <a href="${href}" target="qoo_insta">
    <img class="insta_list_content_img" src="${url}" alt="">
  </a>
</li>
              `);
        }
      }
    }
  });
})(jQuery);
```
- InstagramビジネスアカウントID
- 無期限トークン

上記2種は取得したモノに置き換えてください。
