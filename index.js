let infotypele = document.getElementById("tpye-of-info");

function update(type_of) {
    if (type_of === 'home') {
        infotypele.value = 'home';
        infotypele.style.backgroundColor = 'red';
    } else if (type_of === 'Aboutus') {
        infotypele.value = 'About US';
        infotypele.style.backgroundColor = 'lightblue';
    } else if (type_of === 'Services') {
        infotypele.value = 'Services';
        infotypele.style.backgroundColor = 'pink';
    } else {
        infotypele.value = 'Contact us';
        infotypele.style.backgroundColor = 'magenta';
    }


}