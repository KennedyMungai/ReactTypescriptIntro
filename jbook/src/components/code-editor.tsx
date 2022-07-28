import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue: string;

}

const CodeEditor: React.FC<CodeEditorProps> = () => {
    return <MonacoEditor 
        value="const a = 1;"
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