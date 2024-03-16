import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'

export default function PyramidMenu(){
    return(
        <div className="cadegori-list">
            <Link to = "/">
                <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
            </Link>
        </div>
    )  
}
