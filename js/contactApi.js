const submitButton = document.getElementById("submitData");

    submitButton.addEventListener('click', function () {
        const url = "https://apex.oracle.com/pls/apex/devsumon/portfolio";
        const data = {"name" : document.getElementById('name').value,
                        "email" : document.getElementById('email').value,
                        "subject" : document.getElementById('subject').value,
                        "description" : document.getElementById('description').value
                    };
        if(data.name != "" && data.email != "")
        {
            fetch(`${url}/contact-body`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json"}
            }).then(response => {
                if(response.status == 200)
                {   
                    
                    Swal.fire(
                        'Thank You '+data.name,
                        '. Your Message Submited Successfully!',
                        'success'
                      );
                      document.getElementById('name').value ="";
                      document.getElementById('email').value ="";
                      document.getElementById('subject').value ="";
                      document.getElementById('description').value ="";
                }
                // console.log(response.status);
                //  window.location.reload()
            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Your Name or email is empty.',
                text: 'Please provide your name and email address. So that We Can reach you.',
              });
        }
    });
 
