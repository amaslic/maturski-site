function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var mail = document.getElementById("mail").value;
    var empty = "cannot be empty. \n"; 
    var errors = "";

    console.log(phone.length)

    if (name == "") {
      errors += "Name "+empty;
    }
    if (address == "") {
        errors += "Address "+empty;
      }
    if(phone == "") {
        errors += "Phone "+empty;
    }
    if(phone.length < 9 && phone.length > 0){
      errors += "Phone must contain minimum 9 numbers. \n"
    }
    if(mail == ""){
        errors += "Email "+empty;
    }

    if(errors !== ""){
        alert(errors);
    }
    else{
        alert("Narudzba poslana!");
    }

  }