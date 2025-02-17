import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Categories, Category } from '../types';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            verticalAlign: 'middle',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

interface ICategorySelect {
    categories: Categories;
    handleCategoryFilterChange(categoryId: string): void;
    required?: boolean;
    fullWidth?: boolean;
}

const CategorySelect: React.FC<ICategorySelect> = ({
    categories,
    handleCategoryFilterChange,
    required = false,
    fullWidth = false,
}) => {
    //Contexts
    const classes = useStyles();

    //States
    const [category, setCategory] = React.useState('');

    const handleChange = (event: React.ChangeEvent<any>) => {
        const categoryId: string = event.target.value as string;
        setCategory(categoryId);
        handleCategoryFilterChange(categoryId);
    };
    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
            fullWidth={fullWidth}
            style={{ margin: '0px' }}
            required={required}
        >
            <InputLabel id="demo-simple-select-outlined-label">
                Category
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleChange}
                label="Category"
            >
                <MenuItem value="">All</MenuItem>
                {categories
                    ? categories.map((category: Category, index: number) => {
                          return (
                              <MenuItem key={index} value={category.id}>
                                  {category.name}
                              </MenuItem>
                          );
                      })
                    : null}
            </Select>
        </FormControl>
    );
};

export default CategorySelect;
