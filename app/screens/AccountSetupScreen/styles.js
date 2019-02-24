import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        backgroundColor: colors.primaryGreen
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 48,
        fontFamily: 'poiret-one-regular',
        textAlign: 'center',
    },
    subtitle: {
        color: colors.white,
        fontSize: 24,
        fontFamily: 'poiret-one-regular',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
        fontFamily: 'poiret-one-regular',
        padding: 10,
    },
    nextButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        justifyContent: 'flex-end'
    },
    backButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12
    },
    dotsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 50,
        margin: 2,
        borderWidth: 1,
        borderColor: colors.white,
    },
    activeDot: {
        backgroundColor: colors.white,
    }
});

export default styles;
