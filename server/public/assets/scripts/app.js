$(document).ready(function(){
    $("#generateEmployee").submit(function(event) {
        event.preventDefault();
        var values = {};

        $.each($(this).serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        $.ajax({
            type: "POST",
            url: "/data",
            data: values,
            success: function(data){
                console.log(data);
            }
        });

    });
});