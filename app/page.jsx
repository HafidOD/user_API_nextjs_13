import Users from "./components/Users";

export async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  
  return data.data;
}

export default async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Users</h1>
      <Users users={ users }/>
    </div>
  );
}
