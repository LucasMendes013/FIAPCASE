import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import loading from '../../assets/animation/loading.json'
import loadingSplash from '../../assets/animation/loadingSplash.json'

export const LottieAnimation = styled(LottieView).attrs((props) => ({
  source: props.animation === 'loading' ? loading : loadingSplash,
}))`
  width: ${(props) => props.width || '180px'};
  height: ${(props) => props.height || '180px'};
`;
