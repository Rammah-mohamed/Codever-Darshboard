import "./DataTable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { dataTableRows, dataTableColumn } from "../../dataTable"
import { Link } from "react-router-dom"; 
import { useState } from "react";

function DataTable({component , title, darkMode}) {
  const [data,setDate] = useState(dataTableRows);
  const handleDelete = (id) => {
    setDate(data.filter(d => d.id !== id))
  } 
  let link;

  switch (component) {
    case "user": link = "/users/new";
    break;
    case "product": link = "/products/new";
    break;
    default:
  }
  
  const actionCell = {field: "action", headername:"action", width: 180, renderCell: (params) => {
    return (
      <div className="actionCell">
        <Link to={"/users/test"} style={{textDecoration:"none"}}>
          <div className="view">View</div>
        </Link>
        <div className="delete" onClick={()=>handleDelete(params.row.id)}>Delete</div>
      </div>
    )
  }}
  return (
    <div className={darkMode?"dataTable dark": "dataTable"}>
      <div className="header">
        <h2 className="title">{title}</h2>
        <Link to={link}>
          <button className="add">Add</button>
        </Link>
      </div>
      <DataGrid
      className="dataGrid"
      rows={data}
      columns={dataTableColumn.concat(actionCell)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 9 },
        },
      }}
      pageSizeOptions={[9]}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
    </div>
  )
}

export default DataTable