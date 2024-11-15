import './App.css'
import {Background, Controls, ReactFlow} from "@xyflow/react";
import '@xyflow/react/dist/style.css';

function App() {

  return (
    <div style={{height: '100%',width: '100%'}}>
        <ReactFlow>
            <Background/>
            <Controls/>
        </ReactFlow>
    </div>
  )
}

export default App
