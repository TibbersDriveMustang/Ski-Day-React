/**
 * Created by Tibbers on 2/6/17.
 */

//import { Component } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import React from 'react'

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total=70, powder=20, backcountry=10, goal=100}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
                <Calendar />
            <span>days</span>
        </div>

        <div className="powder-days">
            <span>{powder}</span>
                <SnowFlake />
            <span>days</span>
        </div>

        <div className="backcountry-days">
            <span>{backcountry}</span>
                <Terrain />
            <span>days</span>
        </div>

        <div>
            <span>
                {calcGoalProgress(
                    total,
                    goal
                )}
            </span>
        </div>
    </div>
    )

SkiDayCount.propTypes = {
    total: React.PropTypes.number,
    powder: React.PropTypes.number,
    backcountry: React.PropTypes.number,
    goal: React.PropTypes.number
}