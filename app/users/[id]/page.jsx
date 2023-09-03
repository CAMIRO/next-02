async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}


export default async function UserPage({params}) {
  
  const user = await getUser(params.id)
  console.log("🚀  user:", user)
  return (
    <div>User Page</div>
  )
}
