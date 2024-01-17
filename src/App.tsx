// import Forecast from './components/Forecast'
// import Search from './components/Search'

// import useForecast from './hooks/useForecast'

// const App = (): JSX.Element => {
//   const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
//     useForecast()

//   return (
//     <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
//       {forecast ? (
//         <Forecast data={forecast} />
//       ) : (
//         <Search
//           term={term}
//           options={options}
//           onInputChange={onInputChange}
//           onOptionSelect={onOptionSelect}
//           onSubmit={onSubmit}
//         />
//       )}
//     </main>
//   )
// }

// export default App



import React, { ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forecast from './components/Forecast';
import Search from './components/Search';
import useForecast from './hooks/useForecast';

const App: React.FC = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast();

  return (
    <Router>
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Search
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
            element={forecast && <Forecast data={forecast} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;