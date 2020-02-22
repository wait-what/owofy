'use strict';

const faces = ['(*^ω^)', '(◕‿◕✿)', '(◕ᴥ◕)', 'ʕ•ᴥ•ʔ', 'ʕ￫ᴥ￩ʔ', '(*^.^*)', 'owo', '(｡♥‿♥｡)', 'uwu', '(*￣з￣)', '>w<', '^w^', '(つ✧ω✧)つ', '(/ =ω=)/'];

module.exports = string => {
    while (string.match(/!+/)) {
        string = string.replace(/!+/, ` ${faces[Math.floor(Math.random() * faces.length)]} `)
    }

    return string
        .replace(/(?:l|r)/g, 'w')
        .replace(/(?:L|R)/g, 'W')
        .replace(/n([aeiou])/g, 'ny$1')
        .replace(/N([aeiou])/g, 'Ny$1')
        .replace(/N([AEIOU])/g, 'NY$1')
        .replace(/ove/g, 'uv')
        .replace(/OVE/g, 'UV');
}
