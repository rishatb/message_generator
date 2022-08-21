signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricom', 'aquarius', 'pisces']

const randSign = (arr) => {
    randIndex = Math.floor(Math.random() * 15);
    sign = arr[randIndex];
    return sign;
}


console.log(randSign(signs));

// control return
