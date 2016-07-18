document.addEventListener('load', theClock);

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

        if (h >= 3) {
            document.getElementById('yes-or-no').innerHTML="YES";
            $('#video-bg').tubular({videoId: '0Bmhjf0rKe8'});
        } else {
            document.getElementById('yes-or-no').innerHTML="NO";
        }
}