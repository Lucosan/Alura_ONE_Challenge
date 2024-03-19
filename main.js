const chavesCriptografar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const chavesDescriptografar = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function criptografar() {
    const inputText = document.getElementById('inputText').value;
    let resultado = '';
    for (const letra of inputText) {
        resultado += chavesCriptografar[letra] || letra;
    }
    document.getElementById('botao_copiar').style.display = 'block';
    document.getElementById('resultado').textContent = resultado;
}

function descriptografar() {
    const inputText = document.getElementById('inputText').value;
    let resultado = '';
    const partes = inputText.match(/(ober|enter|imes|ai|ufat|\w|\s)/g);
    for (const parte of partes) {
        resultado += chavesDescriptografar[parte] || parte;
    }
    document.getElementById('resultado').textContent = resultado;
}

function copiarTexto() {
    const textoCriptografado = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(textoCriptografado)
        .then(() => alert('Texto copiado com sucesso!'))
        .catch(err => console.error('Erro ao copiar texto: ', err));
}
