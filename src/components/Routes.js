import React from 'react';
import { Segment } from 'semantic-ui-react';

import architecture from '../assets/images/buttons/architecture.jpg';
import religy from '../assets/images/buttons/religy.jpg';
import nature from '../assets/images/buttons/nature.jpg';
import industry from '../assets/images/buttons/industry.jpg';

import { useTranslation } from "react-i18next";

const RoutesBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="route-wrapper">
            <h2>Туристическая мозаика Беларуси</h2>
            <div className="route-grid">
                <Segment raised as='a'
                    href='https://museumkossovo.by/ru/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= "Переход на официальную страницу Музея-усадьбы Тадеуша Костюшко">
                    <div className="route-left">
                        <div className="route-content">
                            <h3> {t('architecture_header')}</h3>
                            <p>{t('architecture_descr')}</p>
                        </div>
                        <img alt='Дворцовый комплекс Сапег в Ружанах' src={architecture} title="Дворцовый комплекс Сапег в Ружанах" />
                    </div>
                </Segment>
                <Segment raised as='a'
                    href='https://vetliva.com/tourism/what-to-see'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= "Переход на страницу с турами по Беларуси">
                    <div className="route-right">
                        <div className="route-content">
                            <h3>{t('relygy_header')}</h3>
                            <p>{t('relygy_descr')}</p>

                        </div>
                        <img alt='Церковь св. Михаила Архангела в д. Рубель' src={religy} title="Церковь св. Михаила Архангела в д. Рубель" />
                    </div>
                </Segment>
                <Segment raised as='a'
                    href='http://belaz.by/about/industrial-tourism/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= "Переход на официальную страницу ОАО БелАЗ">
                    <div className="route-right">
                        <img alt=' ОАО БелАЗ в Жодино' src={industry} title="ОАО БелАЗ в Жодино" />
                        <div className="route-content">
                            <h3>{t('industry_header')}</h3>
                            <p>{t('industry_descr')}</p>
                        </div>

                    </div>
                </Segment>
                <Segment raised as='a'
                    href='https://www.wildlife.by/directory/zakazniki/respublikanskiy-landshaftnyy-zakaznik-elnya/'
                    rel= 'noopener noreferrer'
                    target='_blank'
                    title= 'Переход на страницу с информацией о Республиканском ландшафтном заказнике "Ельня"'>
                    <div className="route-left">
                        <img alt='Меловые карьеры в Волковысском районе' src={nature} title="Меловые карьеры в Волковысском районе" />
                        <div className="route-content">
                            <h3>{t('nature_header')}</h3>
                            <p>{t('nature_descr')}</p>
                        </div>

                    </div>
                </Segment>
            </div>
        </div>

    );

};


export default RoutesBlock;