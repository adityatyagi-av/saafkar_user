import { StyleSheet } from "react-native";
import { colors } from "./colors/colors";
import { typography } from "./typography/typography";

const buttonStyles = StyleSheet.create({
    SkipButtonContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'',
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    SkipButton:{
        fontSize: typography.bodyLarge.fontSize,
        letterSpacing: 0,
        fontWeight: typography.bodyLarge.fontWeight,
        fontFamily: 'Poppins-Medium',
        color: colors.gray,
        margin:21,
        textAlign: 'center',
    },

});

export {buttonStyles};
