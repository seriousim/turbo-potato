import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DashboardContainer from '../containers/DashboardContainer';

import styles from '../styles/beerlist.css'

function BeerList({ beer, onSortingChange }) {
    return(
        <div className={styles.beerList}>
            <div className="row">
                <div className={classNames("col-lg-12", "text-center")}>
                    <DashboardContainer />
                    <div className="tableContainer">
                    <table className={classNames("table", "table-hover", "align-right")}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th
                                    onClick={e => onSortingChange('SORT_BY_NAME')}
                                >Name</th>
                                <th
                                    onClick={e => onSortingChange('SORT_BY_BITTERNESS')}
                                >Bitterness</th>
                                <th
                                    onClick={e => onSortingChange('SORT_BY_COLOR')}
                                >Color</th>
                                <th
                                    onClick={e => onSortingChange('SORT_BY_ALC')}
                                >Alc %</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                beer.map(
                                    (b, i) =>
                                    <tr key={b.id}>
                                        <th scope="row">{i+1}</th>
                                        <td>{b.name}</td>
                                        <td>{b.bitterness}</td>
                                        <td>{b.color.replace(/\b\w/g, l => l.toUpperCase())}</td>
                                        <td>{b.alc}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

BeerList.propTypes = {
    beer: PropTypes.array.isRequired,
    onSortingChange: PropTypes.func.isRequired,
};

export default BeerList;
