const Square = ({number, text, counter}) => {

    return (
        <>
            <div className={`square ${counter >= number &&
            'square--BacgroundColor'}`}>
                <div className="square__rectangle">
                    <h3 className='square__h3'>
                        {number}
                    </h3>
                    <p className='square__p'>
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Square;