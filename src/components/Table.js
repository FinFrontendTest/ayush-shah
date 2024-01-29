const Table = ({ data, onEdit, onDelete }) => {
    return (
        <div className="table-container">
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Weekday</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.contact}</td>
                            <td>{row.email}</td>
                            <td>{row.weekday.join(', ')}</td>
                            <td>{row.gender}</td>
                            <td>{row.dob}</td>
                            <td>
                                <button className="btn btn-edit" onClick={() => onEdit(row)}>Edit</button>
                                <button className="btn btn-delete" onClick={() => onDelete(row)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
