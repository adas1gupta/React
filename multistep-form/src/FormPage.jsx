function FormPage ({ index, page, formData, setFormData }) {
    return (
        <div key={index}>
            {page.map((field, index) => (
                <div key={index}>
                    <label htmlFor={field.id}>{`${field.label} `}</label>
                    <input
                        id={field.id}
                        type={field.type}
                        value={formData[field.id]}
                        onChange={(e) => (
                            setFormData({...formData, [field.id]: e.target.value})
                        )}
                    />
                </div>
            ))}
        </div>
    )
}

export default FormPage;