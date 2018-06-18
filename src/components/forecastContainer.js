import React from 'react';
import styled from 'styled-components';

const ForecastContainer = styled.div`
display:flex; 
flex-direction: row;
justify-content: space-between;
`;

export default props => <ForecastContainer>{props.children}</ForecastContainer>;
