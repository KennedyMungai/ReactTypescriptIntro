import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const TextEditor: React.FC = () => {
    return <div>
        <MDEditor.Markdown source={"# Header"} />
    </div>
};

export default TextEditor;