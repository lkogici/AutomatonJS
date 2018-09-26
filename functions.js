
const finals = [ 'qOne' ]; // final states
const initial = [ 'qZero' ]; // the initial state

const states = [ 'qZero', 'qOne' ];

const prepare = (sentence) => {
    console.log(`\n\n Sentence: ${sentence} \n`)
    const sentenceArr = sentence.split("");
    qZero(sentenceArr);
}

const qZero = (sentence) => {
    let x = sentence.shift();
    if (x === 'a') {
        return printTransition(x, 'qZero', 'qZero') || qZero(sentence);
    } else if (x === 'b') {
        return printTransition(x, 'qZero', 'qOne') || qOne(sentence);
    } else {
        return isFinal('qZero');
    }
}

const qOne = (sentence) => {
    let x = sentence.shift();
    if (x === 'a') {
        return printTransition(x, 'qOne', 'qOne') || qOne(sentence);
    } else if (x === 'b') {
        return printTransition(x, 'qOne', 'qZero') || qZero(sentence);
    } else {
        return isFinal('qOne');
    }

}

const isFinal = (state) => {
    if (finals.includes(state)) {
        console.log(`\n${state} is final! [Accepted]`);
    } else {
        console.log(`\n${state} isn't final! [Declined]`);
    }
}

const printTransition = (input, from, to) => {
    console.log(`(${from}, ${input}) ~> ${to}`);
}

module.exports = { prepare, qZero };