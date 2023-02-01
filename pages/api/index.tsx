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
  
}
export default handler