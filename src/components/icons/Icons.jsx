import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUser} from '@fortawesome/free-solid-svg-icons';

function GoHomeIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faHome} />
    </>
  );
}

function PyramidMenuIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
    </>
  );
}

function UserIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
    </>
  );
}

export { GoHomeIcon, PyramidMenuIcon, UserIcon };
