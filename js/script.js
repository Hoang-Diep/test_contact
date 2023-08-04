const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault();  // Preventing form from submitting
    statusTxt.style.display = "inline-block";

    let xhr = new XMLHttpRequest();                           //Create new XML object

    xhr.open("POST", "message.php", true); //Sending POST request to message.php file
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {      // If AJAX response status is 200 & ready status is 4 means there is no any error
            let response = xhr.response;

            // If response is an error like enter valid email address then we'll change staus color to red
            if (
                response.indexOf("Email & Message field is required!") != -1 || 
                response.indexOf("Enter a valid email address.") ||
                response.indexOf("Sorry, failed to send your message.")
                ) {
                    statusTxt.style.color = "red";
                } else {
                    form.reset();
                    setTimeout(() => {
                        statusTxt.style.display = "none";
                    }, 3000)
                }

            statusTxt.innerText = response;
        }
    }

    let formData = new FormData(form);  // Creating new FormData object. This object used to send form data
    xhr.send(formData);       // Sending Form Data
}