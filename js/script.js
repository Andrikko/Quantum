window.onload = function () {
    let images = [
        {
            text: 'КОМФОРТ ТА СУЧАСНІ <br>ТЕХНОЛОГІЇ',
            image: "url('./images/Residential building_night-min.png') no-repeat"
            // image: "url('./images/Residential building_night-min.png')"
        },
        {
            text: 'ІДЕАЛЬНЕ МІСЦЕ <br>ДЛЯ ЖИТТЯ',
            image: "url('./images/render2.png') no-repeat"
            // image: "url('./images/render2.png')"
        },
        {
            text: 'ДЛЯ ТИХ ХТО ЦІНУЄ <br>ВИСОКІ СТАНДАРТИ',
            image: "url('./images/render3.png') no-repeat"
            // image: "url('./images/render3.png')"
        }
    ];

    var i = 1;
    var j = 1;
    var timer = setInterval(function () {
        $('#title').fadeOut(700, function () { 
            $(this).html(images[i].text).fadeIn(700);
            i++;
            i == 3 ? i=0 : ' ';
        });

        $('#view').fadeOut(700, function(){
            $(this).css("background", images[j].image).fadeIn(700);
            j++;
            j == 3 ? j = 0 : ' ';
        });
    }, 5000);
}