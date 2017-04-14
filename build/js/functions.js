$(document).ready(function() {
    var videoptions = { videoId: 'O-jOEAufDQ4', start: 0, mute: false }
    var videoptionsmute = { mute: true }
    $('#video-bg').tubular(videoptions);
});

$(document).ready(theClock);

function theClock()
    {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var ampm = h <= 11 ? 'AM' : 'PM';
        m = m < 10 ? '0'+m : m;
        s = s <10 ? '0'+s: s;
        var domh = h % 12;
        domh = domh ? domh : 12; // the hour '0' should be '12'

        document.getElementById('the-time').innerHTML=
        domh+':'+m+':'+s+' '+ampm;
        var t=setTimeout(theClock,500);

        $("#time-selection").change(function() {

            var selectedtime = this.value;

            var video = $('#tubular-container');

            if (h >= selectedtime) {
                document.getElementById('yes-or-no').innerHTML="YES";
                if (video.length == 0) {
                    $('#video-bg').tubular({ videoId: 'O-jOEAufDQ4', start: 0, mute: true });
                }
            } 
            else {
                document.getElementById('yes-or-no').innerHTML="NO";
                $('#tubular-container').remove();
            }

        });

}