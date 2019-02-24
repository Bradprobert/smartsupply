import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        flex: 1,
        alignSelf: 'stretch'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: colors.darkGray
    }
});

export default styles;
