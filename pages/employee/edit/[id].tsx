import Card from '../../../components/Card'
import Layout from '../../../components/Layout'
import ActionButton from '../../../components/ActionButton'
import Form from '../../../components/Form'
import { Paper } from "@mui/material";
import React,{useState,useEffect,useMemo} from 'react'
import { useRouter } from 'next/router'

function EditPage() {
  const [data,setData] = useState(undefined);
  const {query} = useRouter()
  const { id } = query
  
  const loadData = async ()=>{
    const response = await fetch('/api')
    const val = await response.json()
    const filteredData = await val.filter((raw:any)=>raw.id==id)    
    setData(filteredData)
  }

  useMemo(() => {
    loadData();
  }, [id]);

  return (
    <Layout>
     <Card spacing="4" direction="row" justifyContent="flex-end" alignItems="center" customStyles={{marginTop:'2em',marginRight:'2em'}}> 
       <ActionButton id='actBtn' btnvarient={'contained'} src={`/employee/list`} title="list view" colorface={"blue"} customStyles={{width:'10%',marginTop:'2em',borderRadius:'5em',fontWeight:'600',float:'right'}}/>
     </Card>
      <Paper variant="outlined" sx={{borderRadius:'2em',margin:'2em'}}>
      <Form btnTittle="save" data={data}/>
      </Paper>
    </Layout>
  );
}

export default EditPage;