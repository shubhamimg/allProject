
const User = ({ userName, textColor }) => {
    return (
        <>
            <div className="">
                <h1 style={{ color: textColor }} >Hello, {userName}</h1>
            </div>
        </>
    )
}

export default User