function SummaryPage({formData}) {
    return (
        <div>
            <h2>Summary:</h2>
            <div>
                {Object.entries(formData).map(([key, value], index) => (
                    <p key={index}>{`${key}: ${value}`}</p>
                ))}
            </div>
        </div>
    )
}

export default SummaryPage;