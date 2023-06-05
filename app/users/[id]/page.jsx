import Image from "next/image";

export async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
}
export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <div class="card">
  <div className="card-header text-center">
  <Image
          src={user.avatar}
          width={120}
          height={120}
          className="rounded-circle"
          alt={`avatar de ${user.first_name}`}
        />
  </div>
  <div class="card-body text-center">
    <h5 class="card-title">{user.first_name} {user.last_name}</h5>
    <p class="card-text">{user.email}</p>
  </div>
</div>
      </div>
    </div>
  );
}
