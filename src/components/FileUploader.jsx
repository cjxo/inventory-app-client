import { useState, useRef } from "react";

import styles from "../styles/component.module.css";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const inpRef = useRef(null);
  
  const onClick = () => inpRef.current.click();
  const onChange = (e) => setFile(URL.createObjectURL(e.target.files[0]));
  
  return (
    <div className={styles.fileUploader}>
      <label htmlFor="item-image">Select PNG Image</label>
      <div className={styles.fileUploaderInput}>
        <input ref={inpRef} onChange={onChange} type="file" id="item-image" name="item-image" accept="image/png" required />
        {file && <img src={file} alt="uploaded file" />}
        <button type="button" onClick={onClick}>{!file ? "Select PNG File" : "Change PNG File"}</button>
      </div>
    </div>
  );
};

export default FileUploader;