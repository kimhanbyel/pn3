import client from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  if(req.method === 'GET') return res.status(404).json('잘못된 주소')
  if(req.body.name === '김한별') return res.status(200).json('김일성입니다')

  const db = await client.db('lol')
  const result = await db.collection('lck').updateOne(
    {"_id": new ObjectId(req.body.id)},
    {$set: {
      "name": req.body.name,
      "team": req.body.team,
      "line": req.body.line
    }}
  )

  if(result.acknowledged) res.redirect(302, '/msg/300')
  else                    res.redirect(302, '/msg/400')
}