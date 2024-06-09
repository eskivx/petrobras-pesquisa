function validarCPF(cpf) {
    // Remove caracteres que não são números
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Função para calcular o dígito verificador
    function calcularDigito(cpf, peso) {
        let soma = 0;
        for (let i = 0; i < peso - 1; i++) {
            soma += parseInt(cpf.charAt(i)) * (peso - i);
        }
        let resto = (soma * 10) % 11;
        return resto === 10 || resto === 11 ? 0 : resto;
    }

    // Calcula os dois dígitos verificadores e verifica com os do CPF informado
    const digito1 = calcularDigito(cpf, 10);
    const digito2 = calcularDigito(cpf, 11);

     if (digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10))){

        alert("o cpf é valido")

     } else {

        alert("o cpf é invalido")


     };


}



