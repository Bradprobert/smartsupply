import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { constants } from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        flex: 1,
        marginTop: constants.SCREEN_HEIGHT * constants.MODAL_MARGIN_PCT,
        marginBottom: constants.SCREEN_HEIGHT * constants.MODAL_MARGIN_PCT,
        marginLeft: constants.SCREEN_WIDTH * constants.MODAL_MARGIN_PCT,
        marginRight: constants.SCREEN_WIDTH * constants.MODAL_MARGIN_PCT,
        backgroundColor: colors.white,
        borderRadius: constants.BORDER_RADIUS,
    },
    name: {
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: 'raleway-bold',
        fontSize: 24
    },
    image: {
        width: 100,
        height: 100,
    },
    description: {
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: 'raleway-regular',
        fontSize: 12
    }
});

export default styles;
