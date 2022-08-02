import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
    return (
        <div>
            <TextEditor />
        </div>
    )
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);