var x1;
var y1;
var x2;
var y2;
function getCoordin(img,selection){
    x1 = $("#X1").attr("value", selection.x1)
    y1 = $("#Y1").attr("value", selection.y1)
    x2 = $("#X2").attr("value", selection.x2)
    y2 = $("#Y2").attr("value", selection.y2)
}
function addOk(){
    $("#img-ok").html("<button>OK</button>")
}

function inputCoordinate(img,selection){

}

var curntImg = $('#current-img').imgAreaSelect({
        handles : true,
        borderColor1 : "#DCDCDC",
        borderColor2 : "#DCDCDC",
        borderOpacity : "1",
        outerColor : "null",
        outerOpacity : "0",
        selectionColor: '#F5F5F5',
        selectionOpacity: '0.5',
        onSelectStart:addOk,
        onSelectChange : getCoordin

    });


