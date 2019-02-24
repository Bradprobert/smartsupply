import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        padding: 12,
        backgroundColor: colors.white
    },
    swipeContainer: {
        margin: '2%',
    },
    name: {
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: 'raleway-bold'
    },
    image: {
        height: 50,
        width: 50
    },
});

export default styles;
