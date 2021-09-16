import React from 'react';
 import styled from 'styled-components';
import Section from '../Section/Section';

 const Container= styled.div`
  height: 100vh;

 `


export default function Home() {
    return (
        <Container>
            <Section title="Model S" des="Order Online for Touchless Delivery" backgroundImg="model-s.jpg" leftBtn="Custom order" RightBtn="Existing Inventory"/>
            <Section title="Model Y" des="Order Online for Touchless Delivery" backgroundImg="model-y.jpg" leftBtn="Custom order" RightBtn="Existing Inventory"/>
            <Section title="Model 3" des="Order Online for Touchless Delivery" backgroundImg="model-3.jpg" leftBtn="Custom order" RightBtn="Existing Inventory"/>
            <Section title="Model X" des="Order Online for Touchless Delivery" backgroundImg="model-x.jpg" leftBtn="Custom order" RightBtn="Existing Inventory"/>
            <Section title="Lowest Cost Solar Panels In America" des="Money-back Guarantee" backgroundImg="solar-panel.jpg" leftBtn="Order now" RightBtn="Learn more"/>
            <Section title="Solar For New Roofs" des="Solar Roof Costs Less Than A New Roof Plus Solar Panel" backgroundImg="solar-roof.jpg" leftBtn="Order now" RightBtn="Learn more"/>
            <Section title="Accessories" des="" backgroundImg="accessories.jpg" leftBtn="Shop now"/>
        </Container>
    )
}
