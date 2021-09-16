import React, {useState} from 'react';
 import styled from 'styled-components';
 import {Link} from 'react-router-dom'
 import MenuIcon from '@material-ui/icons/Menu'
 import CloseIcon from '@material-ui/icons/Close';
 import {selectedCar} from '../../features/car/carSlide';
import {useSelector} from "react-redux"

 const Container= styled.div`
     min-height: 60px;
     position: fixed;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 20px;
     top: 0;
     left: 0;
     right: 0;
     z-index: 1;

 `;
  const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
  `;
   const RightMenu = styled.div`
   display: flex;
   align-items: center;

    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }
   `
   const CustomMenu = styled(MenuIcon)`
     cursor: pointer;
   `;
    const BurgerNav = styled.div`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      background: white;
      width: 300px;
      z-index: 100;
      list-style: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: start;
      transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
      transition: transform 0.2s;
      li{
          padding: 15px 0;
          border-bottom: 1px solid rgba(0,0,0,.2);
          a{
              font-weight: 600;
          }
      }
    `;
     const CustomClose = styled(CloseIcon)`
       cursor: pointer;
     `;
     const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;

     `

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const cars = useSelector(selectedCar);

    return (
        <Container>
            <Link to="/">
                <img src="/images/logo.svg" alt="Logo Images"/>
            </Link>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a href="#" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <Link to="/">
                    Shop
                </Link>
                <Link to="/login">
                    Tesla Account
                </Link>
                <CustomMenu onClick={() => setIsOpen(true)}>
                   
                </CustomMenu>
            </RightMenu>
            <BurgerNav show={isOpen}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setIsOpen(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index)=>(
                    <li><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Power</a></li>
            </BurgerNav>
        </Container>
    )
}
