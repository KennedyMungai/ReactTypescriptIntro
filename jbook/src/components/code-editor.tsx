import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({initialValue, onChange}) => {
    const onEditorDidMount = (getValue: () => string) => {
        console.log(getValue());
    };

    return <MonacoEditor 
        editorDidMount = {onEditorDidMount}
        value={ initialValue }
        height="500px" 
        language='javascript' 
        theme='dark'
        options={{
            wordWrap: 'on',
            minimap: {enabled: false},
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true
        }}
        />
};

export default CodeEditor;