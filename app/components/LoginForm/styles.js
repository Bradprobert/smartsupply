import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { constants } from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.primaryGreen
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 48,
        fontFamily: 'poiret-one-regular',
    },
    textInput: {
        height: 60,
        padding: 12,
        margin: 12,
        borderColor: colors.lightGrey,
        backgroundColor: colors.white,
        borderRadius: constants.BORDER_RADIUS
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        borderRadius: constants.BORDER_RADIUS
    },
    quickButton: {
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        borderRadius: constants.BORDER_RADIUS
    }
});

export default styles;
