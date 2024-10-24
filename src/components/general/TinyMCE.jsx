import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const TinyMCE = ({ value, onChange }) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    onChange(content); // Memanggil callback onChange dari props
  };

  return (
    <Editor
      apiKey="kd7bfxzduisaqjsdv36x2geaw68h9i2k2ao5jaeg125b56ug" // Ganti dengan API key Anda
      value={value} // Nilai dari editor, disinkronkan dengan state "content"
      onEditorChange={handleEditorChange} // Event handler saat konten berubah
      init={{
        height: 280,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        branding: false, // Menghilangkan branding dari TinyMCE
      }}
    />
  );
};

export default TinyMCE;
