var form = document.getElementById("input-form");
var resume = document.getElementById("resume-display");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var fullName = document.getElementById("input-name").value;
    var designation = document.getElementById("input-designation").value;
    var objective = document.getElementById("input-content").value;
    var cell = document.getElementById("input-cell").value;
    var email = document.getElementById("input-email").value;
    var linkedinURL = document.getElementById("input-linkedin-url").value;
    var education = document.getElementById("input-education").value;
    var skills = document.getElementById("input-skills").value;
    var experience = document.getElementById("input-experience").value;
    var resumeHTML = "<div id = \"resume\">\n        <div class=\"container1\">\n            <div class=\"heading\">\n                <h1 contenteditable=\"true\">".concat(fullName, "</h1>\n                <h3 contenteditable=\"true\">").concat(designation, "</h3>\n            </div>\n        </div>\n        \n        <div class=\"container2\">\n            <div class=\"headings\">\n                <h1>Objective</h1>\n                <hr>\n                <br>\n                <p contenteditable=\"true\">").concat(objective, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Contact</h1>\n                <hr>\n                <br>\n                <p><b>Phone : </b><span contenteditable=\"true\">").concat(cell, "</span></p>\n                <p><b>Email : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>LinkedIn : </b><span contenteditable=\"true\">").concat(linkedinURL, "</span></p>\n            </div>\n            <div class=\"headings\">\n                <h1>Education</h1>\n                <hr>\n                <br>\n                <p contenteditable=\"true\">").concat(education, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Skills</h1>\n                <hr>\n                <br>\n                <p contenteditable=\"true\">").concat(skills, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Experience</h1>\n                <hr>\n                <br>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n            </div>\n        </div>\n    </div>");
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
