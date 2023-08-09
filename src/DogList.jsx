
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

function DogBreedList() {
  const [breedData, setBreedData] = useState({});

  useEffect(() => {
    
    axios.get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const breedsData = response.data.message;
        setBreedData(breedsData);
      })
      .catch(error => {
        console.error("Произошла ошибка при получении данных:", error);
      });
  }, []);

  return (
    <Container>
      {Object.entries(breedData).map(([breed, dogBreeds]) => (
        <div key={breed} className="card">
          <h2>{breed}</h2>
          {dogBreeds.length > 0 && (
            <ul>
              {dogBreeds.map((subBreed, index) => (
                <li key={index}>{subBreed}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Container>
  );
}

export default DogBreedList;
const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  gap: 30px;
 
  .card {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    font-size: 30px;
   
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  }
`;
