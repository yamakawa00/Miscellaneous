class Person {
    // プロバティ
    name: string;
    sex: string;

    // コンストラクター
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    // メソッド
    show() {
        return `${this.name}は${this.sex}です。`
    }
}
let p = new Person('りお', '女');
console.log(p.show());

//  この構成は、Java/C#などでオブジェクト指向構文を学んだことがある人であれば直感的に理解できる内容

console.log('クラスの内外からアクセスを制御する アクセス修飾子');

class Person2 {
    // name/sexプロバティを準備
    private name: string;
    private sex: string;
    // コンストラクター(プロパティを初期化)
    constructor(name: string, sex: string) {
        this.name = name;
        this.sex = sex;
    }

    // 3. privateプロパティにもアクセス可能
    public show(): string {
        // 2. クラス内からアクセス可能
        return `${this.name}は${this.sex}です`;
    }
}
let p2 = new Person2('真央', '女');
console.log(p2.show());

console.log('コンストラクターとプロパティ設定');
class Person3 {
    // シンプルに書くとしたらこんな感じ
    constructor(private name: string, private sex: string) {
    }

    // 3. privateプロパティにもアクセス可能
    public show(): string {
        // 2. クラス内からアクセス可能
        return `${this.name}は${this.sex}です`;
    }
}
let p3 = new Person3('まりな', '女');
console.log(p3.show());

console.log('getter/setterアクセサー');
// privateプロパティにアクセスするための特別なメソッドです。
// 利点
// - 読み書きができる
// - 値チェック/戻り値の加工などが可能
class Person4 {
    private _age: number;
    // getterアクセサー
    get age(): number {
        return this._age
    }

    // setterアクセサー
    set age(value: number) {
        if (value < 0) {
            throw new RangeError('ageプロパティは正数で指定してください');
        }
        this._age = value;
    }
}
let p4 = new Person4();
p4.age = 10;
console.log(p4.age);

console.log('静的メンバー');
class Figure {
    // 静的プロパティPi(円周率)
    public static Pi: number = 3.14159;
    // 静的メソッドcircle(園の面積)
    public static circle(radius: number): number {
        // 静的メンバーにアクセスする際にも、thisを明示的にしなくてはならない
        return radius + radius + this.Pi
    }
}
console.log(Figure.Pi);
console.log(Figure.circle(5));