import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class MyStockChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                title: {
                    text: 'My Stock Chart'
                },
                xAxis: {
                    categories: ['Oil', 'Acrylic', 'Mixed']
                    
                },
                xAxis2: {
                    type: ['Abstract', 'Nature', 'All']
                },
                xAxis3: {
                    price: ['100', '200', '300']
                },
                series: [
                    { data: [3, 2, 5] },
                    { data: [3, 2, 3] },
                    { data: [3, 2, 7] }
                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                }
            },
            hoverData: null
        };
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
        const { chartOptions, hoverData } = this.state;

        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
                <h3>Hovering over {hoverData}</h3>
                <button onClick={this.updateSeries.bind(this)}>Update Series</button>
            </div>
        )
    }
}

export default MyStockChart;