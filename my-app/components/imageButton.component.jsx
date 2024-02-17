import { TouchableOpacity, Image } from 'react-native';

const ImageButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
      <Image source={props.source}/>
    </TouchableOpacity>
  );
};

export default ImageButton;
