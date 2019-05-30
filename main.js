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

});




