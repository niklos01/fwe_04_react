const FormInput = ({ label, id, value, onChange, placeholder }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type="text"
                className="form-control"
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;
