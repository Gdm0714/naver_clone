import { useContext } from "react";
import { AuthContext} from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Nav(){
    const{auth, setAuth} = useContext{AuthContext};

    return(
        <nav className="navbar navbar-expand-md navbar-dark bh-dark sticky-top">
            <div className="container">
                <div className="navbar-collapse collapse justify-content-between" id="navbar-content">
                    <ul className="navbara-nav mr-auto">
                        {/* 메인 화면 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fas fa-hmoe"></i> Home</Link>
                        </li>
                        {/* 게시판 */}
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">게시판</div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/boardList">글목록</Link>
                                <Link className="dropdown-item" to="/boardWrite">글추가</Link>
                                </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}