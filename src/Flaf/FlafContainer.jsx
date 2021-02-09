import React from 'react'
import Flaf from "./Flaf";
import FalseFlaf from "./FalseFlaf";

class FlafContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: 41,
            nextDeath: 2,
        }
    }

    handleChangePeople = (people) => {
        const newPeople = people.target.value > 0 ? people.target.value : 1
        this.setState({
            people: Number(newPeople)
        })
    }

    handleChangeNextDeath = (nextDeath) => {
        const newNextDeath = nextDeath.target.value > 0 ? nextDeath.target.value : 1
        this.setState({
            nextDeath: Number(newNextDeath)
        })
    }

    render() {
        const {
            people,
            nextDeath,
        } = this.state

        return (
            <>
                Участники <input type="number" value={people} onChange={this.handleChangePeople}/>
                Разброс <input type="number" value={nextDeath} onChange={this.handleChangeNextDeath}/>
                <Flaf people={people} nextDeath={nextDeath} />
            </>
        )
    }
}

export default FlafContainer