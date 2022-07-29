interface PreviewProps {
    code: string;
}


const html = `
<html>
    <head></head>
    <body>
        <div id="root"></div>

        <script>
            window.addEventListener('message', (event) => {
                try{
                    eval(event.data);
                } catch (error) {
                    const root = document.querySelector('#root');
                    root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>'
                    console.error(error);
                }
            }, false);
        </script>
    </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
    return {
        < iframe />
    };
};

export default Preview;