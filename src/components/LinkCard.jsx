import { Box, Typography } from '@mui/material';
import { LinkOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function LinkCard() {
    const [adOpen, setAdOpen] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setAdOpen(true);
        setTimeout(() => {
          setAdOpen(false);
        }, 7500)
      }, 15000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <Box className="BottomRightTag shimmer" style={{
            bottom: '250px',
            right: adOpen ? '0' : '-300px',
        }}>
        <LinkOutlined style={{
            transform: 'rotate(-45deg)',
        }} />
        <Typography fontFamily="Brda" fontSize="28px" fontWeight="bold" letterSpacing="0.08em">kocity.xyz</Typography>
        </Box>
    )
}

export default LinkCard