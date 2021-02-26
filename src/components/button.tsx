import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonProps {
    width: number | string;
    height: number | string;
    borderRadius: number;
    text: string;
}

export const Button: React.FC<ButtonProps> = ({
    width,
    height,
    borderRadius,
    text,
}) => {

    const styles = StyleSheet.create({
        btn: {
            width: width,
            height: height,
            borderRadius: borderRadius,
            backgroundColor: '#53B175',
            justifyContent: 'center',
        },
        btnText: {
            fontSize: 18,
            fontWeight: '600',
            fontStyle: 'normal',
            lineHeight: 18,
            textAlign: 'center',
            color: '#FFF9FF',
        }
    });

    return (

        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

