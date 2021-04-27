const Button = (props) => {
    // props is an object

    const {onClickFunction, buttonText} = props;
    // this is the same as
    // const onClickFunction = props.onClickFunction
    // const buttonText = props.buttonText
    return (
        <button
            onClick={onClickFunction}
        >
            {buttonText}
        </button>
    )
}

export default Button;