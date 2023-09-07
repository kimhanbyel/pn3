import client from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = await client.db('lol')
  const result = await db.collection('lck').findOne({"_id": new ObjectId(props.params.id)})
  return (
    <div className="detail">
      <div className="detail-item">
        {result.name}
      </div>
      <div className="detail-item">
        {result.team}
      </div>
      <div className="detail-item">
        {result.line}
      </div>
      <Link href={`/edit/${props.params.id}`} className="detail-item">
        <button type="submit">Edit</button>
      </Link>
    </div>
  );
}