"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useTheme } from "next-themes";

type Props = {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};

const Editor = ({ onChange, initialContent, editable }: Props) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file,
        });

        return response.url;
    };

    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
        uploadFile: handleUpload,
    });

    return (
        <div>
            <BlockNoteView
                editable={editable}
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onChange={() =>
                    onChange(JSON.stringify(editor.document, null, 2))
                }
            />
        </div>
    );
};

export default Editor;
