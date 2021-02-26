module.exports = function toReadable (number) {
    const a1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty' ];
    const a2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const a3 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let str = '' + number;
    if (number <= 20) {
        return a1[number];
    }
    if (number < 100) {
        return `${ a2[+str[0] - 2] }${ str[1] === '0' ? '' : ' ' + a1[+str[1]] }`;
    }
    if (number) {
        if (number % 100 === 0) { return a3[+str[0] - 1] }
        return `${ a3[+str[0] - 1] }${ (+(str[1] + str[2])) <= 20 ? ' ' + a1[+(str[1]+str[2])] : str[1] === '0' ? '' : ' ' + a2[+str[1] - 2] }${ (+(str[1] + str[2])) <= 20 ? '' : str[2] === '0' ? '' : ' ' + a1[+str[2]] }`;
    }
}



