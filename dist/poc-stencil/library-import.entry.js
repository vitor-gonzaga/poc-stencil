import { r as registerInstance, h } from './index-569e9931.js';

const LibraryImport = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /*@Prop() GRAPH_DATA: GraphData<number[]> = {
    pieChart: {
      labelFormat: 'ANY',
      dataFormat: 'GROUPED_TWO_DIGITS',
    },
    styles: {
      width: '100%',
      height: '500px',
      margin: '20px 0',
    },
    colors: [
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ],
    labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64', '≥65'],
    data: [2704659, 4499890, 2159981, 3853788, 16106543, 8819342, 612463],
  };*/
  render() {
    return (h("div", null, "pie-chart"));
  }
};

export { LibraryImport as library_import };
