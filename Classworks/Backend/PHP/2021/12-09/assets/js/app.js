let resultBox = document.querySelector('#result'),
    resultImage = document.createElement('img');
    resultBox.hidden = true;

document.addEventListener('DOMContentLoaded', function() {
    const FORM = document.querySelector('#form');

    const METHOD = FORM.getAttribute('data-method');
    const ACTION = FORM.getAttribute('data-action');

    const SUBMIT = document.querySelector('#submit');

    SUBMIT.addEventListener('click', async function() {
        let elements = document.querySelectorAll('#form [name]');

        let formData = new FormData();

        [...elements].map(element => {
            if (element.files) {
                for (let file of element.files) {
                    formData.append(element.name, file);
                }
            }
            if (element.name !== 'lang[]') {
                    formData.append(element.name, element.value);
            }
            if (element.name === 'lang[]') {
                    if (element.checked) {
                        formData.append(element.name, element.value);
                    }
                }
        });

        let response = await fetch(ACTION, {
            method: METHOD,
            body: formData
        });
        
        response = await response.text();
        resultBox.appendChild(resultImage);
        resultImage.src = response;
        resultImage.classList.add('mt-5');
        resultBox.hidden = false;
    })
})
