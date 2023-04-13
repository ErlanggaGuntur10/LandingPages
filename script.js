const handleGetFormData = () =>  {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status,
    };
};

function isNumber(string) {
    if (isNaN(string)) {
        return false;
    }return  true;
}

const checkboxIsChecked = () => {
    const status = document.getElementById("status").checked;
    if (status) {
        return true;
    } else {
        return false;
    }

};

function validateFormData(formData) {
    if ( formData.name == null || formData.city == null || formData.email == null || formData.zipCode == null || !checkboxIsChecked() || !isNumber(formData.zipCode)){
        return false;
    }return true;
}

function submit(event) {
    event.preventDefault();
    const warning = document.getElementById("warning");
    if (!validateFormData(handleGetFormData())) {
        warning.style.display = "block";
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.innerHTML = "Submit berhasil";
    }
}

document.getElementById("submit-form").addEventListener("click", submit);


