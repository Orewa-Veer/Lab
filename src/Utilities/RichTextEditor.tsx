import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  onChange: (html: string) => void;
  value: string;
}

export default function RichTextEditor({ onChange, value }: Props) {
  // 🔥 Declare inside component (not outside or below)
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="w-full rounded-lg ">
      <ReactQuill
        value={value}
        onChange={onChange}
        theme="snow"
        modules={modules}
        placeholder="Write something..."
        className=""
      />
    </div>
  );
}
