"use client";

import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: string;
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  return <div></div>;
};

export default CountrySelect;
