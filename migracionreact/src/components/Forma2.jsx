function Forma2() {
    return (
        <div
            class="formBox"
            id="tabla2formbox"
            enctype="application/x-www-form-urlencoded">
            <form id="tabla2form" enctype="application/x-www-form-urlencoded">
                <div class="user-box">
                    <input
                        type="tel"
                        name="ID_Contrato"
                        required=""
                        id="tabla2id"
                        autoComplete="off"
                    />
                    <label>ID</label>
                </div>
                <div class="user-box">
                    <input
                        type="text"
                        name="ID_Cliente"
                        required=""
                        id="tabla2cliente"
                        autocomplete="off"
                    />
                    <label>Cliente</label>
                </div>
                <div class="user-box">
                    <input
                        type="text"
                        name="Fecha"
                        required=""
                        id="tabla2fecha"
                        autocomplete="off"
                    />
                    <label>Fecha</label>
                </div>
                <div class="user-box">
                    <input
                        type="text"
                        name="Metodo_De_Pago"
                        required=""
                        id="tabla2metodopago"
                        autocomplete="off"
                    />
                    <label>MetodoDePago</label>
                </div>
                <div class="user-box">
                    <input
                        type="tel"
                        name="Anticipo"
                        required=""
                        id="tabla2anticipo"
                        autocomplete="off"
                    />
                    <label>Anticipo</label>
                </div>
                <div class="user-box">
                    <input
                        type="tel"
                        name="Monto_Final"
                        required=""
                        id="tabla2montofinal"
                        autocomplete="off"
                    />
                    <label>MontoFinal</label>
                </div>
                <div class="formbuttons" id="formbuttonstabla2">
                    <button type="submit" class="cancelbutton">
                        <span>CANCEL</span>
                    </button>
                    <button
                        type="submit"
                        id="acceptbuttonContrato"
                        class="acceptbutton">
                        <span>ACCEPT</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Forma2;
