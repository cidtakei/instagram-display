(function ($) {
  $.ajax({  // jQueryのajaxでjsonデータを取得しますね
    type: 'GET',
    url: 'https://graph.facebook.com/v14.0/17841448106736836?access_token=EAAH8l4VAXysBANxsvgkoqeUocuLYZBWVo0HJ9LssJMznEwX0tOlyZChe8YeWMvQJqJlLi7rHONfH5x8G9oOq4T9BdN9Tqg06SoyzGtGl5ZAWPAs35QcTqDxpu4MzN2ekuFNZBuDLZBhZBclW4YZAgzO9XGbKVfaKpriBcJmOiZAOUBGiY1kPZAAhJ&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}',
    dataType: 'json',
    success: function (json) {
      var insta = json.media.data;
      for (var i = 0; i < 10; i++) {
        let url = insta[i].media_url; // 動画ソースのURLを取得
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