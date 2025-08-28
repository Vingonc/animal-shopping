const btnRegister = document.querySelector('#btn-register');

const register = () => {
    const email = document.querySelector('#ipt_email').value;
    const passwd = document.querySelector('#ipt_passwd').value;

    if (!email) return;
    if (!passwd) return;

    const req = {
        email,
        passwd
    }

    fetch(`http://localhost:3000/users?email=${email}`)
        .then(res => res.json())
        .then(users => {
            if (users.length > 0) {
                alert('Email já cadastrado');
                return;
            }

            const req = { email, passwd };

            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Usuário cadastrado:', data);
                    window.location.href = '/login.html';
                })
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
}


btnRegister.addEventListener('click', register);
