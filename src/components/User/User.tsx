import "./style.css";
import { MdLocationPin } from "react-icons/md";

//Type
import { UserType } from "../../types/User";

//components
import NotFound from "../NotFound/NotFound";

type Props = {
  user: UserType;
  error: boolean;
};

const User = ({ user, error }: Props) => {
  return (
    <>
      {!error ? (
        <div className="container">
          <div className="headerPerfil">
            <img src={user.avatar_url} alt={user.login} className="imgPerfil" />
            <h2>{user.login}</h2>
          </div>

          {user.location ? (
            <p className="location">
              <MdLocationPin /> <span>{user.location}</span>
            </p>
          ) : (
            false
          )}

          <div className="follow">
            <div>
              <p>Seguidores:</p>
              <p className="number">{user.followers}</p>
            </div>

            <div>
              <p>Seguindo:</p>
              <p className="number">{user.following}</p>
            </div>
          </div>
          <div>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              className="btnGithub"
            >
              Ver repositório
            </a>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default User;
