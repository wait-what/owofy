'use strict';

const faces = ['(・`ω´・)', ';;w;;', 'owo', 'OwO', 'uwu', 'UwU', '>w<', '^w^', '(つ✧ω✧)つ', '(/ =ω=)/'];

const owoString = (string) => {
    string = string.replace(/(?:l|r)/g, 'w');
    string = string.replace(/(?:L|R)/g, 'W');
    string = string.replace(/n([aeiou])/g, 'ny$1');
    string = string.replace(/N([aeiou])/g, 'Ny$1');
    string = string.replace(/N([AEIOU])/g, 'Ny$1');
    string = string.replace(/ove/g, 'uv');
    string = string.replace(/!+/g, ` ${faces[Math.floor(Math.random() * faces.length)]} `);

    return string;
};

module.exports = owoString;
