const askSomething = () => {
    const decision = confirm("Are You Coming With Us?");
    if (decision === true) {
        alert('Welcome');
    } else {
        alert('Better Luck Next Time.')
    }
}

document.getElementById('btn-add-name').addEventListener('click', function() {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);
})
document.getElementById('btn-remove-name').addEventListener('click', function() {
    localStorage.removeItem('name');
})