window.addEventListener('load', theClock);

function theClock()
    {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = h % 12;
        h= h ? h : 12; // the hour '0' should be '12'
        var ampm = h >= 12 ? 'AM' : 'PM';
        m = m < 10 ? '0'+m : m;
        s = s <10 ? '0'+s: s;
    // add a zero in front of numbers<10

        document.getElementById('the-time').innerHTML=
        h+':'+m+':'+s+' '+ampm;
        var t=setTimeout(theClock,500);

        var video = $('#tubular-container');

        if (h >= 3 && ampm == 'PM') {
            document.getElementById('yes-or-no').innerHTML="YES";
            if (video.length == 0) {
                $(function() {
                    var options = { videoId: 'O-jOEAufDQ4', start: 0, mute: false };
                    $('#video-bg').tubular(options);
                    $('#yes-or-no').effect('pulsate');
                });
            }
            
        } 

        else {
            document.getElementById('yes-or-no').innerHTML="NO :(";
            $(function() {
                $('#tubular-container').remove();
            });
        }

}

//plugin fires here
$(document).ready(function() {
    var options = { videoId: 'O-jOEAufDQ4', start: 0, mute: false };
    $('#video-bg').tubular(options);
});

