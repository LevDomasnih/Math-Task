import React from 'react'

const Flaf = ({people, nextDeath}) => {

    const flaf = (people, nextDeath = 2) => {
        if (people == 1) return 1
        else return (flaf(people - 1, nextDeath) + nextDeath-1) % people + 1
    }

    const validate = () => {
        let arr = []
        for (let i = 1; i <= people; i++) {
            arr.push(i)
        }
        return arr
    }

    const biggestSize = (num, k, people) => {
        if (people < 1) return num
        else {
            people -= 1
            num /= k
            return biggestSize(num, k, people)
        }
    }


    const fontSize = () => {
        if (people <= 10) {
            return 27
        } else if (people <= 20) {
            return 10.5
        } else if (people <= 30) {
            return 6.5
        } else if (people <= 40) {
            return 4.7
        } else if (people <= 50) {
            return 3.7
        } else if (people <= 60) {
            return 3.05
        } else if (people <= 70) {
            return 2.58
        } else if (people <= 80) {
            return 2.25
        } else if (people <= 90) {
            return 1.985
        } else if (people <= 100) {
            return 1.77
        } else if (people <= 110) {
            return 1.56
        } else if (people > 110) {
            return biggestSize(1.77, 1.1, (people - 100) / 10)
        }
    }

    return (
        <>
            {flaf(people, nextDeath)}
            <svg viewBox="0 0 100 100" width="100" height="100" className="App-logo">
                <defs>
                    <path id="circle"
                          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize={fontSize()}>
                    <textPath href="#circle">
                        {validate().map((e) => {
                            if (e == flaf(people, nextDeath)) {
                                return (
                                    <>
                                        {validate().filter((elem) => elem < e).map((e) => e + ' ')}
                                        <tspan fill="red" >
                                            {e + ' '}
                                        </tspan>
                                        {validate().filter((elem) => elem > e).map((e) => e + ' ')}
                                    </>
                                )
                            }
                        })}
                    </textPath>
                </text>
            </svg>
        </>
    )
}

export default Flaf