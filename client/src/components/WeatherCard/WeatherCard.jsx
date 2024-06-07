import './weatherCard.scss';

const WeatherCard = ({ temperature, minTemp, maxTemp }) => {
  return (
    <div>
      <div>
        <div>
          {/* icon from weather API */}
        </div>
        <p>Probabilité de pluie</p>
        <p>{temperature}</p>
      </div>
      <div>
        <div>
          <p>Min</p>
          <span>{minTemp}</span>
        </div>
        <div>
          <p>Max</p>
          <span>{maxTemp}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;