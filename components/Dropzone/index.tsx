import React, { ReactElement, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import styles from './dropzone.module.scss';
import { JsonItem } from 'store';

export type DropzoneProps = {
  onUpload: (json: JsonItem[]) => void;
};

const Dropzone = ({ onUpload }: DropzoneProps): ReactElement => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          try {
            if (e.target) {
              const result = JSON.parse(e.target.result as string) as JsonItem[];
              onUpload(result);
            }
          } catch (err) {
            console.error(err);
          }
        };
        reader.readAsText(file);
      });
    },
    [onUpload],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'application/JSON' });

  return (
    <div {...getRootProps()} className={clsx(styles.root, isDragActive && styles.drag)}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drop some files here, or click to select files</p>}
      <em>(only *.json files will be accepted)</em>
    </div>
  );
};

export default Dropzone;
