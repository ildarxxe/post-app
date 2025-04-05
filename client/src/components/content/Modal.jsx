const Modal = ({ warn }) => {
    return (
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" role="dialog" id="modalSheet">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header border-bottom-0">
                        <h1 className="modal-title fs-5">Подтверждение</h1>
                        <button type="button" className="btn-close btn_cancel" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-0">
                        <p dangerouslySetInnerHTML={{ __html: warn }}></p>
                    </div>
                    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                        <button type="button" className="btn btn-lg btn-primary btn_confirm">Да</button>
                        <button type="button" className="btn btn-lg btn-secondary btn_cancel" data-bs-dismiss="modal">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;