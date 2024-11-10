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
    var resumeHTML = "\n<h2><b>Dynamic Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Cell No:</b><span contenteditable=\"true\">").concat(cellNo, "</span></p>\n\n<h3>Educational Information</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience History</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skill, "</p>\n");
    if (resumDisp) {
        resumDisp.innerHTML = resumeHTML;
    }
    else {
        console.error("Not Available");
    }
    ;
});
