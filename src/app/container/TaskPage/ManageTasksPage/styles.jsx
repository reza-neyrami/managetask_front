import { Dialog, Paper } from '@mui/material';
import styled from 'styled-components';

export const UsersTableWrapper = styled(Paper)``;

export const UserModalWrapper = styled(Dialog)`
  .DialogActions {
    button {
      margin: 0 0.2em;
    }
  }

  .MuiDialogContent-root {
    width: 400px;
    max-width: 95vw;
  }

  .MuiDialogActions-root {
    justify-content: space-between;
  }
`;
