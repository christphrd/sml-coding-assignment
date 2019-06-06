document.addEventListener('DOMContentLoaded', function() {
    let coinComboForm = document.querySelector('#coin-combo-form');

    coinComboForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let userDenominationList = document.querySelector('#denomination-list').value.trim()

        console.log(userDenominationList)
    })
})