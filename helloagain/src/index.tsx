import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div className="Greeting">
            <h1>Hi there!</h1>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));