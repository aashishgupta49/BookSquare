import React  from 'react';
import useIPFS from '../hooks/useIPFS';
import fileSaver from 'file-saver'
const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);
  function save(){
    fileSaver.saveAs(file,filename);
  }
 
  return (
    <div>
      {file ? (
        <div className="download-component">
          <a > 
          <button onClick={save} className="buy-button">
        download

          </button>
        </a>

        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;