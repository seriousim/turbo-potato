import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import styles from '../styles/beerlist.css'

function Filter({id, title, items, selected, onChange}) {
    var titleAddon;
    if(selected == 'SHOW_ALL') {
        titleAddon = ': All';
    } else {
        titleAddon = ': ' + selected;
    }
    return (
        <DropdownButton bsStyle="info" title={title + titleAddon} id={id}>
            <MenuItem 
                key="all" 
                eventKey="all" 
                onClick={() => {onChange('SHOW_ALL')}}
                active={selected == 'SHOW_ALL'}
            >All</MenuItem>
            {
                items.map(
                    (item, i) =>
                    <MenuItem 
                        key={i} 
                        eventKey={i}
                        onClick={() => {onChange(item)}}
                        active={selected == item}
                    >{item}</MenuItem>
                )
            }
        </DropdownButton>
    );
}

Filter.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;