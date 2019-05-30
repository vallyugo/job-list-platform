$(document).ready(function () {

    $("form[name=car]").submit(function (e) {
        neth = {
            "email": $("#email").val(),
            "password": $("#pwd").val(),
            "Company": $("#cmd").val(),
            "Industry": $("#ind").val(),
            "Job function": $("#func").val(),
            "location": $("#lock").val(),
            "Role": "Employer"
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/Employer",
            data: neth,
            success: function (data) {
                alert("User added");
                window.location = "file:///C:/Users/User/Desktop/my-project/job-list-platform/index.html";
            }

        })
        e.preventDefault();
    })

    $("#searchlist").click(function () {
        var P = $("#sellectfunction").val();

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/Employer/?q=" + P,
            success: function (data) {
                $('#appear').text('');
                for (i = 0; i < data.length; i++) {

                    word = "";
                    word += "Company: ";
                    word += data[i].Company + "<br>";
                    word += "Industry: "
                    word += data[i].Industry + "<br>";
                    word += "Job Function: ";
                    word += data[i]["Job function"] + "<br>";
                    word += "Location: ";
                    word += data[i].location + "<br>" + "<br>";
                    $("#appear").append(word);

                }

            }
        })
    })

    $("#searchlist").click(function () {
        var A = $("#sellectfunction").val();
        var B = $("#sellectstate").val();
        var D = $("#sellectindustry").val();
        if ((A == "All Functions") && (B == "All states") && (D == "All Industries")) {
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/Employer",
                success: function (data) {
                    $('#appear').text('');
                    for (i = 0; i < data.length; i++) {
                        word = "";
                        word += "Company: ";
                        word += data[i].Company + "<br>";
                        word += "Industry: "
                        word += data[i].Industry + "<br>";
                        word += "Job Function: ";
                        word += data[i]["Job function"] + "<br>";
                        word += "Location: ";
                        word += data[i].location + "<br>" + "<br>";
                        $("#appear").append(word);



                    }

                }
            })
        }
    })


});




