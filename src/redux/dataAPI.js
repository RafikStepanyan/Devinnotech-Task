export const fetchCats = (id = 1) => {
    return (dispatch) => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'loadCat', payload: data });
            });
    };
};

export const fetchLoadMore = () => {
    let count = 10;
    return (dispatch) => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${30}&page=1&category_ids=1`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'loadMore', payload: data });
            });
    };
};

export const fetchCategories = () => {
    return (dispatch) => {
        fetch('https://api.thecatapi.com/v1/categories')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'loadCategories', payload: data });
            });
    };
};