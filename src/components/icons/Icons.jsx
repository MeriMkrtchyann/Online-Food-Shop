import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUser} from '@fortawesome/free-solid-svg-icons';

function GoHomeIcon({ color }) {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '30px',
        textDecoration: 'none',
        margin: '20px',
        transition: 'color 0.3s ease', 
        color: color ,
      }}
    >
      <FontAwesomeIcon icon={faHome} />
    </div>
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
