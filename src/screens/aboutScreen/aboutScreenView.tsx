import { SafeAreaView, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';
import { DotComponent } from '../../components/dotComponent/dotComponent';
import { ParagraphComponent } from '../../components/textComponent/paragraphComponent';
import { TextComponent } from '../../components/textComponent/textComponent';

import { aboutScreenStyles } from './styles';
import { globalStyles } from '../../components/globalStyles/globalStyles';

export type AboutScreenProps = {
  goToCloseBottomSheet: () => void;
};

export const AboutScreenView: FC<AboutScreenProps> = ({ goToCloseBottomSheet }) => {
  return (
    <SafeAreaView style={aboutScreenStyles.rootContainer}>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <ScrollView style={aboutScreenStyles.centerContainer}>
        <ParagraphComponent paragraphName={'What is the FlipTok Project?'} />
        <TextComponent
          style={globalStyles.descriptionText}
          text={
            'If you need to download videos from TikTok and you do not know how to do it, we advise you to pay attention to the FlipTok project. FlipTok is a website that allows you to deal with the task in just a few seconds. The service is characterized by a simple and clear interface, which means that it allows you to find and download any videos from TikTok, and will be easy to understand for teenagers and older users. There will be no difficulties because we offer the best solution to save clips on any device.'
          }
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={'How to use the service?'}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={
            'Working with the application involves very simple steps. To download videos and music from TikTok, you only need a few steps. All you need is this:'
          }
        />
        <DotComponent
          text={'go to the app and find a clip you like;'}
          style={globalStyles.dotComponent}
        />
        <DotComponent
          text={'copy the link using the "Share" button;'}
          style={globalStyles.dotComponent}
        />
        <DotComponent
          text={'open the FlipTok application and paste the copied link into the input field.'}
          style={globalStyles.dotComponent}
        />
        <TextComponent
          text={
            'The final step is to click the "Download" button and wait for the video to download. It will be found in the "Downloads" or "My Files" folder. Please note that only FlipTok allows you to download videos from TikTok without a watermark, other similar services can\'t do this.\n' +
            '\n' +
            'On this website, you can download not only short video clips but also music from TikTok. The algorithm of actions does not change. It is just as easy and simple.\n'
          }
        />
        <ParagraphComponent
          textStyles={globalStyles.paragraphName}
          paragraphName={'Benefits of FlipTok. What should a user know?'}
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={
            'If you have chosen FlipTok for downloading files, you definitely have not made a mistake, because the service has a lot of advantages. The main pros are:'
          }
        />
        <DotComponent
          style={globalStyles.dotComponent}
          text={
            'no user fees. You really do not have to pay when downloading clips from TikTok without a watermark, even if there is a lot of content and its size is quite large;'
          }
        />
        <DotComponent
          style={globalStyles.dotComponent}
          text={
            'high-quality videos. FlipTok allows you to download clips without loss of quality, which means you can watch them on your device in the best possible way;'
          }
        />
        <DotComponent
          style={globalStyles.dotComponent}
          text={
            'any video format. We can download videos in MP4, AVI, 3GP and other formats without any problems. In any case, the download will be as fast as possible and the clip will be of high quality;'
          }
        />
        <DotComponent
          style={globalStyles.dotComponent}
          text={
            'confidentiality. FlipTok will not save user data even if you open the site daily and download a lot of content.'
          }
        />
        <TextComponent
          style={globalStyles.descriptionText}
          text={
            'Using the FlipTok website is not difficult at all, and there is no need to register and authorize. There is no need to download additional extensions, plugins, add-ons, because the website works in any browser.\n' +
            '\n' +
            'Another important advantage of the website is the ability to download content to any device. It can be a tablet, a smartphone, or a laptop, in other words, any device on which you usually watch videos.\n' +
            '\n' +
            'Downloading is fast, literally in a few seconds for standard-sized videos up to 60 seconds long. Longer videos will take longer to save, but the quality will remain original.\n' +
            '\n' +
            'Are you ready to get acquainted with FlipTok service? Hurry up and enjoy videos from TikTok without using the app and internet connection. Our service has already been chosen by hundreds of users of the popular application. It is really the easiest and most convenient way to download clips without watermarking and registration that you and your loved ones are sure to enjoy!'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
