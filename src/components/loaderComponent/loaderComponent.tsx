import React from 'react';

import LottieView from 'lottie-react-native';

export const LoaderComponent = () => {
  return (
    <LottieView
      source={require('../../../assets/animation_lkgrv9gp.json')}
      autoPlay={true}
      loop={true}
      style={{
        flex: 1,
      }}
      duration={3500}
    />
  );
};
