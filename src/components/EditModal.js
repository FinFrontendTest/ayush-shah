import { useState, useEffect } from 'react';

const EditModal = ({ rowData, onEditSubmit, onClose }) => {
    const [editedData, setEditedData] = useState({ ...rowData });

    useEffect(() => {
        setEditedData({ ...rowData });
    }, [rowData]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(day => day !== value)) : value,
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEditSubmit(editedData);
        onClose();
    };

    return (
        <div className="edit-modal-container">
            <form id="myForm" onSubmit={handleEditSubmit}>
                <h2 className='header'>Edit Modal</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={editedData.name} onChange={handleInputChange} required /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={editedData.email} onChange={handleInputChange} required /><br />

                <label htmlFor="contact">Contact:</label>
                <input type="number" id="contact" name="contact" value={editedData.contact} onChange={handleInputChange} required /><br />

                <label>Weekday:</label>
                <input type="checkbox" id="monday" name="weekday" value="Monday" checked={editedData.weekday.includes('Monday')} onChange={handleInputChange} />Monday <br />
                <input type="checkbox" id="tuesday" name="weekday" value="Tuesday" checked={editedData.weekday.includes('Tuesday')} onChange={handleInputChange} />Tuesday <br />
                <input type="checkbox" id="wednesday" name="weekday" value="Wednesday" checked={editedData.weekday.includes('Wednesday')} onChange={handleInputChange} />Wednesday <br />
                <input type="checkbox" id="thursday" name="weekday" value="Thursday" checked={editedData.weekday.includes('Thursday')} onChange={handleInputChange} />Thursday <br />
                <input type="checkbox" id="friday" name="weekday" value="Friday" checked={editedData.weekday.includes('Friday')} onChange={handleInputChange} />Friday <br />
                <br />

                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="Male" checked={editedData.gender === 'Male'} onChange={handleInputChange} />Male <br />
                <input type="radio" id="female" name="gender" value="Female" checked={editedData.gender === 'Female'} onChange={handleInputChange} />Female <br />
                <br />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required value={editedData.dob} onChange={handleInputChange} /><br />
                <br />
                <button type="submit" className='btn btn-edit' value="Submit">Update</button>
                <button className='btn btn-delete' onClick={onClose}>Cancel</button>

            </form>
        </div>
    );
};

export default EditModal;
