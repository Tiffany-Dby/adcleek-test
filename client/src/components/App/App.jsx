// Styles
import './app.scss';
// Pages
import Error from '../../pages/Error/Error';
// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Constants
import { APP_ROUTES } from '../../constants/routes.const';
import { useEffect, useState } from 'react';
import { getRequest } from '../../api/api';

const App = () => {
  const [cities, setCities] = useState([]);
  const [isGetCitiesLoading, setIsGetCitiesLoading] = useState(false);
  const [getCitiesError, setGetCitiesError] = useState(null);

  const handleGetAllCities = async () => {
    setIsGetCitiesLoading(true);
    const response = await getRequest("/cities");
    const { result, error } = response;
    setIsGetCitiesLoading(false);

    if (error) {
      setGetCitiesError(error);
      return;
    }

    setCities([...result]);
  }

  useEffect(() => {
    handleGetAllCities();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={
          <section className='container'>
            <h1>Weather App</h1>
            {!!getCitiesError &&
              <p className='error'>{getCitiesError}</p>
            }
            {!!isGetCitiesLoading &&
              <p>Loading...</p>
            }
            <div className='flex'>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Code Insee</th>
                    <th scope="col">City</th>
                    <th scope="col">Population</th>
                  </tr>
                </thead>
                <tbody>
                  {!isGetCitiesLoading && cities?.map(city => (
                    <tr key={city.id} onClick={() => { }}>
                      <td>{city.insee}</td>
                      <td>{city.name}</td>
                      <td>{city.population}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>

              </div>
            </div>
          </section>
        } />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;