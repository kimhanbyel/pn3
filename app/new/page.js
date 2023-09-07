export default function New() {
  return (
    <div className="new">
      <form action="/api/new" method="POST">
        <div className="new-item">
          <h6>name</h6>
          <input type="text" name="name"/>
        </div>
        <div className="new-item">
          <h6>team</h6>
          <input type="text" name="team"/>
        </div>
        <div className="new-item">
          <h6>line</h6>
          <input type="text" name="line"/>
        </div>
        <button type="submit">new</button>
      </form>
    </div>
  );
}