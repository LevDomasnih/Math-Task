import React from 'react'

const FalseFlaf = () => {
    return (
        <>
            <svg viewBox="0 0 100 100" width="100" height="100" className="App-logo">
                <defs>
                    <path id="circle"
                          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
                </defs>
                <text font-size="4.6">
                    <textPath href="#circle">
                        1 2 3 4 5 6 7 8 9 10
                        11 12 13 14 15 16 17 18
                        <tspan  fill="red" >
                            19
                        </tspan>
                        20
                        21 22 23 24 25 26 27 28 29 30
                        31 32 33 34 35 36 37 38 39 40 41
                    </textPath>
                </text>
            </svg>
        </>
    )
}

export default FalseFlaf