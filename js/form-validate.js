/**
 * validateForm
 */
function validateForm() {
        /* Validation code start */
        // variables
        var gender = document.forms['contact_form']['gender'];
        var other_gender = document.forms['contact_form']['other_gender'];
        var name = document.forms['contact_form']['name'];
        var email = document.forms['contact_form']['email'];
        var delivery = document.forms['contact_form']['delivery'];
        var comments = document.forms['contact_form']['comments'];
        var validForm = true;

//   if (title.value === "" || title.value === '0') {
//     if(!title.classList.contains('is-invalid'))
//       title.classList.add('is-invalid');
//     validForm = false;
//   }
//   else{
//     if(!title.classList.contains('is-valid'))
//       title.classList.add('is-valid');
//     if(title.classList.contains('is-invalid'))
//       title.classList.remove('is-invalid');
//   }

//   if (first_name.value == "") {
//     if(!first_name.classList.contains('is-invalid'))
//       first_name.classList.add('is-invalid');
//     validForm = false;
//   }
//   else{
//     if(!first_name.classList.contains('is-valid'))
//       first_name.classList.add('is-valid');
//     if(first_name.classList.contains('is-invalid'))
//       first_name.classList.remove('is-invalid');
//   }

//   if (last_name.value == "") {
//     if(!last_name.classList.contains('is-invalid'))
//       last_name.classList.add('is-invalid');
//     validForm = false;
//   }else{
//     if(!last_name.classList.contains('is-valid'))
//       last_name.classList.add('is-valid');
//     if(last_name.classList.contains('is-invalid'))
//       last_name.classList.remove('is-invalid');
//   }

        // email validation
        var validateEmail = /\S+@\S+\.\S+/;
        if (email.value === null ||email.value === undefined || !validateEmail.test(String(email.value).toLowerCase())) {
            if (!email.classList.contains('is-invalid'))
                email.classList.add('is-invalid');
            validForm = false;
        } else {
            if (!email.classList.contains('is-valid'))
                email.classList.add('is-valid');
            if (email.classList.contains('is-invalid'))
                email.classList.remove('is-invalid');
        }

        if (country.value === "" || country.value === '0') {
            if (!country.classList.contains('is-invalid'))
                country.classList.add('is-invalid');
            validForm = false;
        } else {
            if (!country.classList.contains('is-valid'))
                country.classList.add('is-valid');
            if (country.classList.contains('is-invalid'))
                country.classList.remove('is-invalid');
        }

        // check validForm status and show an error
        document.getElementById('not_valid').style.display = 'none';
        document.getElementById('success').style.display = 'none';
        if (validForm == false) {
            document.getElementById('not_valid').style.display = 'block';
        } else {
            document.getElementById('success').style.display = 'block';
        }
}