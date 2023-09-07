import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function New(props) {
  const db = await client.db('lol')
  const result = await db.collection('lck').findOne({"_id": new ObjectId(props.params.id)})
  return (
    <div className="edit">
      <form action="/api/edit" method="POST">
        <div className="edit-item">
          <h6>name</h6>
          <input type="text" name="name" defaultValue={result.name}/>
        </div>
        <div className="edit-item">
          <h6>team</h6>
          <input type="text" name="team" defaultValue={result.team}/>
        </div>
        <div className="edit-item">
          <h6>line</h6>
          <input type="text" name="line" defaultValue={result.line}/>
        </div>
        <input type="hidden" name="id" value={result._id}/>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}