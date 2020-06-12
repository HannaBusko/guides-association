import React, { Fragment } from 'react';

import SimpleSlider from '../components/Slider';
import RoutesBlock from '../components/Routes';

const img_set = [ 
     {
        url: require('../assets/images/slider/2.jpg'),
    },
    {
        url: require('../assets/images/slider/1.jpg'),
    },
  
    {
        url: require('../assets/images/slider/3.jpg'),
    },
    {
        url: require('../assets/images/slider/4.jpg'),
    },
    {
        url: require('../assets/images/slider/5.jpg'),
    },
    {
        url: require('../assets/images/slider/6.jpg'),
    },
    {
        url: require('../assets/images/slider/7.jpg'),
    },
    {
        url: require('../assets/images/slider/8.jpg'),
    },
];

const HomePage = () => (
    <Fragment>
        <SimpleSlider images={img_set} />
        <RoutesBlock />
    </Fragment>
);


export default HomePage;