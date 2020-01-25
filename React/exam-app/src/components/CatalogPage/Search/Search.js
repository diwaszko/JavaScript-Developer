import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input placeholder="search..." type="text" value={props.typedText} onChange={props.checkText}  />
        </div>
    );
};

export default Search;
