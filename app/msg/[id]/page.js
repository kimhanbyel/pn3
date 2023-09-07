export default function Msg(props){
  let msg = ""
  switch(props.params.id){
    case '200': msg = '성공적으로 입력되었습니다'; break;
    case '300': msg = '성공적으로 수정되었습니다'; break;
    case '400': msg = '실패하였습니다, 다시 시도해주세요'; break;
  }
  return (
    <div className="msg">
      {msg}
    </div>
  );
}