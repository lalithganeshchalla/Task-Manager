import React from 'react'
import { Button,
 } from '@mui/material';
import LanguageSelect from '../pag/LanguageSelect';
import FaviouriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchIcon } from 'lucide-react';
import { Divider } from 'antd';
import InputBase from '@mui/material/InputBase';
import Footer from '../comp/Footer';



const PageError = () => {
  return (
    <div>
      <header style={{ display:'flex', flexDirection:'row' , justifyContent:'center', backgroundColor: '#000', textAlign: 'center' }}>
        <p style={{ color: '#fff'  }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Button variant="text" style={{ color: '#fff', borderColor: '#fff', marginLeft: '20px' }}>
          Shop Now
          </Button>
         <LanguageSelect display='flex' flexDirection='row' justifyContent='end' alignItems='end' />
        </header>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', marginTop:'20px' }}>
          <h3>Exclusive</h3>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            Home
          </Button>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            Products
          </Button>
          <Button variant="text" color="" style={{ marginRight: '10px' }}>
            About Us
          </Button>
          <Button variant="text" color="">
            Sign Up
          </Button>
          <div style={{ position: 'relative', width: '200px' }}>
      <SearchIcon style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#888' }} />
      <InputBase
        placeholder="What are you looking for?"
        style={{
          paddingLeft: '35px',
          border: '1px solid #ccc',
          borderRadius: '2px',
          width: '250px',
        }}
      />
    </div>
          <FaviouriteIcon style={{ color: '#000', marginLeft: '10px' }} />
          <CartIcon style={{ color: '#000', marginLeft: '10px' }} />
          </div>
          <Divider>
          </Divider>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
           <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '150px',
  lineHeight: '2.8',
}}>
  <p style={{ color: '#000', margin: 0 }}>Home / 404 Error</p>
</div>

          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '100px' }}>
 <h1>
  404 Error: Page Not Found
 </h1>
  <p style={{ color: '#000', margin: 0 }}>The page you are looking for does not exist.</p>
  <Button variant="contained" color="error" style={{ marginTop: '20px',marginBottom: '20px' }}>
    Go Back to Home
  </Button>
</div>
          
         

<Footer/>
    </div>
  )
}

export default PageError