import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'This Year Sales'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Canvas',
                    colorByPoint: true,
                    data: [{
                        name: 'Abstract',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Nature',
                        y: 11.84
                    }, {
                        name: 'Oil',
                        y: 10.85
                    }, {
                        name: 'Acrylic',
                        y: 4.67
                    }, {
                        name: 'Mixed',
                        y: 4.18
                        }],
                }],
                hoverData: null
            }
        }
        
    }
    setHoverData = (e) => {
        // The chart is not updated because `chartOptions` has not changed.
        this.setState({ hoverData: e.target.category })
    }

    updateSeries = () => {
        // The chart is updated only with new options.
        this.setState({
            chartOptions: {
                series: [
                    { data: [Math.random() * 5, 2, 1] }
                ]
            }
        });
    }
    render() {
        const { chartOptions } = this.state;

        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
                <button onClick={this.updateSeries.bind(this)}>Update Series</button>
            </div>
        )
    }
  
    }
   
        
    
    

export default PieChart;