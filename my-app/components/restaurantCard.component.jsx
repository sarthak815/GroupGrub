import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.headingContainer}>
    <Text style={styles.restaurant}>{props.restaurant}</Text>
    <Text style={styles.rating}>{props.rating} Stars</Text>
    </View>
    <View style={styles.line} />
    <Text style={styles.address}>{props.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FDED',
    padding: 16,
    marginBottom: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 4,
  },
  restaurant: {
    fontSize: 20,
    color: '#265073',
  },
  rating: {
    fontSize: 16,
    color: '#466177',
    justifyContent: 'center',
  },
  address: {
    fontSize: 16,
    color: '#466177',
    marginBottom: 6,
  },
  line: {
    borderBottomColor: '#265073',
    borderBottomWidth: 1,
    marginBottom: 14,
    marginTop: 4,
  },
});

export default Card;