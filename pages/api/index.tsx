import path from 'path';
import { promises as fs } from 'fs';
const prettier = require("prettier");

const handler = async (req:any, res:any)=> {
  const filePath = path.join(process.cwd(), 'employees.json');
  const jsonData = await fs.readFile(filePath,'utf-8');
  const data = JSON.parse(jsonData)

  if(req.method === 'GET'){
    res.status(200).json(jsonData)
  }

  if(req.method === 'POST'){
    const employee = req.body
    employee['id'] = Date.now()
    employee['photo'] = 'https://i.pravatar.cc/200'
    data.push(employee)
    fs.writeFile('employees.json',prettier.format(JSON.stringify(data), { parser: "json" }));
    res.status(200).json(employee)
  }

  if(req.method === 'PUT'){
    const employee = req.body
    console.log(employee)
    const {id,first_name,last_name,gender,email,number} = employee
    data.map((raw:any)=>{
      if(raw.id==id){
        raw.first_name=first_name
        raw.last_name=last_name
        raw.email=email
        raw.number=number
        raw.gender=gender
      }
    })
    fs.writeFile('employees.json',prettier.format(JSON.stringify(data), { parser: "json" }));
    res.status(200).json(employee)
  }

  if(req.method === 'DELETE'){
    const {id} = req.body
    const empIndex = data.findIndex((obj:any) => obj.id === id);

    if (empIndex > -1) {
      data.splice(empIndex, 1);
    }

    fs.writeFile('employees.json',prettier.format(JSON.stringify(data), { parser: "json" }));
    res.status(200).json('delete')
  }
 
}
export default handler