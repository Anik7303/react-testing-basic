function Display(props) {
    const { strikes, balls } = props;
    return (
        <div className="Display">
            <div>Strikes: {strikes}</div>
            <div>Balls: {balls}</div>
        </div>
    );
}

export default Display;
