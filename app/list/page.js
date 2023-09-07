import client from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = await client.db('lol')
  const is = await db.collection('lck').find().toArray()
  return (
    <div className="list">
      {
        is.map(i =>
          <div className="list-item">
            <Link href={`/detail/${i._id}`}>{i.name}</Link>
            <Link href={`/edit/${i._id}`}>🔨</Link>
          </div>
        )
      }
    </div>
  )
}