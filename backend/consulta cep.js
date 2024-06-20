// cepUtils.js
export function limpaFormularioCep(setCep, setMensagem) {
    setCep('');
    setMensagem('');
}

export function meuCallback(conteudo, setMensagem) {
    if (!("erro" in conteudo)) {
        const localidade = String(conteudo.localidade);
        if (localidade === "Florianópolis" || localidade === "Tijucas") {
            setMensagem("Cep Válido!");
        } else {
            setMensagem("Cep Inválido!");
        }
    } else {
        setMensagem("CEP não encontrado.");
        alert("CEP não encontrado.");
    }
}

export function pesquisacep(valor, setCep, setMensagem) {
    const cep = valor.replace(/\D/g, '');

    if (cep !== "") {
        const validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            const script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=window.handleCallback';
            document.body.appendChild(script);
        } else {
            limpaFormularioCep(setCep, setMensagem);
            alert("Formato de CEP inválido.");
        }
    } else {
        limpaFormularioCep(setCep, setMensagem);
    }
}
