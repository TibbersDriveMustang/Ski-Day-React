/**
 * Created by Tibbers on 2/7/17.
 */
import React from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount} from './SkiDayCount'


export class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: new Date("2/6/2016"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Kirkwood",
                    date: new Date("2/16/2016"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Mt. Tallac",
                    date: new Date("2/26/2016"),
                    powder: false,
                    backcountry: true
                }
            ]
        }
    }

    countDays(filter){
        const { allSkiDays } = this.state
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day).length
    }
    render(){
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays(
                                 "powder"
                             )}
                             backcountry={this.countDays(
                                 "backcountry"
                             )}
                />
            </div>
        )
    }
}