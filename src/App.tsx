
import React, { ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forecast from './components/Forecast';
import Search from './components/Search';
import useForecast from './hooks/useForecast';
import { forecastType } from './types'

type Props = {
  // term: string;
  // options: [];
  // onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // onOptionSelect: (option: optionType) => void;
  // onSubmit: () => void;
  data: forecastType | null;
};

const ForecastWrapper = ({data}: Props) => {
  return (
    <>
    {
      data && <Forecast data={data} />
    } {
      !data && (
        <>
        Loading
        </>
      )
    }
    </>
  )
}

const App: React.FC = (): JSX.Element => {
  const { forecast, city, options, term, onOptionSelect, onSubmit, onInputChange, error } = useForecast();


  return (
    <Router>
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Search
                data={forecast}
                error={error}
                city={city}
                term={term}
                options={options}
                onInputChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e)}
                onOptionSelect={(option) => onOptionSelect(option)}
                onSubmit={() => onSubmit()}
              />
            }
          />
          <Route
            path="/forecast"

            element={
              <ForecastWrapper data={forecast} />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;