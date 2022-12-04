// 1
function generateEmail(name, surname, age) {
    let arr = [name, surname, age]
    let gmail = ""
    let gmail2 = ""
    let gmail3 = ""
    for (item of arr) {
        if (arr) {
            gmail = name + surname + '@gmail.com';
            gmail2 = surname + name + '@gmail.com';
            gmail3 = name + surname + age + '@gmail.com';
            console.log(
                '1)' + ' ' + gmail.toLocaleLowerCase(),
                '2)' + ' ' + gmail2.toLocaleLowerCase(),
                '3)' + ' ' + gmail3.toLocaleLowerCase(),
            );
        }
    }
}

generateEmail('Nazif', 'Jamshedov', '15')
generateEmail('Daler', 'Sharifkulov', '23')