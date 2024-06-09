const Button = (props) => {
    const { children, background } = props;

    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${background} text-white w-full uppercase`}>
            {children}
        </button>
    )
}

export default Button;