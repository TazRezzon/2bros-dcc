
function on() {
    // Display overlay
const turnon = document.getElementById("overlay");
turnon.style.display = "block";
        // Add blur to the background       document.body.style.filter = 'blur(5px)';

//turn off vertical scroll
const overflow = document.querySelector("body");
overflow.style.overflow = "hidden";
}

function off() {
        // Display overlay
const turnoff = document.getElementById("overlay");
turnoff.style.display = "none";
document.body.style.filter = 'none'; 
//turn off vertical scroll
const overflow = document.querySelector("body");
overflow.style.overflow = "";
}

function List(index) {
    const descriptions = document.getElementsByClassName("LDescription");
    
    // Check if the index is valid
    if (index >= 0 && index < descriptions.length) {
        const turnon = descriptions[index];

        // Check if the element is currently hidden
        if (turnon.style.display === "none" || turnon.style.display === "") {
            turnon.style.display = "block"; // Show the element
        } else {
            turnon.style.display = "none"; // Hide the element
        }
    }
}


function Home() {
    location="/";
location.href="/";
location.assign("/");
location.replace("/");
}
function contacts() {
    location.href = 'contacts.html';
}



document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the animation class
            } else {
                entry.target.classList.remove('visible'); // Remove the animation class if not in view
                entry.target.style.opacity = '0'; // Reset opacity for re-animation
            }
        });
    });

    // Select all elements with the class 'animate'
    const targets = document.querySelectorAll('.card-child');
    targets.forEach(target => {
        observer.observe(target); // Observe each target
        target.style.opacity = '0'; // Set initial opacity to 0
    });
});

document.querySelectorAll('.contacts-child').forEach(contact => {
    contact.addEventListener('click', () => {
        const phoneNumber = contact.querySelector('.number').textContent;
        
        // Copy to clipboard
        navigator.clipboard.writeText(phoneNumber).then(() => {
            console.log('Copied to clipboard: ', phoneNumber);

            // Open the phone dialer with the copied number
            window.location.href = `tel:${phoneNumber}`;
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});




