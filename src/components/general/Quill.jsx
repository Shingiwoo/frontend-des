// src/components/general/Quill.js
import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Tambahkan CSS untuk tema snow

const MyQuillEditor = ({ value, onChange }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        onChange(quill.root.innerHTML);  // Kirim konten HTML ke props onChange
      });
    }
  }, [quill]);

  useEffect(() => {
    if (quill && value) {
      quill.clipboard.dangerouslyPasteHTML(value);  // Update editor dengan value dari props
    }
  }, [quill, value]);

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <div ref={quillRef} />
    </div>
  );
};

export default MyQuillEditor;
