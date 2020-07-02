// This is a JavaScript file

var ons_app = ons.bootstrap();

// アプリ全体
ons_app.controller('AppController', function($scope) {

  this.load = function(page) {

    // page_request = null;

    console.log($scope);

    $scope.page.load(page);
    // $scope.splitter.right.close();
  };
  
  $scope.pushPageCtrl = function(page) {
    console.log(page);
    myNavigator.pushPage(page, { animation : 'none' } );
  }
  
});



// 画面: ホーム
ons_app.controller('pageHomeController', function($timeout, $scope) {

  this.load = function($done) {
    $timeout(function() {
      // ons.notification.alert({title:'', message:'pull to refresh'});
      console.log("pull to refresh");

      // pull to refresh処理

      $done();
    }.bind(this), 1000);
  }.bind(this);

  // カルーセルのスワイプ
  $scope.tapCarouselTab = function(index) {
    var nthchild = index+1;
    $("#home_tab ons-carousel-item").removeClass("active");
    $("#home_tab ons-carousel-item:nth-child(" + nthchild + ")").addClass("active");

    // 連動コンテンツを一緒に変更
    home_carousel_contents.setActiveIndex(index);
  }

  $scope.swipeCarouselContents = function(index) {

    // console.log('Changed to ' + $event.activeIndex);
    console.log('Changed to ' + index);
    
    var nthchild = index+1;
    $("#home_tab ons-carousel-item").removeClass("active");
    $("#home_tab ons-carousel-item:nth-child(" + nthchild + ")").addClass("active");

    // 連動タブを一緒に変更
    home_carousel_tab.setActiveIndex(index);
  }

});


// 画面: サンプル（楽天カード）
ons_app.controller('pageTestRakutenController', function($timeout, $scope) {
  
  // グラフ描画: Chart.js
  doughnutChart();
  barChart();

});

// 画面: サンプル（Cookpad）
ons_app.controller('pageTestCookpadController', function($timeout, $scope) {
  
});


// 画面: サンプル（Shufoo）
ons_app.controller('pageTestShufooController', function($scope) {

  $('.grid').masonry({
    // columnWidth: 160
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

});


// 画面: サンプル（ぐるなび）
ons_app.controller('pageTestGnaviController', function($timeout, $scope) {

  // カルーセルのスワイプ
  $scope.tapCarouselTab = function(index) {
    var nthchild = index+1;
    $("#gnavi_tab ons-carousel-item").removeClass("active");
    $("#gnavi_tab ons-carousel-item:nth-child(" + nthchild + ")").addClass("active");

    // 連動コンテンツを一緒に変更
    gnavi_carousel_contents.setActiveIndex(index);
  }

  $scope.swipeCarouselContents = function(index) {

    // console.log('Changed to ' + $event.activeIndex);
    console.log('Changed to ' + index);
    
    var nthchild = index+1;
    $("#gnavi_tab ons-carousel-item").removeClass("active");
    $("#gnavi_tab ons-carousel-item:nth-child(" + nthchild + ")").addClass("active");

    // 連動タブを一緒に変更
    gnavi_carousel_tab.setActiveIndex(index);
  }
  
});


// 画面: ライブ
ons_app.controller('pageLiveController', function($timeout, $scope) {

  this.load = function($done) {
    $timeout(function() {
      // ons.notification.alert({title:'', message:'pull to refresh'});
      console.log("pull to refresh");

      // pull to refresh処理

      $done();
    }.bind(this), 1000);
  }.bind(this);

  // 外部リンク遷移: デフォルトブラウザ
  $scope.exLinkCtrl = function(page) {
    console.log(page);
    cordova.InAppBrowser.open(page, '_system', 'location=yes');
  }

});


// 画面: ライブ パターン1
ons_app.controller('pageLiveSampleController', function($timeout, $scope) {

  // 画面表示時に背景動画を再生
  console.log($("#live_video"));
  $("#live_video").load();
  $("#live_video").on("loadeddata", function(){
    console.log("load success");
    $("#live_video").get(0).play();
    $("#img_loading").hide();
  });
  

  $scope.sendComment = function(){
    var comment_val = $("#comment_input").val();
    // コメントを一番下に追加、スクロール
    if(comment_val != "") {
      $("#comment_list").append("<li>" + comment_val + "</li>");
      $("#comment_contents").animate({scrollTop:$('#comment_contents').height()});
    }
    
  }

  $scope.toggleComment = function(){
    var disp = $("#comment_contents").css("display");
    console.log(disp);

    if(disp !== "none") {
      $("#comment_toggle").removeClass("fa-eye-slash");
      $("#comment_toggle").addClass("fa-eye");
      $("#comment_contents").fadeOut();
    } else {
      $("#comment_toggle").removeClass("fa-eye");
      $("#comment_toggle").addClass("fa-eye-slash");
      $("#comment_contents").fadeIn();
    }

  }

});

// 画面: ライブ パターン2
ons_app.controller('pageLiveSample2Controller', function($timeout, $scope) {

  // 初期表示: コメント非表示
  $("#comment_list").hide();

  // 画面表示時に背景動画を再生
  console.log($("#live_video"));
  $("#live_video").load();
  $("#live_video").on("loadeddata", function(){
    console.log("load success");
    $("#live_video").get(0).play();
    $("#img_loading").hide();
  });
  

  $scope.sendComment = function(){
    var comment_val = $("#comment_input").val();
    // コメントがあれば一番下に追加、スクロール
    if(comment_val != "") {
      $("#comment_list").toggle(true, 'fast', 'linear');
      $("#comment_list").append("<li>" + comment_val + "</li>");
      $("#comment_contents_pt2").animate({scrollTop:$('#comment_contents_pt2').height()});
      
    }
  }

  $scope.toggleComment = function(){
    // var disp = $("#comment_list").css("display");
    // console.log(disp);

    $("#comment_list").toggle('fast', 'linear');

  }

});


// 画面: ライブ パターン3
ons_app.controller('pageLiveSample3Controller', function($timeout, $scope) {

  // 画面表示時に背景動画を再生
  console.log($("#live_video"));
  $("#live_video").load();
  $("#live_video").on("loadeddata", function(){
    console.log("load success");
    $("#live_video").get(0).play();
    $("#img_loading").hide();
  });

  setTimeout(function(){
    $("#comment_toggle").removeClass("fa-eye-slash");
    $("#comment_toggle").addClass("fa-eye");
    $("#comment_contents").fadeOut();
  },5000);
  

  $scope.sendComment = function(){
    var comment_val = $("#comment_input").val();
    // コメントを一番下に追加、スクロール
    if(comment_val != "") {
      $("#comment_contents").show();
      $("#comment_toggle").removeClass("fa-eye");
      $("#comment_toggle").addClass("fa-eye-slash");

      $("#comment_list").append("<li>" + comment_val + "</li>");
      $("#comment_contents").animate({scrollTop:$('#comment_contents').height()});

      setTimeout(function(){
        $("#comment_toggle").removeClass("fa-eye-slash");
        $("#comment_toggle").addClass("fa-eye");
        $("#comment_contents").fadeOut();
      },5000);
    }
    
  }

  $scope.toggleComment = function(){
    var disp = $("#comment_contents").css("display");
    console.log(disp);

    if(disp !== "none") {
      $("#comment_toggle").removeClass("fa-eye-slash");
      $("#comment_toggle").addClass("fa-eye");
      $("#comment_contents").fadeOut();
    } else {
      $("#comment_toggle").removeClass("fa-eye");
      $("#comment_toggle").addClass("fa-eye-slash");
      $("#comment_contents").fadeIn();
    }

  }

});


// 画面: 動画
ons_app.controller('pageVideoController', function($timeout, $scope) {

  this.load = function($done) {
    $timeout(function() {
      // ons.notification.alert({title:'', message:'pull to refresh'});
      console.log("pull to refresh");

      // pull to refresh処理

      $done();
    }.bind(this), 1000);
  }.bind(this);

});


// 画面: メニュー
ons_app.controller('pageMenuController', function($timeout, $scope) {
  
  this.load = function(page) {

    // page_request = null;
    // console.log($scope);
    // console.log(page);

    $scope.page.load(page);
    // $scope.splitter.right.close();
  };

});


// 画面: 商品
ons_app.controller('pagePrizeController', function($timeout, $scope) {
  
});


// 画面: 占い
ons_app.controller('pageDivinationController', function($timeout, $scope) {  

});


// 画面: 速報記事
ons_app.controller('pageFlashController', function($timeout, $scope) {
  
});


ons.ready(function() {
  console.log("Onsen UI is ready!");
});