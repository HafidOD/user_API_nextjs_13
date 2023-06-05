// "use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Users({users}) {
  // const router = useRouter();
  
  return (
    <ul className="list-group">
      {users.map((user) => {
        return (
          <li key={user.id} className="list-group-item list-group-item-action ">
            <Link href={`/users/${encodeURIComponent(user.id)}`} className="text-decoration-none d-flex justify-content-between align-items-center">
            <div>
              <h5><span>{user.id}</span> {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
            </div>
            <Image
              src={user.avatar}
              width={120}
              height={120}
              className="rounded-circle"
              alt={`avatar de ${user.first_name}`}
            />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
