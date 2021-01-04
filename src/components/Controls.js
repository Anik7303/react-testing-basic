function Controls(props) {
    const { onStrike, onBall, onHit, onFoul } = props;
    return (
        <div className="Controls">
            <button className="btn" onClick={onStrike}>
                Strike
            </button>
            <button className="btn" onClick={onBall}>
                Ball
            </button>
            <button className="btn" onClick={onHit}>
                Hit
            </button>
            <button className="btn" onClick={onFoul}>
                Foul
            </button>
        </div>
    );
}

export default Controls;
