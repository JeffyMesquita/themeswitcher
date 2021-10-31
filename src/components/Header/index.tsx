import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

type Props = {
  onChangeTheme: () => void;
}

const Header = ({ onChangeTheme }: Props) => {
  const { name, colors } = useContext(ThemeContext);

  return (
    <Container> 
      <h3>Theme Switch</h3>   

      <Switch
        onChange={onChangeTheme}
        checked={name === 'light'}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor="#232323"  
      />
    </Container>
  );
};  

export default Header;