var posts=["2025/02/13/头脑发热买了手机卡，我真的后悔了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };