import React from "react";
import Select, {
  components,
  OptionProps,
  OptionsType,
  SingleValueProps,
  ValueType,
} from "react-select";

interface OptionType {
  label: string;
  value: string;
  logo: string;
}

const options: OptionsType<OptionType> = [
  { value: "chocolate", label: "Chocolate", logo: "http://www.rundownyouth.com/wp-content/uploads/2019/06/230px-LINE_logo.svg_-150x150.png" },
  { value: "strawberry", label: "Strawberry", logo: "http://www.rundownyouth.com/wp-content/uploads/2019/06/230px-LINE_logo.svg_-150x150.png" },
  { value: "vanilla", label: "Vanilla", logo: "http://www.rundownyouth.com/wp-content/uploads/2019/06/230px-LINE_logo.svg_-150x150.png" }
];

// in this case we can not using ValueType<Shipping.CARRIER_OPTIONS> because added logo field
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const SingleValue = (singleValueProps: SingleValueProps<OptionType>) => {
const SingleValue = (singleValueProps: SingleValueProps<OptionType>) => {
  const {
    data: { label, value, logo }
  } = singleValueProps;

  return (
    <components.SingleValue {...singleValueProps}>
      <span className="d-flex align-items-center">
        {logo && <img height="45" width="45" src={logo} alt={value} />}
        <span className="ml-2">{label} {':'} {value}</span>
        
      </span>
    </components.SingleValue>
  );
};


const Option = (optionProps: OptionProps<OptionType>) => {
  const { data } = optionProps;
  return (
    <components.Option {...optionProps}>
      <span className="d-flex align-items-center">
        {data.logo && (
          <img height="45" width="45" src={data.logo} alt={data.value} />
        )}
        <span className="ml-2">{data.value}</span>
      </span>
    </components.Option>
  );
};

export default class App extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption: ValueType<OptionType>) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        isSearchable={false}
        options={options}
        components={{ SingleValue, Option }}
      />
    );
  }
}

