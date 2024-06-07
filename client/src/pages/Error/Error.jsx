// Styles
import "./error.scss";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes.const";

const Error = () => {
  return (
    <section>
      <div>
        <h1>OUPS !</h1>
        <article>
          <h2>Erreur 404</h2>
          <p>La page que vous recherchez n'existe pas.</p>
          <nav>
            <ul>
              <li>
                <Link to={APP_ROUTES.HOME}>Retour à l'accueil</Link>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </section>
  );
}

export default Error;