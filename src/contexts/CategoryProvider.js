import React, { useState, useEffect } from 'react';
import CategoryContext from './CategoryContext';
import apis from '../api/index';

const CategoryProvider = props => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        apis.categories
            .getAllCategories()
            .then(res => {
                const categoriesTemp = [];
                res.data.forEach(element => {
                    const category = {
                        key: element.id,
                        text: element.name,
                        value: element.id,
                        label: {
                            color: 'blue',
                            empty: true,
                            circular: true,
                        },
                    };
                    categoriesTemp.push(category);
                });

                setCategories(categoriesTemp);

                console.log('Categories fetched: ', categoriesTemp);
            })
            .catch(err => console.error('Error fetching categories:', err));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{
                categories,
                fetchCategories,
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;
