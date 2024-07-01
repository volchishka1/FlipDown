import React, { FC } from 'react';
import Video from 'react-native-video';
import { fullScreenVideoStyles } from '@components/fullScreenVideo/styles';
import { Modal, StatusBar, TextProps } from 'react-native';
import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent';
import { CloseWindowSvg } from '@assets/closeModalWindow';
import { BasketSvg } from '@assets/basket';

export type FullScreenVideoProps = {
  url: TextProps['children'];
  setUrl: (arg: string) => void;
  deleteFile: () => void;
};
export const FullScreenVideo: FC<FullScreenVideoProps> = (props) => {
  const { url, setUrl, deleteFile } = props;
  return (
    <Modal>
      <StatusBar backgroundColor={'#000000'} />
      <Video
        resizeMode='stretch'
        source={{ uri: url }}
        controls={true}
        style={fullScreenVideoStyles.videoStyles}
      />
      <CloseWindowComponent
        iconSvg={<CloseWindowSvg />}
        goToCloseButton={() => setUrl('')}
        style={{ position: 'absolute', top: 40, right: 20, zIndex: 100 }}
        buttonStyle={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <CloseWindowComponent
        iconSvg={<BasketSvg />}
        goToCloseButton={() => deleteFile()}
        style={{ position: 'absolute', top: 100, right: 20, zIndex: 100 }}
        buttonStyle={{ width: 50, height: 50, borderRadius: 25 }}
      />
    </Modal>
  );
};
