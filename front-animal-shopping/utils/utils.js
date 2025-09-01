function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


function validarSenha(senha) {
    return senha.length >= 8;
}

uuhjb


function validarCEP(cep) {
    const regex = /^\d{5}-\d{3}$|^\d{5}\.\d{3}$/;
    return regex.test(cep);
}


function mascaraCEP(cep) {
    return cep.replace(/\D/g, '') 
              .replace(/(\d{5})(\d{3})/, '$1-$2'); // Aplica a máscara
}


function mascaraTelefone(telefone) {
    return telefone.replace(/\D/g, '') // remove tudo que não é número
                   .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
}


function testarSenha(senha) {
    if (!validarSenha(senha)) {
        console.log("A senha deve ter no mínimo 6 caracteres.");
    } else {
        console.log("Senha válida!");
    }
}

function testar() {
   
    console.log(validarEmail("exemplo@dominio.com")); 
    console.log(validarEmail("emailinvalido@dominio")); 

    
    testarSenha("123"); 
    testarSenha("senha123"); 

    console.log(validarCEP("12345-678"));
    console.log(validarCEP("12345.678"));
    console.log(validarCEP("12345678")); 

 
    console.log(mascaraCEP("12345678")); 
    console.log(mascaraCEP("987654321")); 

   
    console.log(mascaraTelefone("61987654321")); 
    console.log(mascaraTelefone("2123456789")); 
}

testar();