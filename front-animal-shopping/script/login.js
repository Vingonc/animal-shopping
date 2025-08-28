const btnLogin = document.querySelector('#btn-login');


const login = () => {
    const email = document.querySelector('#ipt_email').value;
    const passwd = document.querySelector('#ipt_passwd').value;

    if (!email) return;
    if (!passwd) return;

    fetch(`http://localhost:3000/users?email=${email}`)
        .then(res => res.json())
        .then(users => {
            
            if (users.length === 0) {
                alert('Email não cadastrado');
                return;
            }

            const user = users[0];

            if (user.passwd !== passwd) {
                alert('Senha incorreta');
                return;
            }

            console.log('Usuário logado:', user);
            window.location.href = '/index.html';
        })
        .catch(error => console.error(error));
};


btnLogin.addEventListener('click', login);
