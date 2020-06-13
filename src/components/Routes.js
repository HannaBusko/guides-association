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
            <Segment>
                <div className="route-left">
                    <div className="route-content">
                        <h2> {t('architecture_header')}</h2>
                        <p>{t('architecture_descr')}</p>
                    </div>
                    <img alt='!!!!тут надо описание!!!' src={architecture} />
                </div>
            </Segment>
            <Segment>
                <div className="route-right">
                    <div className="route-content">
                        <h2>{t('relygy_header')}</h2>
                        <p>{t('relygy_descr')}</p>

                    </div>
                    <img alt='!!!!тут надо описание!!!' src={religy} />
                </div>
            </Segment>
            <Segment>
                <div className="route-right">
                    <img alt='!!!!тут надо описание!!!' src={industry} />
                    <div className="route-content">
                        <h2>{t('industry_header')}</h2>
                        <p>{t('industry_descr')}</p>
                    </div>

                </div>
            </Segment>
            <Segment>
                <div className="route-left">
                    <img alt='!!!!тут надо описание!!!' src={nature} />
                    <div className="route-content">
                        <h2>{t('nature_header')}</h2>
                        <p>{t('nature_descr')}</p>
                    </div>

                </div>
            </Segment>

        </div>

    );

};


export default RoutesBlock;