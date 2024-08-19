import { ICustomInput } from "./CustomInput.props";

const CustomInput = ({ children, register, inputName, labelClassName, ...props }: ICustomInput) => {

    const { ref, ...rest } = register(inputName)
    return (
        <label className={labelClassName}>
            {children}
            <input
                onClick={(event) => {
                    const input = event.target as HTMLInputElement
                    input.value = ''
                }}
                {...rest}
                ref={ref}
                {...props} />
        </label>
    );
}

export default CustomInput;