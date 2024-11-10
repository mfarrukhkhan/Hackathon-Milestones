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
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Cell No:</b>${cellNo}</p>

<h3>Educational Information</h3>
<p>${education}</p>

<h3>Experience History</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skill}</p>
`;
if(resumDisp){
    resumDisp.innerHTML = resumeHTML;
}
else{
    console.error("Not Available")
};
});