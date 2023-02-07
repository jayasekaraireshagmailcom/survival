import React,{ ReactElement,useState } from 'react'
import type { GetStaticProps } from "next";
import Layout from '../../../components/Layout'
import ActionButton from '../../../components/ActionButton'
import IcnButton from '../../../components/IconButton'

import Card from '../../../components/Card'
import DisplayGrid from '../../../components/GridView'
import DisplayTable from '../../../components/TableView'
import type { NextPageWithLayout} from '../../_app'
import { ViewState,GetEmployeeResults,Employee } from '../../../types';
import path from 'path';
import { promises as fs } from 'fs';


const Page: NextPageWithLayout<{ employees: Employee[] }>  = ({employees}) => {
  const [view, setView] = useState<ViewState>({viewType: 'list'});
  const change=()=>{
     view.viewType=='list'?setView({viewType: 'grid'}):setView({viewType: 'list'})
  }

  return (
    <Layout>
     <Card spacing="4" direction="row" justifyContent="flex-end" alignItems="center" customStyles={{marginTop:'2em',marginRight:'2em'}}>
       <ActionButton id='actBtn' btnvarient={'contained'} src='/employee/add' title="add employee" customStyles={{borderRadius:'5em',fontWeight:'600'}} colorface={"blue"}/>
       <IcnButton view={view} changeDisplay={change} color='primary'/>
     </Card>
     <Card spacing="1" direction="row" justifyContent="flex-end" alignItems="center" customStyles={{marginTop:'3em'}}>
     {view.viewType=='grid'?<DisplayGrid dataSource={employees}/>:<DisplayTable dataSource={employees}/>}

     </Card>
     
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async (context) => {
     const filePath = path.join(process.cwd(), 'employees.json');
     const jsonData = await fs.readFile(filePath,'utf-8');
     const results:GetEmployeeResults = JSON.parse(jsonData)
   
     return {
       props: {
         employees: results,
       },
     };
};
Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Page