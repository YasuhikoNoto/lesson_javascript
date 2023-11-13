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

