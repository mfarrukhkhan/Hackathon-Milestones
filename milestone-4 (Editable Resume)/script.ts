const form = document.getElementById ('resume') as HTMLFormElement
const resumDisp = document.getElementById ('dispresume') as HTMLDivElement

// Form Submission by Event Listner
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const cellNo = (document.getElementById('number') as HTMLInputElement).value
    const education = (document.getElementById('educ') as HTMLInputElement).value
    const experience = (document.getElementById('exp') as HTMLInputElement).value
    const skill = (document.getElementById('skill') as HTMLInputElement).value

const resumeHTML = `
<h2><b>Dynamic Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>Cell No:</b><span contenteditable="true">${cellNo}</span></p>

<h3>Educational Information</h3>
<p contenteditable="true">${education}</p>

<h3>Experience History</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skill}</p>
`;
if(resumDisp){
    resumDisp.innerHTML = resumeHTML;
}
else{
    console.error("Not Available")
};
});