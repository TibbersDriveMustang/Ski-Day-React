/**
 * Created by Tibbers on 2/12/17.
 */
import React from 'react'
import data from './data'

class GraphBody extends React.Component{

    // componentWillMount(){
    //     this.setState({
    //         data: []
    //     })
    // }

    prepareData(){
        let d = [`M${this.props.x} ${this.props.y}`];

        let collector = [
            [1, 3],
            [2, 5],
            [3, 2],
            [4, 16],
            [18, 5]
        ].map( function(chunk) {
            let xNext = chunk[0] ;
            let yNext = -chunk[1] ;
            return `L ${xNext} ${yNext}`;
        });

        return d.concat(collector).join('');
    }

    render(){
        let d = this.prepareData();
        return (
            <path d={d} stroke="orange" strokeWidth={1} fill="none"/>
        )
    }
}

GraphBody.defaultProps = {
    multiplier: 20,
    x: 0,
    y: 0,
    data: [
        [1, 3],
        [2, 5],
        [3, 2],
        [4, 16],
        [18, 5]
    ]
}

export default GraphBody



