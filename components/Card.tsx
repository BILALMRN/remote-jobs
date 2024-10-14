import { PropsWithChildren, ReactElement } from "react"
import { View, StyleSheet } from "react-native"


const card = ({ children }: PropsWithChildren) => {

    return (
        <View style={styles.card} >
            {children}
        </View>
    )

}
export default card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5, // For Android shadow
        margin: 16,
        overflow: 'hidden'
    },
})