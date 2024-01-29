import Form from './components/Form';
import Table from './components/Table';
import EditModal from './components/EditModal';
import './App.css';
import { useState } from 'react';

function App() {
    const [tableData, setTableData] = useState([]);
    const [editModalData, setEditModalData] = useState(null);
  
    const handleFormSubmit = (formData) => {
      if (formData.name && formData.email && formData.contact && formData.weekday.length && formData.gender && formData.dob) 
      {
        setTableData([...tableData, formData]);
      } 
      else 
      {
        alert('Kindly fill the required fields');
      }
    };
  
    const handleEditRow = (editedData) => {
      const updatedTableData = tableData.map(row => (row === editModalData ? editedData : row));
      setTableData(updatedTableData);
      setEditModalData(null);
    };
  
    const handleDeleteRow = () => {
      const updatedTableData = tableData.filter(row => row !== editModalData);
      setTableData(updatedTableData);
      setEditModalData(null);
    };
  
    const handleOpenEditModal = (rowData) => {
      setEditModalData(rowData);
    };
  
    const handleCloseEditModal = () => {
      setEditModalData(null);
    };
    return (
      <div className='container'>
        <Form onFormSubmit={handleFormSubmit} />
        <Table
          data={tableData}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteRow}
        />
        {editModalData && (
          <EditModal
            rowData={editModalData}
            onEditSubmit={handleEditRow}
            onClose={handleCloseEditModal}
          />
        )}
      </div>
    )
}

export default App;
