//Типы данных
/*
1. Числа - (number)
2. Строки - (string)
3. Булевые значения (сравнение- (boolean)
4. Симбол - (symbol)
5. Объекты - (object)
6. представляет отсутствие какого-либо объектного значения -(null)
7. Неопределено - (undefined)
8. BigInt -(Большие числа)

* написать программу: нужно запрашивать у пользователя его имя и фамилию (отдельным prompt) и выводит приветствие в виде: Здравствуйте, Имя Фамилия!
* написать переменную, которая хранит объект банковского филиала: адрес (строка), название (строка), работает ли на выходных(логическое), количество касс (число), время работы (объект с полями ОТ(строка) и ДО(строка)), время обеда (объект с полями ОТ(строка) и ДО(строка))
* написать переменную которая хранит объект банковского счета: номер счета(строка), валюта(строка), баланс(число), имя владельца(строка), заблокирован ли счет (логический тип).
 */
//1.
let userName = prompt('Enter your name');
let userSurname = prompt('Enter your surname');
alert(userName + ' ' + userSurname +"!");

//2
const bankBranch = {
    address: '123 Main St',
    name: 'Bank of America',
    isWorking: true,
    numberOfCashiers: 5,
    workingHours: {
        OT: '9:00 AM',
        DO: '5:00 PM'
    },
    lunchTime: {
        OT: '12:00 PM',
        DO: '1:00 PM'
    }

}
3//

const bankAccount = {
    accountNumber: '1234567890',
    currency: 'USD',
    balance: 1000,
    ownerName: 'John Doe',
    isBlocked: false
}


