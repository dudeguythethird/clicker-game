function sendMail(contactForm) {
    emailjs.send("gmail", "template_clicker", {
        "from_name":contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "idea_suggestion": contactForm.ideasuggestion.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            alert("Idea Submitted!");
        },
        function(error){
            console.log("FAILED", error);
            alert("Error submitting idea, please try again later");
        }
    );
    return false;
}