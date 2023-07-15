import React from 'react';
import './Acard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Acard(props) {
  return (
    <Card sx={{ maxWidth: '25vw', bgcolor: 'rgb(20, 31, 35)', marginTop: '15px', marginBottom: '5px' }}>
      <CardContent sx={{ bgcolor: 'rgb(20, 31, 35)' }}>
        <Typography variant="h5" color="Blue" sx={{ bgcolor: 'rgb(20, 31, 35)' }}>
            {props.first_name}  {props.last_name}
        </Typography>
        <Typography variant="body2" color="white" sx={{ bgcolor: 'rgb(20, 31, 35)' }}>
            {props.email}
        </Typography>
        <Typography variant="body2" color="white" sx={{ bgcolor: 'rgb(20, 31, 35)' }}>
            {props.gender}
        </Typography>
        <Typography variant="body2" color="red" sx={{ bgcolor: 'rgb(20, 31, 35)' }}>
            {props.industry}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Acard;
