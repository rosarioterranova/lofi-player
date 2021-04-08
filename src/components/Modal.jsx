export default function Modal({onClickhandler}){
    return <>
        <div className="modal-container">
            <div className="modal">
                <h2>App by Rosario Terranova</h2>
                <p>This app is open source, and is made with React.js. You can find the code <a href="" target="_blank">here</a>.</p>
                <button onClick={onClickhandler} >OK</button>
            </div>
        </div>
    </>
}