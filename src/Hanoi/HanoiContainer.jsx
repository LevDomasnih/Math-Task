import React from 'react'

class HanoiContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action: [],
            hanoiEl: 3,
            isSubmit: false

        }
    }

    val = 0

    handleChangeEl = (el) => {
        this.setState({
            action: [],
            hanoiEl: Number(el.target.value)
        })
    }

    handleClick = () => {
        this.setState({
            isSubmit: true
        })
        this.hanoi(this.state.hanoiEl, 'First Sec', 'Second Sec', 'Third Sec')
        this.val = 0
    }

    hanoi = (n, first, second, three) => {
        if (n == 1) {
            this.state.action.push(`\n${this.val+=1}......Move disk 1 from ${first} to ${second}`)
            // console.log(`${this.val+=1}......Move disk 1 from ${first} to ${second}`)
        }
        else {
            this.hanoi(n-1, first, three, second)
            this.state.action.push(`\n${this.val+=1}......Move disk ${n} from ${first} to ${second}`)
            // console.log(`${this.val+=1}......Move disk ${n} from ${first} to ${second}`)
            this.hanoi(n-1, three, second, first)
        }
    }

    render() {
        return(
            <>
                Кол-во: <input type="number" value={this.state.hanoiEl} onChange={this.handleChangeEl} />
                <button onClick={this.handleClick}>Разыграть</button>
                {this.state.isSubmit && <textarea style={{width: '600px', height: '850px', backgroundColor: 'darkgray', border: '5px solid #861034'}} value={this.state.action} />}
            </>
        )
    }
}

export default HanoiContainer