import React, { useState } from 'react';

const DeleteDataButton = ({ id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://example.com/api/data/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include additional headers, like an authorization token
        },
        // You can include a request body if needed
        // body: JSON.stringify({}),
      });

      if (response.ok) {
        console.log('Data deleted successfully');
        // Handle any additional logic after successful deletion
      } else {
        console.error('Failed to delete data');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error during deletion:', error);
      // Handle network errors
    }
  };
}
 

export default DeleteDataButton;