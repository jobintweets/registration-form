$(function(){
    
    if(localStorage.getItem("students") == null){
        localStorage.setItem("students",JSON.stringify([]));
    }
    showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
        title:"Registration Form",
        autoOpen:false,
        height:600,
        width:500,
        modal:true,
    });
    
    $(".regstu").click(function(){
       dialog.dialog("open") 
    });
    
    $("#dob").datepicker({
        changeYear:true,
        changeMonth:true,
        maxDate: "0d"
    });
    
    $(".submit").click(function(){
        var isValid = $("#regform").validate({
        rules:{
            usn:{
                required:true,
                minlength:10,
                maxlength:10,
            },
            name:{
                required:true,
                lettersonly:true,
                minlength:2,
                maxlength:50,
            },
            email:{
                required:true,
                email:true,
            },
            mobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10,
            },
            course:{
                required:true,
            },
            percentage:{
                required:true,
                min:50,
                max:100
            },
            dob:{
                required:true,
            },
            
        },
        messages:{
            usn:{
                required:"USN can't be empty",
                minlength:"Max 10 charectors",
                maxlength:"Min 10 charectors"
            },
            name:{
                required:"Name can't be empty",
                lettersonly:"Please enter the valid Name",
                minlength:"minimum 2 charecters",
                maxlength:"less then 50 charecters"
            },
            email:{
                required:"Email can't be empty",
                email:"Please enter the valid Email"
            },
            mobile:{
                required:"Mobile can't be empty",
                number:"Please enter the valid number",
                minlength:"Please enter the valid number",
                maxlength:"Please enter the valid number"
            },
            course:{
                required:"Please select your course",
            },
            percentage:{
                required:"Percentage can't be empty",
                number:"Please enter the valid percentage",
                min:"Not eligible for placement",
                max:"Please enter the valid percentage"
            },
            dob:{
                required:"DOB can't be empty",
            },
        }
    }).form();
        if(isValid){
            var usn = $('#usn').val();
            var email = $('#email').val();
            var name = $('#name').val();
            var mobile = $('#mobile').val();
            var course = $('#course').val();
            var percentage = $('#percentage').val();
            var dob = $('#dob').val();
            $(".reset").click();
            
            student = {
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage,
                "dob":dob
            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            dialog.dialog("close");
            showRegisteredStudents();
            return false;
        }
  }); 
    function showRegisteredStudents(){
        var students = getDataFromLocalStorage();
        var data = "";
        
        if(students.length == 0)
            data = "<h3>No Students Register yet...</h3>";
        else{
            data +="<table id='registeredstud'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>Email</th>";
            data += "<th>Mobile</th>";
            data += "<th>Course</th>";
            data += "<th>Percentage</th>";
            data += "<th>DOB</th>";
            data += "</tr></thead>";
            
            for(var i=0;i<students.length;i++){
                var j = i +1 ;
                data += "<tr>";
                data += "<td>"+j+"</td>";
                data += "<td>"+students[i].usn+"</td>";
                data += "<td>"+students[i].name+"</td>";
                data += "<td>"+students[i].email+"</td>";
                data += "<td>"+students[i].mobile+"</td>";
                data += "<td>"+students[i].course+"</td>";
                data += "<td>"+students[i].percentage+"</td>";
                data += "<td>"+students[i].dob+"</td>";
                
            }
            data +="</table>";
        }
    $("#content").html(data);
        $("#registeredstud").dataTable({
            "pageLength":2,
        });
    }
    function getDataFromLocalStorage(){
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    
    }
    function updateLocalStorageData(updateStudents){
        localStorage.setItem("students",JSON.stringify(updateStudents));
    }
});