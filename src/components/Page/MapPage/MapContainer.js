/**
 * Map container component
 * Contain all the component in Map Page
 * aka. map canvas and overlay
 *
 * Ressources :
 * https://blog.logrocket.com/how-to-use-react-leaflet/
 * https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/
 * https://cherniavskii.com/using-leaflet-in-react-apps/
 */
import React, { Component } from 'react';
import { MapCanvas } from './MapCanvas';
import { InfoSegment } from './overlay/InfoSegment';
import apis from '../../../api/index';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSelectMemory = this.handleSelectMemory.bind(this);
        this.handleUnselectMemory = this.handleUnselectMemory.bind(this);
        /**
         * memories : contain memories list
         */
        this.state = {
            memories: [],
            loading: true,
            selectedMemory: null,
        };
    }
    // componentDidMount() {
    //   this.map = L.map('map', {
    //     center: [60.45, 22.26],
    //     zoom: 16,
    //     accessToken:
    //       'pk.eyJ1IjoibXl0dXJrdW1lbW9yaWVzIiwiYSI6ImNrNXhuZjdjMjBramMzbm54YWNjZWsweDQifQ.VSBHa6HkpaJfywOHhEjgbA', // Not being used
    //     layers: [
    //       L.tileLayer(
    //         'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoibXl0dXJrdW1lbW9yaWVzIiwiYSI6ImNrNXhuZjdjMjBramMzbm54YWNjZWsweDQifQ.VSBHa6HkpaJfywOHhEjgbA}',
    //         {
    //           attribution:
    //             '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //         },
    //       ),
    //     ],
    //   }).on('click', function(ev) {
    //     console.log(ev.latlng) // Get coordinates for markers example
    //   })
    // }
    // render() {
    //   return <div id="map"></div>
    // }

    /**
     * After component created
     */
    componentDidMount() {
        this.fetchMemories();
    }

    handleSelectMemory(memory) {
        this.setState({
            selectedMemory: memory,
        });
        console.log('Memory selected: ', memory);
    }

    handleUnselectMemory() {
        this.setState({
            selectedMemory: null,
        });
        console.log('Memory unselected ');
    }

    /**
     * Call API to get memories
     */
    fetchMemories() {
        apis.memories
            .getAllMemories()
            .then(res => {
                const memories = [];
                res.data.forEach(element => {
                    const memory = element;
                    memories.push(memory);
                });

                this.setState({
                    memories: memories,
                    loading: false,
                });
                console.log('Memories fetched: ', memories);
            })
            .catch(err => console.error('Error fetching memories:', err));
    }

    render() {
        return (
            <div>
                <MapCanvas
                    memories={this.state.memories}
                    selectedMemory={this.state.selectedMemory}
                    handleSelectMemory={this.handleSelectMemory}
                />
                <InfoSegment
                    memories={this.state.memories}
                    loading={this.state.loading}
                    selectedMemory={this.state.selectedMemory}
                    handleSelectMemory={this.handleSelectMemory}
                    handleUnselectMemory={this.handleUnselectMemory}
                />
            </div>
        );
    }
}
