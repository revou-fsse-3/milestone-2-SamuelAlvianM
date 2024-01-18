import React from 'react';
import { optionType } from './../types/index';
import { useNavigate } from 'react-router-dom';

type componentProps = {
  options: optionType[];
  onSelect: (option: optionType) => void;
  onSubmit: () => void;

};

const Suggestions = ({ options, onSelect, onSubmit }: componentProps): JSX.Element => {  
  const navigate = useNavigate();
  return (
    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">

    { options && options?.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
          onClick={() => {

            onSelect(option)
            // onSubmit();
            // navigate('/forecast');
            
          }}
          
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
  )
}





export default Suggestions;
