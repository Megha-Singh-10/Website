$(document.ready(function(){
    $(.js-section-features).waypoints(function(direction){
        if(direction=="down")
            $(.nav).addClass("sticky");
        else
            $(.nav).removeClass("sticky");

    }
)}))