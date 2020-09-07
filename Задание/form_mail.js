
$("#sendMail").on("click", function (){
    var user_name = $("#user_name").val().trim();
    var user_mail = $("#user_mail").val().trim();
    var user_phone = $("#user_phone").val().trim();

    if(user_name == ""){
        $("#errorMess").text("Введите ФИО")
        return false;
    }else if(user_mail == ""){
        $("#errorMess").text("Введите email")
        return false;
    }else if(user_phone == ""){
        $("#errorMess").text("Введите номер телефона")
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        dataType: "json",
        data: { 
            "user_name": user_name, 
            "user_mail": user_mail, 
            "user_phone": user_phone 
        },
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data){
            alert("Произошла ошибка, сообщение не отправлено!");
        }else {
            
            alert("Обращение отправлено!");
            $("#form_mail").trigger("reset");
        }
            $("#sendMail").prop("disabled", false);
        } ,
    });

});

