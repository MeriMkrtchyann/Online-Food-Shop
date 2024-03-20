import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUser} from '@fortawesome/free-solid-svg-icons';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

function ValidOrInvalid({isValid, isInvalid}){

  let iconColor = '';
  if (isValid) {
      iconColor = 'green';
  } else if (isInvalid) {
      iconColor = 'red';
  }

  const iconComponent = iconColor && (
    <CheckCircleOutlineIcon style={{ color: iconColor }} />
  );

  return <>{iconComponent}</>
}

export { GoHomeIcon, PyramidMenuIcon, UserIcon, ValidOrInvalid };
