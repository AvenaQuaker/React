import React from "react";
import Sidebar from "./Sidebar";
import CRUD from "./CRUD";
import Graficas from "./Graficas";
import Forma1 from "./Forma1";
import Forma2 from "./Forma2";
import Loading from "./Loading";

function Dashboard() {
    return (
        <div>
            <div className="Dashboard">
                <Sidebar />
                <div className="datalayout">
                    <div className="top">
                        <label id="currentpage" style={{ fontStyle: "italic" }}>
                            SDASDA
                        </label>
                    </div>
                    <CRUD />
                    <Graficas />
                </div>
            </div>
            <Forma1 />
            <Forma2 />
            <Loading />
        </div>
    );
}

export default Dashboard;
