import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);

    return <div>
        <MDEditor.Markdown source={"# Header"} />
    </div>
};

export default TextEditor;