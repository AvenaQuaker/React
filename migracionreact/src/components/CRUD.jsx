function CRUD() {
    return (
        <div className="main1" id="main1">
            <div className="CRUD" id="style-1">
                <div className="filter">
                    <label>Que le gustaria Mostrar?</label>
                    <select id="tablafiltrada" onChange={() => Filtrar()}>
                        <option value="Opcion1">Clientes</option>
                        <option value="Opcion2">Contratos</option>
                    </select>
                </div>
                <table id="tabla1" className="cell-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>CorreoElectronico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table id="tabla2" className="cell-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Metodo de Pago</th>
                            <th>Anticipo</th>
                            <th>MontoFinal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="crudbuttons">
                <button className="crudbutton" id="Insert">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">CREATE</span>
                </button>
                <button className="crudbutton" id="Update">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">UPDATE</span>
                </button>
                <button className="crudbutton" id="Delete">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">DELETE</span>
                </button>
                <button type="submit" className="crudbutton" id="btn-print">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">PDF</span>
                    <iframe
                        id="frame"
                        style={{ width: "100vh", border: 0, height: 0 }}
                        src="Re.html"></iframe>
                </button>
            </div>
        </div>
    );
}

export default CRUD;
