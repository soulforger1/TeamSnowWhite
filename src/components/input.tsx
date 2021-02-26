import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg'

interface InputProps {
    width: number | string;
    height: number | string;
    borderBottomWidth?: number;
    backgroundColor?: string;
    placeholder?: string;
    borderRadius?: number;
}

export const Input: React.FC<InputProps> = ({
    width,
    height,
    borderBottomWidth,
    placeholder,
    backgroundColor,
    borderRadius,
}) => {
    const [value, onChangeText] = React.useState();

    const styles = StyleSheet.create({
        input: {
            width: width,
            height: height,
            borderBottomWidth: borderBottomWidth,
            borderColor: '#E2E2E2',
            backgroundColor: backgroundColor,
            flexDirection: 'row',
            borderRadius: borderRadius,
        },
        // searchIcon: {
        //     padding: 5,
        // }
    });

    return (
        <View style={styles.input}>
            {/* <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <Path d="M8.95229 14.1162C9.74022 14.1162 10.5204 13.961 11.2484 13.6595C11.9763 13.358 12.6378 12.916 13.1949 12.3589C13.7521 11.8017 14.194 11.1403 14.4956 10.4123C14.7971 9.68437 14.9523 8.90416 14.9523 8.11623C14.9523 7.32829 14.7971 6.54808 14.4956 5.82013C14.194 5.09217 13.7521 4.43074 13.1949 3.87359C12.6378 3.31643 11.9763 2.87448 11.2484 2.57295C10.5204 2.27142 9.74022 2.11623 8.95229 2.11623C7.36099 2.11623 5.83486 2.74837 4.70964 3.87359C3.58443 4.9988 2.95229 6.52493 2.95229 8.11623C2.95229 9.70753 3.58443 11.2336 4.70964 12.3589C5.83486 13.4841 7.36099 14.1162 8.95229 14.1162ZM15.2723 13.0222L18.8523 16.6022C18.9477 16.6945 19.0238 16.8049 19.0762 16.927C19.1285 17.049 19.156 17.1803 19.157 17.313C19.1581 17.4458 19.1327 17.5775 19.0823 17.7003C19.032 17.8232 18.9576 17.9348 18.8637 18.0286C18.7697 18.1224 18.658 18.1966 18.5351 18.2468C18.4121 18.297 18.2804 18.3222 18.1477 18.321C18.0149 18.3197 17.8837 18.292 17.7617 18.2396C17.6398 18.1871 17.5295 18.1108 17.4373 18.0152L13.8573 14.4352C12.2497 15.6831 10.2271 16.2714 8.20104 16.0804C6.175 15.8894 4.29789 14.9335 2.95184 13.4073C1.60578 11.881 0.89197 9.89917 0.955711 7.86515C1.01945 5.83113 1.85595 3.89785 3.29493 2.45887C4.73391 1.0199 6.66719 0.183393 8.70121 0.119652C10.7352 0.0559106 12.7171 0.769723 14.2433 2.11578C15.7696 3.46183 16.7255 5.33894 16.9165 7.36498C17.1075 9.39102 16.5191 11.4137 15.2713 13.0212L15.2723 13.0222Z" fill="#181B19" />
            </Svg> */}

            <TextInput
                style={{
                    fontSize: 18,
                    width: width,
                    height: height,
                }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
};

