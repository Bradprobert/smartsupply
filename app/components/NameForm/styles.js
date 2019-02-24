import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        padding: 12,
        margin: 12,
        borderColor: colors.lightGrey,
        backgroundColor: colors.white
    },
    button: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center'
    }
});

export default styles;
