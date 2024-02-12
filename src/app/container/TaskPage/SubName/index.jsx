import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import LoadingWithText from '../../../../components/LoadingWithText';

import { SubNameStyles } from '../styles';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function SubName({ dataItem, onChange }) {
  const [subName, setSubName] = useState();
  const handleSetChange = val => {
    if (val) {
      setSubName(val);
      onChange(val);
    }
  };


  return (
    <SubNameStyles>
      {dataItem ? (
        <FormControl className="form">
          <InputLabel id="subName" className="sub-form">
            گروه کتگوری
          </InputLabel>
          <Select
            id="subName"
            value={subName || ''}
            onChange={e => handleSetChange(e.target.value)}
            input={<Input id="sub-nameId" />}
            MenuProps={MenuProps}
          >
            {dataItem ? (
              Object.values(dataItem).map(name => (
                <MenuItem
                  key={name.id}
                  value={name.id}
                >
                  {name.name}
                </MenuItem>
              ))
            ) : (
              <div className="loading-data">
                <LoadingWithText />
              </div>
            )}
          </Select>
        </FormControl>
      ) : (
        <LoadingWithText />
      )}
    </SubNameStyles>
  );
}

SubName.propTypes = {
  dataItem: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SubName);
