'use strict';
// console.log('Hello World!');単行コメントアウト

/*複数行コメントアウト
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
*/
 
console.log(12345);//数値リテラル
console.log(12345.6789);//浮動小数点リテラル
console.log('12345');//文字列リテラル

console.log('Hello! I\'m Yasuhiko Noto.');//エスケープシーケンス（文字列内の特殊記号を通常文字列と扱う方法 特殊記号前に/を記述）
console.log('\ \t AAA \n BBB');// /n改行
console.log("Hello! I'm Yasuhiko Noto.");// 'と"を使い分けることでも回避可能
console.log('こんにちは! "能登泰彦"さん')

let color = 'Red'; // let で変数定義 colorという変数に'Red'を代入(旧バージョンでは"var")  予約語は使用不可
console.log(color);
color = 'Green';
console.log(color);

let myColor = 'Blue'; //※慣習的な識別子の命名規則キャメルケース　複数単語を接続する場合は単語の頭文字を大文字にする
console.log(myColor);

//定数 変更不可な定数を定義する
const PI = 3.14;
console.log(PI);
// PI = 3.1;と記述しても書き換えできない

let myName = 'Noto';
let num = 123;
let dec = 123.456;
console.log(myName);
console.log(num);
console.log(dec);
console.log(typeof myName);
console.log(typeof num);
console.log(typeof dec);
myName = 456;
console.log(myName);
console.log(typeof myName);
//動的型付け言語　javascriptのように代入時にデータ型が決まる言語　一つの変数のデータ型を変えることはバグの原因となりうるため推奨されない
//静的型付け言語　変数の宣言時にデータ型が決まる言語

let ans = 1 + 2;
console.log(ans);

let i = 20;
let j = 10;
let ans1 = i + j;
console.log(ans1);
let ans2 = i - j;
console.log(ans2);
let ans3 = i * j;
console.log(ans3);
let ans4 = i / j;
console.log(ans4);

let x = 3;
let y = 2;
let ans5 = x / y;
console.log(ans5);
let ans6 = x % y;
console.log(ans6);
let ans7 = Math.pow(x, y);//べき乗 powはべき乗を表すpower
console.log(ans7);
let ans8 = x ** y;//**もべき乗
console.log(ans8);
let ans9 = x * x;
console.log(ans9);

//演算子の優先順位
let l = 1;
let m = 2;
let n = 3;
let ans10 = l + m * n;
console.log(ans10);
let ans11 = (l + m) * n;
console.log(ans11);

//文字列月合とテンプレートリテラル
let lastName = 'のと';
let firstName = 'やすひこ';
let message1 = 'こんにちは ' + lastName + ' ' + firstName + ' さん';
console.log(message1);
//``で区切ることでテンプレートリテラルを使用できる
//${}を使用すると文章の中に変数の値を利用することができる　改行も可能
let message2 = `こんにちは ${lastName} ${firstName} さん
JavaScriptの学習を始めましょう`; 
console.log(message2);

//複合代入演算子
let num1 = 20;
num1 = num1 + 10;
console.log(num1);

let num2 = 20;
num2 += 10;
console.log(num2);

let num3 = 20;
num3 -= 10;
console.log(num3);

let num4 = 20;
num4 *= 10;
console.log(num4);

let num5 = 20;
num5 /= 10;
console.log(num5);

//演習問題：演算子
let weight = 60;
let height = 1.7;
let BMI = weight / (height * height);
console.log(BMI);
 
//インクリメント デクリメント(1加算/減算)　繰り返し処理で使用する事が多い
let num6 = 10;
num6++;
console.log(num6);
num6--;
console.log(num6);
//前置演算子のインクリメント　デクリメント
++num6;
console.log(num6);
--num6;
console.log(num6);

let num7 = 10;
let num8 = 10;
let ans12 = ++num7;//前置演算子 インクリメント後に代入
let ans13 = num8++;//後置演算子 代入後にインクリメント
console.log(ans12);
console.log(ans13);
//結果が変わるので注意

//条件分岐
let temperature = 29;
if (temperature > 28) {
    console.log('冷房稼働');
}

console.log(29 > 28);
console.log(29 < 28);
//以上
let a = 100;
if (a >= 100) {
    console.log('100以上');
}
//より大きい
let b = 101;
if (b > 100) {
    console.log('100より大きい');
}
//以下
let c = 100;
if (c <= 100) {
    console.log('100以下');
}
//未満
let d = 99;
if (d < 100) {
    console.log('100未満');
}
//等しい
let e = 100;
if (e == 100) {
    console.log('100と等しい');
}
//等しくない
let f = 111;
if (f != 100) {
    console.log('100と等しくない');
}

//if / else
let g = 101;
if (g >= 100) {
    console.log('100以上');
} else {
    console.log('100以上ではない');
}

//より複雑な条件分岐 else if
let score = 70;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 60) {
    console.log('C');
} else {
    console.log('D');
}