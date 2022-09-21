

function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
         month = now.getMonth(),
       dnum = now.getDate(),
        hou = now.getHours(),
        min = now.getMinutes(),
         pe = "AM";

         if(hou == 0) {
            hou = 12;
         }
         if(hou > 12) {
            hou = hou - 12;
            pe = "PM";
         }

         Number.prototype.pad = function(digits) {
            for (var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
         }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["daynumber", "month", "dayname", "hour", "minutes", "period" ];
        var values = [months[month], week[dname], dnum.pad(2), hou.pad(2), min.pad(2), pe];

        for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function showClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}


