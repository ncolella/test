import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import {Genre} from "../../commons/types";
import SelectMenu from "../atoms/SelectMenu";

const searchBoxStyle = {
    marginBottom: 26,
};

const inputAndButtonStyle = {
    display: 'flex',
};

const discoveryStyle = {
    justifyContent: 'end',
    display: 'flex',
    marginTop: 10
};

const inputStyle = {
    marginRight: 10,
};

interface SearchBoxProps {
    error?: Error | null;
    genres: Genre[];
    placeholder?: string;
    loading?: boolean;
    onSearch: (search: string, discover: boolean, genre: number, language: string, rating: number) => void;
}

function SearchBox(props: SearchBoxProps) {
    const {placeholder, error, onSearch, loading, genres} = props;
    const [value, setValue] = React.useState('');

    const [genre, setGenre] = React.useState(-1);
    const [rating, setRating] = React.useState(-1);
    const [language, setLanguage] = React.useState('');

    const selectGenreOptions = genres.map((g: Genre) => ({value: g.id, label: g.name}));
    const selectRatingOptions = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},
        {value: 5, label: '5'},
        {value: 6, label: '6'},
        {value: 7, label: '7'},
        {value: 8, label: '8'},
        {value: 9, label: '9'},
        {value: 10, label: '10'},
    ];
    const selectLanguageOptions = [
        {value: 'en', label: 'English'},
        {value: 'it', label: 'Italian'},
    ];

    const customStyles = {
        control: (base: any) => ({
            ...base,
            height: 54,
            minHeight: 54,
        })
    };

    return (
        <div style={searchBoxStyle}>
            <div style={inputAndButtonStyle}>
                <Input
                    testid="search-box-input"
                    style={inputStyle}
                    size="large"
                    focusOnMount={true}
                    placeholder={placeholder}
                    value={value}
                    onChange={setValue}
                    onEnter={() => onSearch(value, false,-1, '', -1)}
                />
                <Button
                    testid="search-box-button"
                    loading={loading}
                    size="large"
                    onClick={() => onSearch(value, false,-1, '', -1)}
                >
                    Search
                </Button>
            </div>
            <div style={discoveryStyle}>
                <SelectMenu
                    testid="language-select-menu"
                    label="Language:"
                    onChange={setLanguage} options={selectLanguageOptions} style={customStyles} />
                <SelectMenu
                    type="number"
                    testid="rating-select-menu"
                    label="Rating (greater than):"
                    onChange={setRating} options={selectRatingOptions} style={customStyles} />
                <SelectMenu
                    type="number"
                    testid="genre-select-menu"
                    label="Genre:"
                    onChange={setGenre} options={selectGenreOptions} style={customStyles} />
                <Button
                    testid="search-discovery-box-button"
                    loading={loading}
                    size="large"
                    onClick={() => onSearch('', true, genre, language, rating)}
                >
                    Discovery
                </Button>
            </div>
            {error && (
                <Text
                    testid="search-box-error"
                    style={{position: 'absolute'}}
                    color="danger"
                >
                    {error.message}
                </Text>
            )}
        </div>
    );
}

export default SearchBox;
