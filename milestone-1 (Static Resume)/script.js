var togbtn = document.getElementById('toggle-skill');
var skl = document.getElementById("skills");
togbtn.addEventListener('click', function () {
    if (skl.style.display === 'none') {
        skl.style.display = 'block';
    }
    else {
        skl.style.display = 'none';
    }
});
