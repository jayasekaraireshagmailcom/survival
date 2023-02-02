import { useRouter } from 'next/router'

function DeletePage() {
  const {query} = useRouter()
  const { id } = query
  console.log(id)
  const response = fetch('/api',{
    method:'DELETE',
    body:({"id":id}),
    headers:{
      'Content-Type': 'application/json'
    }
  })
}

export default DeletePage;