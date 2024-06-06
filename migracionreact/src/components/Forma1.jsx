function Forma1() {
    return (
        <div className="formBox" id="tabla1formbox">
            <form id="tabla1form" enctype="application/x-www-form-urlencoded">
                <div className="user-box">
                    <input
                        type="tel"
                        name="ID_Cliente"
                        required
                        id="tabla1id"
                        autoComplete="off"
                    />
                    <label>ID</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Nombre"
                        required
                        id="tabla1nombre"
                        autoComplete="off"
                    />
                    <label>Nombre</label>
                </div>
                <div className="user-box">
                    <input
                        type="tel"
                        name="Telefono"
                        required
                        id="tabla1edad"
                        autoComplete="off"
                    />
                    <label>Telefono</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="Correo_Electronico"
                        required
                        id="tabla1ciudad"
                        autoComplete="off"
                    />
                    <label>CorreoElectronico</label>
                </div>
                <div className="formbuttons" id="formbuttonstabla1">
                    <button type="button" className="cancelbutton">
                        <span>CANCEL</span>
                    </button>
                    <button
                        type="button"
                        id="acceptbuttonCliente"
                        className="acceptbutton">
                        <span>ACCEPT</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Forma1;
