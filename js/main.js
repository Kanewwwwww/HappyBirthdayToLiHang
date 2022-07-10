$(function () {
    var _picture = [
        { url: "images/妍狄.JPG" },
        { url: "images/宜君.JPG" },
        { url: "images/美恩.JPG" },
        { url: "images/迦康.JPG" },
        { url: "images/煉英.JPG" },
        { url: "images/儀君.JPG" },
        { url: "images/美玲.JPG" }
      ];
    // var _picture = [
    //     { url: "https://live.staticflickr.com/65535/52123901301_11fe3233a0_c.jpg" },
    //     { url: "https://live.staticflickr.com/65535/52123901291_ff3304223c_b.jpg" }
    //   ];
      var _draw = [];
      var cardloading = function (fun, time) {
        $(".card .image .status .type").html("抽卡中");
        $(".card .image .status .dot").show();
        setTimeout(() => {
            $(".card .image .status .type").html("");
            $(".card .image .status .dot").hide();;
          fun();
        }, time);
      };


    init();
    
    function init() {
        eventBind();
        $(".card_count").text("剩下" + _picture.length + "張卡");
    }

    function drawCard() {
        if (_picture.length < 1) {
          alert("沒卡囉^^");
          return;
        }
        $("img").attr("src", "");

        
        var  sec =  Math.floor(Math.random() * 2000);
        alert(sec)
        cardloading(cardPicker, sec);

      }
      
      function cardPicker() {
        var cardNum = Math.floor(Math.random() * _picture.length);
        var card = _picture[cardNum];
        $("img").attr("src", card.url);
        _draw.push(card);
        _picture.splice(cardNum, 1);
        $(".card_count").text("剩下" + _picture.length + "張卡");
        $(".already_card").text("以抽" + _draw.length + "張卡");
      }
      
      function recovery() {
        if (_draw.length < 1) {
          return;
        }
        _draw.forEach((e) => _picture.push(e));
        _draw = [];
        $(".card_count").text("剩下" + _picture.length + "張卡");
        $(".already_card").text("已抽" + _draw.length + "張卡");
      }

      
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
    
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
    
            setTimeout(() => {
                ripples.remove();
            }, 900);
        })
    })

   

    function eventBind(){
        $(" .pick").bind("click", function (e) {
            debugger;
            drawCard();
          });
          $(" .recover").bind("click", function (e) {
            recovery();
          });
    }
});