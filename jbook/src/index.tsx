import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import CodeEditor from './components/code-editor';
import Preview from './components/preview'

const App = () => {
    const ref = useRef<any>();
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        if (!ref.current) {
            return;
        }

        const result =

            setCode(result.outputFiles[0].text);
    };

    return (
        <div>
            <CodeEditor
                initialValue='const a = 1;'
                onChange={(value) => setInput(value)}
            />
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    )
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);