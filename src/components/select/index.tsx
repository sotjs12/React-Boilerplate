import useOutsideClick from '@/hooks/useOutsideClick';
import React, { useRef, useState } from 'react';
import ArrowDown from '@/static/images/icon/arrow-down.svg';

import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownSelectBox,
} from './styled';

export interface IOption {
  value: any;
  label: any;
}

interface IProps {
  options: Array<IOption>;
  width?: number | string;
  onChange?: (option: IOption) => void;
  className?: string;
  defaultValue?: any;
}

const Select: React.FC<IProps> = ({
  options,
  width = 240,
  onChange,
  defaultValue,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [option, setOption] = useState<IOption>(
    options.find(opt => opt.value === defaultValue) || options[0],
  );

  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    show === true && setShow(false);
  });

  function handleSelectDropdown(option: IOption) {
    const opt = options.find(opt => opt.value === option.value);
    typeof onChange === 'function' && onChange(opt);
    setOption(opt);
    setShow(false);
  }

  return (
    <Dropdown ref={selectRef} width={width}>
      <DropdownSelectBox show onClick={() => setShow(true)}>
        <span className={'selected'}>{option.label}</span>
        <ArrowDown className={'dropdown-caret'} />
      </DropdownSelectBox>
      <DropdownList show>
        {options.map(opt => (
          <DropdownItem
            key={opt.value}
            onClick={() => handleSelectDropdown(opt)}
          >
            {opt.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default Select;
