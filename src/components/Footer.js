import React from 'react';
import { Icon, Segment, List } from 'semantic-ui-react';

const FooterBlock = () => {
    return (
        <div className="footer">
            <div className="footer-copyright">
                <Segment >
                    <span> Copyright </span>
                    <Icon name='copyright outline' size='huge' />
                    <span>2020 Anna Busko</span> 
                    <List horizontal className="social-list">
                    <List.Item>
                        <a href="https://github.com/HannaBusko" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" size="huge" color="grey" />
                        </a>
                    </List.Item>
                    <List.Item>
                        <a href="https://www.linkedin.com/in/anna-busko-844a7984/" target="_blank" rel="noopener noreferrer">
                            <Icon name="linkedin" size="huge" color="blue" />
                        </a>
                    </List.Item>
                  
                </List>
                </Segment>
            </div>
        </div >
    )
};

export default FooterBlock;