const EventComponent: React.FC = () => {
    const onChange = (e ) => {
        console.log(e);
    };

    return(
        <div>
            <input type="text" onChange={onChange}/>
        </div>
    );
};

export default EventComponent;