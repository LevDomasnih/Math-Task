const josIterative = (n, k) => {
    if (k === 1) return n // если каждый убивает себя то живой последний!

    let people = [] // создаем массив
    for (let i = 1; i <= n; i++) people.push(i) // от 1 до числа n закидываем в массив
    let place = 0 // это номер строчки, для удобства

    while (people.length > 1) { // пока длина больше или равна 2 то выполняем ->
        console.log(people) // !!!!!
        for (let skip = 1; skip < k; skip++) people.push(people.shift()); // из начала достаем элементы и кидаем в конец
        console.log(people) // !!!!!
        place += 1 // прибавляем место
        if (people.length === 2) { // если длина массива 2 то ->
            console.log(`${place}: ${people[people.length - 1]} kill ${people.shift()}`)
            break // прерываем операцию
        }
        // иначе ->
        console.log(`${place}: ${people[people.length - (k-1)]} kill ${people.shift()}`)
    }
    console.log(people + " is survivor")
}

const josIterativeTwo = (n, k) => {
    let people = [];
    for (let i = 1; i <= n; i++) people.push(i);
    let place = 0

    while (people.length !== 1) {
        console.log(people)
        for (let skip = 1; skip < 2; skip++) people.push(people.shift());
        // console.log()
        console.log(people)
        place += 1
        console.log(`${place}: ${people[people.length - 1]} kill ${people.filter((e) => e == people[1])}`)
        // console.log(place + ':', people[people.length - 1],'kill', people.shift())
        people = people.filter((e) => e !== people[1])
    }

    return people[0]; //survivor
}

// console.log(josIterativeTwo(41, 3) + " is survivor");