const generateBtn = document.getElementById('generate-btn');
const emailList = document.getElementById('email-list');

// FUNZIONE PER GENERARE LE 10 MAIL
function generateEmails() {
    emailList.innerHTML = '';
    // funzione per generare una mail
    function fetchAndDisplayEmail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = response.data.response;
                emailList.appendChild(listItem);
            })
            .catch(error => {
                console.error('Errore nella generazione dell\'email:', error);
            });
    }
    // richiamo la funzione 10 volte
    for (let i = 0; i < 10; i++) {
        fetchAndDisplayEmail();
    }
}

generateEmails()
generateBtn.addEventListener('click', generateEmails);


