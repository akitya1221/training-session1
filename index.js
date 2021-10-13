for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + "回目" + "私はアホ犬なのでしょうかワン？");
    } else if (i % 3 == 0 && i % 2 == 0) {
        console.log(i + "回目" + "アホ");
    } else if (i % 5 == 0 && i % 2 == 0) {
        console.log(i + "回目" + "犬");
    } 
}
