// components/RichTextEditor.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
interface RichTextEditorProps {
  onChange: (html: string) => void;
}

export default function RichTextEditor({ onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate({ editor }) {
      onChange(editor.getHTML()); // send raw HTML up
    },
  });

  return (
    <div className="border p-4 rounded bg-white">
      <EditorContent editor={editor} />
    </div>
  );
}
