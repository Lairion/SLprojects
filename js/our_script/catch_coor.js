$(document).ready(function(){
    var imgObj = {};
    $('#btn_ok').hide();
    $('#inp-emp').hide();
    $('#name-img').focusin(
        function(){
            $('#name-img').removeClass('emply_input');
            $('#inp-emp').hide();
        }
    )


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

    function getCoordin(img,selection){
        imgObj.x1 = selection.x1;
        imgObj.y1 = selection.y1;
        imgObj.x2 = selection.x2;
        imgObj.y2 = selection.y2;
    }
    function addOk(){
        $('#btn_ok').show();
    }

    $('#img_form').submit(
        function(){
            nameImg = $('#name-img').val();
            if (nameImg !== ''){
                imgObj.nameImg = nameImg;
            }
            else{
                $('#inp-emp').show();
                $('#name-img').addClass('emply_input')
                return false
            }
            imgObj.urlImg = $('#current-img').attr('src')
            strJSON = $.toJSON(imgObj)
            $.ajax({
                type: "POST",
                url: "http://httpbin.org/post",
                data:strJSON,
                contentType: 'application/json; charset=utf-8',
//                dataType: "json",
//                success: function(data) {
//                    document.location = "http://httpbin.org/post";}

   });
            return false
        }
    )




})
