import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Filter from './Filter';

import styles from '../styles/beerlist.css'

function Dashboard({
        selectedBitterness,
        selectedColor,
        selectedAlc,
        bitternesses = [],
        colors = [],
        alcs = [],
        loading,
        onBitternessChange,
        onColorChange,
        onAlcChange,
        onRefreshBeer,
    }) {

    return (
        <div className="styles.dashboard">
            <div className="row">
                <div className="col-lg-10">
                    <div className="btn-toolbar">
                        <Filter
                            id="bitterness"
                            title="Bitterness"
                            items={bitternesses}
                            selected={selectedBitterness} 
                            onChange={onBitternessChange}
                        />
                        <Filter
                            id="color"
                            title="Color"
                            items={colors} 
                            selected={selectedColor} 
                            onChange={onColorChange}
                        />
                        <Filter
                            id="alc"
                            title="Alc %"
                            items={alcs} 
                            selected={selectedAlc} 
                            onChange={onAlcChange}
                        />
                    </div>
                </div>
                <div className="col-lg-2 text-right">
                    <div className={styles.refresh}>
                        <button 
                            type="button" 
                            className={classNames("btn", "btn-primary")} 
                            aria-label="Left Align"
                            onClick={() => {onRefreshBeer()}}
                        >
                            <i className="fa fa-refresh" aria-hidden="true"></i><span> </span>
                            {
                                loading ?
                                "Loading..." : "Refresh beer"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    selectedBitterness: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    selectedColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    selectedAlc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    bitternesses: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    alcs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onBitternessChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    onAlcChange: PropTypes.func.isRequired,
    onRefreshBeer: PropTypes.func.isRequired,
};

export default Dashboard;