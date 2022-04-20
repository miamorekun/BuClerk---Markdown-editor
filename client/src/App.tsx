import React from 'react';
import BCEditor from "./components/editor/Index";

function App() {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="bc-markdown-editor p-4 w-50">
                <BCEditor/>
            </div>
        </div>
    );
}

export default App
