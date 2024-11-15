import './App.css'
import {Background, Controls, Panel, ReactFlow} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import Toolbar from "./component/toolbar/toolbar.tsx";

function App() {

  return (
    <div style={{height: '100%',width: '100%'}}>
        <ReactFlow>
            <Background/>
            <Controls showInteractive={false}/>
            <Panel position="bottom-center">
                <Toolbar/>
            </Panel>
        </ReactFlow>
    </div>
  )
}

export default App
