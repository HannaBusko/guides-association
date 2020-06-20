import React from 'react';

import AboutBlock from '../components/About';
import { useTranslation } from "react-i18next";


const img_about_main = {
    url: require('../assets/images/different/about.group.jpg')
};

const img_hystory_small = {
    src: require('../assets/images/different/history.jpg'),
    alt: "карта Великого княжества Литовского 1613-1630 Николая Криштофа Радзивилла (Сиротка)."
};

const img_rules_small = {
    src: require('../assets/images/different/rules.jpg'),
    alt: "устав"
};

const img_join_small ={
    src: require('../assets/images/different/rules.jpg'),
    alt: "устав"
};

const Title = () => {
    const { t } = useTranslation();
    return <h1>{t('about_title')}</h1>;
}

const HistoryBlock = () => {
    const { t } = useTranslation();

    return (
        <AboutBlock image_main={img_about_main} image_small={img_hystory_small} title={<Title />}>
            <h2>{t('about_history_title')}</h2>
            <p>{t('about_history1')}</p>
            <p>{t('about_history2')}</p>
        </AboutBlock>
    )
};
const RulesBlock = () => {
    const { t } = useTranslation();
    return (
        <AboutBlock image_main={img_about_main} image_small={img_rules_small} title={<Title />}>
            <h2>{t('about_rules_title')}</h2>
            <p>{t('about_rules1')}</p>
            <p>{t('about_rules2')}</p>
            <ul>
                <p>{t('about_rules3')}</p>
                <li>{t('about_rules3_1')} </li>
            </ul>
            <ul>
                <p>{t('about_rules4')}</p>
                <li>{t('about_rules4_1')} </li>
                <li>{t('about_rules4_2')} </li>
                <li>{t('about_rules4_3')} </li>
                <li>{t('about_rules4_4')} </li>
                <li>{t('about_rules4_5')} </li>
                <li>{t('about_rules4_6')} </li>
            </ul>
            <ul>
                <p>{t('about_rules5')}</p>
                <li>{t('about_rules5_1')} </li>
                <li>{t('about_rules5_2')} </li>
                <li>{t('about_rules5_3')} </li>
                <li>{t('about_rules5_4')} </li>
                <li>{t('about_rules5_5')} </li>
                <li>{t('about_rules5_6')} </li>
                <li>{t('about_rules5_7')} </li>
                <li>{t('about_rules5_8')} </li>
            </ul>
        </AboutBlock>

    )
};

const JoinBlock = () => {
    const { t } = useTranslation();

    return (
        <AboutBlock image_main={img_about_main} image_small={img_join_small} title={<Title />}>
            <h2>{t('about_join_title')}</h2>
            <p>{t('about_join1')}</p>
            <p>{t('about_join2')}</p>
            <p>{t('about_join3')}</p>
            <p>{t('about_join4')}</p>
        </AboutBlock>
    )
};

export { HistoryBlock, RulesBlock,JoinBlock };