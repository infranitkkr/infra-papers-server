import React from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import FileViewer from "./fileViewer"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
  const [fileOpen,setFileOpen] =useState(false);
  const [fileUrl,setFileUrl] = useState('');

  const openfile= (filename)=>{
    console.log("openfile called")
    setFileOpen(true);
    setFileUrl(filename);
  }

  const closefile= ()=>{
    console.log("fileclose called")
    setFileOpen(false);
    setFileUrl("");
  }
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {(!fileOpen )? <div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} openFile={openfile} />
              </div>
            ))}
          </div>
        )}
        </div> :     <>
      <FileViewer fileUrl={fileUrl} closefile={closefile}/>
    </>}
      </Container>
    </>
  )
}
