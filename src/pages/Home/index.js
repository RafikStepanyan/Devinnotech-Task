import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';
import { fetchCategories, fetchCats, fetchLoadMore } from '../../redux/dataAPI';

export const Home = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(fetchCats());
        dispatch(fetchCategories());
    }, []);
    return <div className='home'>
        <div className='head'>
            <button className='load' onClick={() => {
                dispatch(fetchLoadMore());
            }}>load more</button>
            <button className='reset' onClick={() => {
                dispatch(fetchCats());
            }}>reset</button>
        </div>
        <div className='img'>
            {
                data.arrCat.map((e, i) => {
                    return <div key={i}>
                        <img src={e.url} alt='img' />
                    </div>;
                })
            }
        </div>
    </div>;
};