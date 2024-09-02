import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import FileViewer from "./fileViewer"

export default function File({ file ,openFile}) {
  function opf(){
    openFile(file.url);
  }
  
  return (
    
    <div className="btn btn-outline-dark text-truncate w-100" onClick={opf}>
          <FontAwesomeIcon icon={faFile} className="mr-2" />
          {file.name}
    </div>
  )
}
