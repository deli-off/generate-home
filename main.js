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
                gmail.toLocaleLowerCase(),
                gmail2.toLocaleLowerCase(),
                gmail3.toLocaleLowerCase(),
            );
        }
    }
}

generateEmail('Nazif', 'Jamshedov', '15')
