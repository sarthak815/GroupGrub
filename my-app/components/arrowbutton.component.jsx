import { TouchableOpacity, Image } from 'react-native';

const ArrowButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
        <Text style={props.textStyles}>{props.text}</Text>
        <Image source={props.source}/>
    </TouchableOpacity>
  );
};

export default ArrowButton;
