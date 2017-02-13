import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import AfterSchoolProgram from './components/ui/afterSchoolProgram'
import SummerProgram from './components/ui/summerProgram'
import WeekendProgram from './components/ui/weekendProgram'
import DaySchool from './components/ui/daySchool'
import DriversNeeded from './components/ui/driversNeeded'
import D3Sample from './components/ui/d3Sample'

import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
            <Route path="afterSchoolProgram" component={AfterSchoolProgram} />
        	<Route path="members" component={MemberList} />
            <Route path="summerProgram" component={SummerProgram}/>
            <Route path="weekendProgram" component={WeekendProgram}/>
            <Route path="daySchool" component={DaySchool}/>
            <Route path="driversNeeded" component={DriversNeeded}/>
            <Route path="d3Sample" component={D3Sample}>
            </Route>
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes