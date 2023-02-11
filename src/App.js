import './App.css';
import {BasicStateExample} from "./components/ClassComponents/BasicStateExample/BasicStateExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <div className={"container-fluid text-center"}>
            <div className={"d-block h1 p-4"}>Basic React Application</div>
            <div className={"row border border-5 ml-mr-4"}>
                <BasicStateExample/>
            </div>
        </div>
    );
}

export default App;


{/*<div>*/
}
{/*    <div> Main Functional Component </div>*/
}
{/*    <>*/
}
{/*        <BasicFuncStateExample title={"Functional Component"}/>*/
}
{/*    </>*/
}
{/*</div>*/
}