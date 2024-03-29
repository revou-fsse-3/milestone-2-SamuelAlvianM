import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Suggestions from './Suggestions'
import { forecastType, optionType } from '../types'


type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
  data: forecastType | null;
  error: Error | null;
  city: optionType | null;
};

const Search: React.FC<Props> = ({ term, city, error, data, options, onInputChange, onOptionSelect, onSubmit }: Props) => {
  const navigate = useNavigate();

  console.log(options)
  console.log("cod" in options)
  console.log(term)
  console.log(city)
  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
      <Header />

      <div className="relative flex mt-10 md:mt-4">
        <input
          type="text"
          value={term}
          className="px-2 py-1 rounded-l-md border-2 border-white"
          onChange={onInputChange}
        />

        {
          options.length > 0 && (
            <>
            <Suggestions options={options} onSelect={onOptionSelect} onSubmit={onSubmit} />
            </>
          )
        }

        {
          "cod" in options || term?.length > 8 && (
            <>
            city not found
            </>
          )
        }


        {
          !("cod" in options )  && city && ( 
          <button
          className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
          onClick={() => {
            onSubmit();
            navigate('/forecast');

          }}
        >
          search
        </button>
          )
        }

        
      </div>
    </section>
  );
};

export default Search;
