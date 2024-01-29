import {useState} from 'react';

const Form = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        weekday: [],
        gender: 'Male',
        dob: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(day => day !== value)) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        // Reset the Form
        setFormData({
            name: '',
            email: '',
            contact: '',
            weekday: [],
            gender: 'Male',
            dob: '',
        });
    };

    return (
        <div className="form-container">
            <h2 className='header'>Finzome Assignment Form</h2>
            <form id="myForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br />

                <label htmlFor="contact">Contact:</label>
                <input type="number" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} required /><br />

                <label>Weekday:</label>
                <input type="checkbox" id="monday" name="weekday" value="Monday" checked={formData.weekday.includes('Monday')} onChange={handleInputChange}/>Monday <br />
                <input type="checkbox" id="tuesday" name="weekday" value="Tuesday" checked={formData.weekday.includes('Tuesday')} onChange={handleInputChange} />Tuesday <br />
                <input type="checkbox" id="wednesday" name="weekday" value="Wednesday" checked={formData.weekday.includes('Wednesday')} onChange={handleInputChange} />Wednesday <br />
                <input type="checkbox" id="thursday" name="weekday" value="Thursday" checked={formData.weekday.includes('Thursday')} onChange={handleInputChange} />Thursday <br />
                <input type="checkbox" id="friday" name="weekday" value="Friday" checked={formData.weekday.includes('Friday')} onChange={handleInputChange} />Friday <br />
                <br />

                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleInputChange} />Male <br />
                <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleInputChange} />Female<br />
                <br />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required value={formData.dob} onChange={handleInputChange} /><br />
                <br />
                <input type="submit" className='btn' value="Submit"></input>
            </form>
        </div>
    )
}

export default Form