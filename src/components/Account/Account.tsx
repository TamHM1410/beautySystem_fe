import { Avatar, Input } from '@mantine/core';
import StyledButton from '../custom/StyledButton';
import classes from './Styles/style.module.css';

const AccountSetting = () => {
  return (
    <>
      <div>
        <h3>Account Setting</h3>
        <div style={{ display: 'flex', gap: 20 }}>
          <div>
            <Avatar variant="filled" radius="xl" size="xl" src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"  style={{width:200,height:200}} />
          </div>
          <div className={classes.account_form}>
            <Input.Wrapper
              label="Email address"
              description="Input description"
              style={{ width: '100%' }}
            >
              <Input placeholder="Input inside Input.Wrapper" style={{ width: '100%' }} />
            </Input.Wrapper>
            <Input.Wrapper label="Full name" description="Full name">
              <Input placeholder="Input inside Input.Wrapper" />
            </Input.Wrapper>
            <Input.Wrapper label="Phone" description="phone">
              <Input placeholder="Input inside Input.Wrapper" />
            </Input.Wrapper>
            <div className={classes.account_form_button}>
              <StyledButton>Edit</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
