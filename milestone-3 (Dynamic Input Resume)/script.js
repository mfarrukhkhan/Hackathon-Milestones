var form = document.getElementById('resume');
var resumDisp = document.getElementById('dispresume');
// Form Submission by Event Listner
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cellNo = document.getElementById('number').value;
    var education = document.getElementById('educ').value;
    var experience = document.getElementById('exp').value;
    var skill = document.getElementById('skill').value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Cell No:</b>").concat(cellNo, "</p>\n\n<h3>Educational Information</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience History</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skill, "</p>\n");
    if (resumDisp) {
        resumDisp.innerHTML = resumeHTML;
    }
    else {
        console.error("Not Available");
    }
    ;
});
