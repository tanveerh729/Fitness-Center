import React from 'react';
import {Link} from 'react-router-dom';
import { Stack, Typography } from '@mui/material'


const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction='row'>
            <button 
                className='custom-btn-1'
            >
                {exercise.bodyPart}
            </button>
            <button className='custom-btn-2'
            >
                {exercise.target}
            </button>
        </Stack>
        <Typography ml='21px' color='#fff' fontWeight='bold' pb='10px' textTransform='capitalize' fontSize='22px'>
            {exercise.name.slice(0,25)}..
        </Typography>
    </Link>
  )
}

export default ExerciseCard