import {
    Dimensions
} from 'react-native';

const window_Width = Dimensions.get('window').width;
const window_Height = Dimensions.get('window').height;

const customDimensions = {
    window_Width: window_Width,
    window_Height: window_Height,
    header_Height: window_Height * 0.06,
}

export default customDimensions;