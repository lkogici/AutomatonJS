const input = require('input');
const functions = require('./functions');

const askSomething = async () => {
    const entrada = await input.text('Entre com a sentença: ', { default: 'aba' });
    functions.prepare(entrada);
}

askSomething();