import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
      <Text style={props.textStyles}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;