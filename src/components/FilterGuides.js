import React from 'react';

import { useTranslation } from "react-i18next";

import { Input, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions from '../assets/store/actions/filter';

const languages = [
  { key: 'ja', text: 'Японский / Japanese', value: 'japanese', image: { avatar: true, src: require('../assets/images/flags/ja-Japanese.png') }, },
  { key: 'en', text: 'Английский / English', value: 'english', image: { avatar: true, src: require('../assets/images/flags/en-English.png') }, },
  { key: 'per', text: 'Персидский / Persian', value: 'persian', image: { avatar: true, src: require('../assets/images/flags/ir-Iran.png') }, },
  { key: 'pl', text: 'Польский / Polish', value: 'polish', image: { avatar: true, src: require('../assets/images/flags/pl-Polish.png') }, },
  { key: 'tk', text: 'Турецкий / Turkish', value: 'turkish', image: { avatar: true, src: require('../assets/images/flags/tk-Turkish.png') }, },
  { key: 'de', text: 'Немецкий / German', value: 'german', image: { avatar: true, src: require('../assets/images/flags/de-German.png') }, },
  { key: 'ar', text: 'Арабский / Arabic', value: 'arabic', image: { avatar: true, src: require('../assets/images/flags/ar-Arabic.png') },},
  { key: 'he', text: 'Иврит / Hebrew', value: 'hebrew', image: { avatar: true, src: require('../assets/images/flags/he-hebrew.png') }, },
  { key: 'es', text: 'Испанский / Spanish', value: 'spanish', image: { avatar: true, src: require('../assets/images/flags/es-Spanish.png') },},
  { key: 'fr', text: 'Французский / French', value: 'french', image: { avatar: true, src: require('../assets/images/flags/fr-French.png') }, },

]


  const mapStateToProps = ({ filter }) => ({
    filterBy:filter.filterBy
   });
   
   const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(filterActions,dispatch)
   });
 


const FilterBlock = ({ searchQuery, setSearchQuery, setFilter }) => {
    const { t } = useTranslation();
    return (
        <div className="filter-container">
          <Dropdown placeholder='Языки' clearable fluid selection options={languages}  onChange={(e, { value }) => setFilter({ value })} />
            <Input
                icon="search"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery} placeholder={t('search')}></Input>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock); 






