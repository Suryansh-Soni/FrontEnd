export default function MsgBox({ userName, testColor }) {
    let style={color:testColor};
    return (
        <div>
            <h1 style={style}>Hello {userName}!</h1>
        </div>
    );
}
  