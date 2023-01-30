import { Character, GetCharacterResults,Employee,GetEmployeeResults } from "../../../types";
import Card from '../../../components/Card'
import Layout from '../../../components/Layout'
import ActionButton from '../../../components/ActionButton'
import Form from '../../../components/Form'
function AddPage() {
  return (
    <Layout>
     <Card spacing="4" direction="row" justifyContent="flex-end" alignItems="center" customStyles={{marginTop:'2em',marginRight:'2em'}}> 
       <ActionButton src={`/employee/list`} title="list view" colorface={"blue"} customStyles={{width:'10%',marginTop:'2em',borderRadius:'5em',fontWeight:'600',float:'right'}}/>
     </Card>
     <Card spacing="0" direction="row" justifyContent="flex-start" alignItems="flex-start" customStyles={{marginTop:'2em'}}>
      <Form />
      </Card>
    </Layout>
  );
}

export default AddPage;