//selecting DOM elements
const email = document.getElementById('email')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const form = document.querySelector('form')

//selecting Dom elements: errors
const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector("#country + span.error");
const passwordError = document.querySelector("#password + span.error");
const zipError = document.querySelector("#zip + span.error");


form.addEventListener('submit', function (e) {
    if(!email.validity.valid) {
        showError(email);
        e.defaultPrevented;
    } else if (!country.validity.valid) {
        showError(country)
        e.defaultPrevented
    } else if (!zip.validity.valid) {
        showError(zip)
        e.defaultPrevented
    } else if (!password.validity.valid) {
        showError(password)
        e.defaultPrevented
    }
})

email.addEventListener('input', function (e) {
    if(!email.validity.valid) {
        showError(e.target)
    }
})

country.addEventListener('input', function (e) {
    if(!email.validity.valid) {
        showError(e.target)
    }
})

zip.addEventListener('input', function (e) {
    if(!email.validity.valid) {
        showError(e.target)
    }
})

password.addEventListener('input', function (e) {
    if(!email.validity.valid) {
        showError(e.target)
    }
})

const showError = (place) => {
    const name = place.id;
    let article;
    switch (name) {
        case 'email':
            article = 'an';
            break;
        default:
            article = 'a'
    }
    place.setCustomValidity('')
    if(place.validity.valueMissing){
        // error.textContent = `You need to enter an ${place}.`
        // error.classList.add('active')
        place.setCustomValidity(`You need to enter ${article} ${name}.`);
        console.log(place.validity)
        place.reportValidity(); 
    }else if (place.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        place.setCustomValidity(`Entered value needs to be ${article} ${name}.`);
        console.log(place.validity)
        place.reportValidity();
      } else if (place.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        place.setCustomValidity(`${name} should be at least ${place.minLength} characters; you entered ${place.value.length}.`);
        console.log(place.validity)
        place.reportValidity();
      }else if (place == zip && place.validity.patternMismatch || place == country && place.validity.patternMismatch ){
        place.setCustomValidity(`Entered value needs to be ${article} ${name}.`);
        console.log(place.validity)
        place.reportValidity();
      }
}