import { nanoid } from "nanoid"

export const dataTableColumn = [{
  field: "id", headername:"ID", width: 180
},
{field: "user", headername: "Users", width: 180,
renderCell: (params) => {
  return (
    <div className="cellphoto">
      <img className="cellImage" src={params.row.img} alt="avatar"/>
      {params.row.name}
    </div>
  )
  },
  
},
{field: "email", headername: "Email", width: 180},
{field: "age", headername: "Age", width: 70},
{field: "status", headername: "Status", width: 180, renderCell: (params) => {
  return (
    <div className={`cellStatus ${params.row.status}`}>
      {params.row.status}
    </div>
  )
}}
]

export const dataTableRows = [
  {
    id: nanoid(),
    name:"katut",
    img:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "katut@gmail.com",
    age: 10
  },
  {
    id: nanoid(),
    name:"katut",
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "katut@gmail.com",
    age: 10
  }
]