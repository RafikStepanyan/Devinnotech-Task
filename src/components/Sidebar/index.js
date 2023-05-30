import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';
import { fetchCategories, fetchCats } from '../../redux/dataAPI';

export const Sidebar = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);
    return <div className='sidebar'>
        {
            data.arrCategories.map(e => {
                return <div key={e.id}>
                    <h2 onClick={() => {
                        dispatch(fetchCats(e.id));
                    }}>{e.name}</h2>
                </div>;
            })
        }
    </div>;
};