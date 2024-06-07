import database from "../databases/init.db.js";

const create = async ({ body: { insee, name, zipcode, population } }, res) => {
  // Add logic to fetch weather API and store it in database if it doesn't already exist

  try {
    await database.run(`INSERT INTO city (insee, name, zipcode, population) VALUES (?, ?, ?, ?)`, [insee, name, zipcode, population]);
    res.status(201).json({ message: 'City added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const readAll = async (req, res) => {
  try {
    const cities = await database.all('SELECT id, insee, name, zipcode, population FROM city');
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const readOne = async ({ params: { id } }, res) => {
  const insee = id;
  try {
    const city = await database.get(`SELECT id, insee, name, zipcode, population FROM city WHERE id = ?`, [insee]);
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const CityController = {
  create,
  readAll,
  readOne
}