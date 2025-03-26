import { useState, useEffect } from 'react';
import { Routes} from 'react-router-dom';
import './PageOne.css';

const DATA_BASE = 'https://api.jsongpt.com/json?prompt=Generate 7 dog facts &facts=array of dog facts';

const PageOne = () => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(DATA_BASE)
            result.json().then(json => {
                console.log(json)
            })
        }
        fetchData();
    },[]);

    return (
        <div>
        </div>
    );
    
};

export default PageOne;