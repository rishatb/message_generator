Arrays = {
    signs: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricom', 'aquarius', 'pisces'],

    words: ['make your homework', 'play videogames', 'stay at home', 'leave your house', 'go to the gym', 'eat some grass', 'draw something cute']
}

const randSign = (arr) => {
    randIndex = Math.floor(Math.random() * 12);
    sign = arr.signs[randIndex];
    return sign;
}


console.log(randSign(Arrays));

// control return