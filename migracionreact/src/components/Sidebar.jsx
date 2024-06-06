import HomeIcon from "../Resources/Home.png";
import CircleChartIcon from "../Resources/Circle Chart.png";
import LogoIcon from "../Resources/Logo.png";

function Sidebar() {
    return (
        <div className="sidebar">
            <label className="sidebarTitle">Dashboard</label>
            <label id="subtitle">Menu</label>
            <div className="page" id="page1">
                <div className="pageIMG" id="pageIMG1">
                    <img src={HomeIcon} id="pimg1" alt="Home" />
                </div>
                <label className="pageLabel" id="plabel1">
                    CRUD
                </label>
            </div>
            <div className="page" id="page2">
                <div className="pageIMG" id="pageIMG2">
                    <img src={CircleChartIcon} id="pimg2" alt="Circle Chart" />
                </div>
                <label className="pageLabel" id="plabel2">
                    Graficas
                </label>
            </div>
            <img
                src={LogoIcon}
                id="Logo"
                alt="Logo"
                onClick={() => Loading("PaginaPrincipal.html")}
            />
        </div>
    );
}

export default Sidebar;
