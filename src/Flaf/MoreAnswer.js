const josIterative = (n, k) => {
    if (k === 1) return n

    let people = []
    for (let i = 1; i <= n; i++) people.push(i)
    let place = 0

    while (people.length > 1) {
        console.log(people)
        for (let skip = 1; skip < k; skip++) people.push(people.shift())
        console.log(people)
        place += 1
        if (people.length === 2) {
            console.log(`${place}: ${people[people.length - 1]} kill ${people.shift()}`)
            break
        }
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