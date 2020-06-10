import React, { Fragment } from 'react';
import { Icon, Segment, Popup } from 'semantic-ui-react';

const FooterBlock = () => {
    return (
        <Fragment>
            <Popup
                trigger={
                    <Segment>
                        <Icon name='copyright outline' size='huge' />
                    </Segment>}>
                <Popup.Content>
                   For more information: <a>https://www.linkedin.com/in/anna-busko-844a7984/</a>
                </Popup.Content>
            </Popup >
        </Fragment >
    )
};

export default FooterBlock;