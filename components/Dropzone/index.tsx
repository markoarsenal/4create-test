import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import styles from './dropzone.module.scss';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const result = JSON.parse(e.target.result as string);
          const formatted = JSON.stringify(result, null, 2);
          console.log(formatted);
        }
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'application/JSON' });

  return (
    <div {...getRootProps()} className={clsx(styles.root, isDragActive && styles.drag)}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drop some files here, or click to select files</p>}
      <em>(Only *.json files will be accepted)</em>
    </div>
  );
};

export default Dropzone;
