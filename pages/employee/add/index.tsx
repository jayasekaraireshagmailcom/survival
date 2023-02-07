import { Character, GetCharacterResults,Employee,GetEmployeeResults } from "../../../types";
import Card from '../../../components/Card'
import Layout from '../../../components/Layout'
import ActionButton from '../../../components/ActionButton'
import Form from '../../../components/Form'
import { Paper } from "@mui/material";
function AddPage() {
  return (
    <Layout>
     <Card spacing="4" direction="row" justifyContent="flex-end" alignItems="center" customStyles={{marginTop:'2em',marginRight:'2em'}}> 
       <ActionButton id='actBtn' btnvarient={'contained'} src={`/employee/list`} title="list view" colorface={"blue"} customStyles={{width:'10%',marginTop:'2em',borderRadius:'5em',fontWeight:'600',float:'right'}}/>
     </Card>
      <Paper variant="outlined" sx={{borderRadius:'2em',margin:'2em'}}>
      <Form btnTittle="add"/>
      </Paper>
    </Layout>
  );
}

export default AddPage;