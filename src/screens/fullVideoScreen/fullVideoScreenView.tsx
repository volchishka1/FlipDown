import { StatusBar, View } from 'react-native';
import Video from 'react-native-video';
import { fullScreenVideoStyles } from '@screens/fullVideoScreen/styles';
import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { CloseWindowSvg } from '@assets/closeModalWindow';
import { BasketSvg } from '@assets/basket';
import React, { FC } from 'react';
import { FullVideoScreenViewProps } from '@screens/fullVideoScreen/types';

export const FullVideoScreenView: FC<FullVideoScreenViewProps> = (props) => {
  const { url, backToDownloadStackScreen, deleteFile } = props;

  return (
    <View>
      <StatusBar backgroundColor={'#000000'} />
      <Video
        fullscreen={false}
        resizeMode='cover'
        source={{ uri: url }}
        controls={true}
        style={fullScreenVideoStyles.videoStyles}
      />
      <CloseWindowComponent
        iconSvg={<CloseWindowSvg />}
        goToCloseButton={backToDownloadStackScreen}
        style={fullScreenVideoStyles.closeWindowStyle}
        buttonStyle={fullScreenVideoStyles.closeWindowButtonStyle}
      />
      <CloseWindowComponent
        iconSvg={<BasketSvg />}
        goToCloseButton={deleteFile}
        style={fullScreenVideoStyles.deleteItemStyle}
        buttonStyle={fullScreenVideoStyles.closeWindowButtonStyle}
      />
    </View>
  );
};
