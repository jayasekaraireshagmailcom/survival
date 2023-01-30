import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import ActionButton from '../../../components/ActionButton'
import type { NextPageWithLayout } from '../../_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ActionButton title="list view" colorface={"blue"}/>{page}
    </Layout>
  )
}

export default Page