import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { CloseWindowComponent } from '../../components/closeWindowComponent/closeWindowComponent';

import { privacyPolicyScreenStyles } from './styles';

export type PrivacyPolicyScreenTypes = {
  goToCloseBottomSheet: () => void;
};

export const PrivacyPolicyScreenView: FC<PrivacyPolicyScreenTypes> = ({ goToCloseBottomSheet }) => {
  return (
    <View style={privacyPolicyScreenStyles.rootContainer}>
      <CloseWindowComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      <ScrollView style={privacyPolicyScreenStyles.centerContainer}>
        <Text>
          {'PRIVACY POLICY\n' +
            '\n' +
            'Last updated May 10, 2023\n' +
            '\n' +
            '\n' +
            '\n' +
            'This privacy notice for FlipTok ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:\n' +
            'Visit our website at https://fliptok.app/, or any website of ours that links to this privacy notice\n' +
            'Engage with us in other related ways, including any sales, marketing, or events\n' +
            'Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at fliptokapp@gmail.com.\n' +
            '\n' +
            '\n' +
            'SUMMARY OF KEY POINTS\n' +
            '\n' +
            'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.\n' +
            '\n' +
            'What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with FlipTok and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.\n' +
            '\n' +
            'Do we process any sensitive personal information? We do not process sensitive personal information.\n' +
            '\n' +
            'Do we receive any information from third parties? We do not receive any information from third parties.\n' +
            '\n' +
            'How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.\n' +
            '\n' +
            'In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.\n' +
            '\n' +
            'How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.\n' +
            '\n' +
            'What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.\n' +
            '\n' +
            '\n' +
            'Want to learn more about what FlipTok does with any information we collect? Review the privacy notice in full.\n' +
            '\n' +
            '\n' +
            'TABLE OF CONTENTS\n' +
            '\n' +
            '1. WHAT INFORMATION DO WE COLLECT?\n' +
            '2. HOW DO WE PROCESS YOUR INFORMATION?\n' +
            '3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?\n' +
            '4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?   \n' +
            '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?\n' +
            '6. HOW LONG DO WE KEEP YOUR INFORMATION?\n' +
            '7. HOW DO WE KEEP YOUR INFORMATION SAFE?\n' +
            '8. DO WE COLLECT INFORMATION FROM MINORS?\n' +
            '9. WHAT ARE YOUR PRIVACY RIGHTS?\n' +
            '10. CONTROLS FOR DO-NOT-TRACK FEATURES\n' +
            '11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\n' +
            '12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\n' +
            '13. DO WE MAKE UPDATES TO THIS NOTICE?\n' +
            '14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\n' +
            '15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\n' +
            '\n' +
            '\n' +
            '1. WHAT INFORMATION DO WE COLLECT?\n' +
            '\n' +
            'Personal information you disclose to us\n' +
            '\n' +
            'In Short: We collect personal information that you provide to us.\n' +
            '\n' +
            'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.\n' +
            '\n' +
            'Sensitive Information. We do not process sensitive information.\n' +
            '\n' +
            'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.\n' +
            '\n' +
            '2. HOW DO WE PROCESS YOUR INFORMATION?\n' +
            '\n' +
            'In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.\n' +
            '\n' +
            'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.\n" +
            '\n' +
            '3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?\n' +
            '\n' +
            'In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.\n' +
            '\n' +
            'If you are located in the EU or UK, this section applies to you.\n' +
            '\n' +
            'The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:\n' +
            'Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.\n' +
            'Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.\n' +
            'Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.\n' +
            '\n' +
            'If you are located in Canada, this section applies to you.\n' +
            '\n' +
            'We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.\n' +
            '\n' +
            'In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:\n' +
            'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way\n' +
            'For investigations and fraud detection and prevention\n' +
            'For business transactions provided certain conditions are met\n' +
            'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim\n' +
            'For identifying injured, ill, or deceased persons and communicating with next of kin\n' +
            'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse\n' +
            'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province\n' +
            'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records\n' +
            'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced\n' +
            'If the collection is solely for journalistic, artistic, or literary purposes\n' +
            'If the information is publicly available and is specified by the regulations\n' +
            '\n' +
            '4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?\n' +
            '\n' +
            'In Short: We may share information in specific situations described in this section and/or with the following third parties.\n' +
            '\n' +
            'We may need to share your personal information in the following situations:\n' +
            'Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.\n' +
            '\n' +
            '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?\n' +
            '\n' +
            'In Short: We may use cookies and other tracking technologies to collect and store your information.\n' +
            '\n' +
            'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.\n' +
            '\n' +
            '6. HOW LONG DO WE KEEP YOUR INFORMATION?\n' +
            '\n' +
            'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.\n' +
            '\n' +
            'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).\n' +
            '\n' +
            'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.\n' +
            '\n' +
            '7. HOW DO WE KEEP YOUR INFORMATION SAFE?\n' +
            '\n' +
            'In Short: We aim to protect your personal information through a system of organizational and technical security measures.\n' +
            '\n' +
            'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.\n' +
            '\n' +
            '8. DO WE COLLECT INFORMATION FROM MINORS?\n' +
            '\n' +
            'In Short: We do not knowingly collect data from or market to children under 18 years of age.\n' +
            '\n' +
            'We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at fliptokapp@gmail.com.\n' +
            '\n' +
            '9. WHAT ARE YOUR PRIVACY RIGHTS?\n' +
            '\n' +
            'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.\n' +
            '\n' +
            'In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.\n' +
            '\n' +
            'We will consider and act upon any request in accordance with applicable data protection laws.\n' +
            ' \n' +
            '.\n' +
            '\n' +
            '\n' +
            'Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.\n' +
            '\n' +
            'However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.\n' +
            '\n' +
            'Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.\n' +
            '\n' +
            '10. CONTROLS FOR DO-NOT-TRACK FEATURES\n' +
            '\n' +
            'Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.\n' +
            '\n' +
            '11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\n' +
            '\n' +
            'In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.\n' +
            '\n' +
            'California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.\n' +
            '\n' +
            'If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).\n' +
            '\n' +
            'CCPA Privacy Notice\n' +
            '\n' +
            'The California Code of Regulations defines a "resident" as:\n' +
            '\n' +
            '(1) every individual who is in the State of California for other than a temporary or transitory purpose and\n' +
            '(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose\n' +
            '\n' +
            'All other individuals are defined as "non-residents."\n' +
            '\n' +
            'If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.\n' +
            '\n' +
            'What categories of personal information do we collect?\n' +
            '\n' +
            'We have collected the following categories of personal information in the past twelve (12) months:\n' +
            '\n' +
            'Category\tExamples\tCollected\n' +
            'A. Identifiers\n' +
            'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'B. Personal information categories listed in the California Customer Records statute\n' +
            'Name, contact information, education, employment, employment history, and financial information\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'C. Protected classification characteristics under California or federal law\n' +
            'Gender and date of birth\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'D. Commercial information\n' +
            'Transaction information, purchase history, financial details, and payment information\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'E. Biometric information\n' +
            'Fingerprints and voiceprints\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'F. Internet or other similar network activity\n' +
            'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'G. Geolocation data\n' +
            'Device location\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'H. Audio, electronic, visual, thermal, olfactory, or similar information\n' +
            'Images and audio, video or call recordings created in connection with our business activities\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'I. Professional or employment-related information\n' +
            'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'J. Education Information\n' +
            'Student records and directory information\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'K. Inferences drawn from other personal information\n' +
            'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics\n' +
            '\n' +
            'NO\n' +
            '\n' +
            'L. Sensitive Personal Information\t\t\n' +
            'NO\n' +
            '\n' +
            '\n' +
            'We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:\n' +
            'Receiving help through our customer support channels;\n' +
            'Participation in customer surveys or contests; and\n' +
            'Facilitation in the delivery of our Services and to respond to your inquiries.\n' +
            'How do we use and share your personal information?\n' +
            '\n' +
            'More information about our data collection and sharing practices can be found in this privacy notice.\n' +
            '\n' +
            'You may contact us by visiting https://fliptok.app/contact-us, or by referring to the contact details at the bottom of this document.\n' +
            '\n' +
            'If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.\n' +
            '\n' +
            'Will your information be shared with anyone else?\n' +
            '\n' +
            'We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.\n' +
            '\n' +
            'We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.\n' +
            '\n' +
            'FlipTok has not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. FlipTok will not sell or share personal information in the future belonging to website visitors, users, and other consumers.\n' +
            '\n' +
            'Your rights with respect to your personal data\n' +
            '\n' +
            'Right to request deletion of the data — Request to delete\n' +
            '\n' +
            'You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.\n' +
            '\n' +
            'Right to be informed — Request to know\n' +
            '\n' +
            'Depending on the circumstances, you have a right to know:\n' +
            'whether we collect and use your personal information;\n' +
            'the categories of personal information that we collect;\n' +
            'the purposes for which the collected personal information is used;\n' +
            'whether we sell or share personal information to third parties;\n' +
            'the categories of personal information that we sold, shared, or disclosed for a business purpose;\n' +
            'the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;\n' +
            'the business or commercial purpose for collecting, selling, or sharing personal information; and\n' +
            'the specific pieces of personal information we collected about you.\n' +
            'In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.\n' +
            '\n' +
            'Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights\n' +
            '\n' +
            'We will not discriminate against you if you exercise your privacy rights.\n' +
            '\n' +
            'Right to Limit Use and Disclosure of Sensitive Personal Information\n' +
            '\n' +
            "We do not process consumer's sensitive personal information.\n" +
            '\n' +
            'Verification process\n' +
            '\n' +
            'Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.\n' +
            '\n' +
            'We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.\n' +
            '\n' +
            'Other privacy rights\n' +
            'You may object to the processing of your personal information.\n' +
            'You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.\n' +
            'You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.\n' +
            'You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.\n' +
            'To exercise these rights, you can contact us by visiting https://fliptok.app/contact-us, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.\n' +
            '\n' +
            '12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\n' +
            '\n' +
            'In Short: Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and use of your personal information.\n' +
            '\n' +
            'Virginia CDPA Privacy Notice\n' +
            '\n' +
            'Under the Virginia Consumer Data Protection Act (CDPA):\n' +
            '\n' +
            '"Consumer" means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.\n' +
            '\n' +
            '"Personal data" means any information that is linked or reasonably linkable to an identified or identifiable natural person. "Personal data" does not include de-identified data or publicly available information.\n' +
            '\n' +
            '"Sale of personal data" means the exchange of personal data for monetary consideration.\n' +
            '\n' +
            'If this definition "consumer" applies to you, we must adhere to certain rights and obligations regarding your personal data.\n' +
            '\n' +
            'The information we collect, use, and disclose about you will vary depending on how you interact with FlipTok and our Services. To find out more, please visit the following links:\n' +
            'Personal data we collect\n' +
            'How we use your personal data\n' +
            'When and with whom we share your personal data\n' +
            'Your rights with respect to your personal data\n' +
            'Right to be informed whether or not we are processing your personal data\n' +
            'Right to access your personal data\n' +
            'Right to correct inaccuracies in your personal data\n' +
            'Right to request deletion of your personal data\n' +
            'Right to obtain a copy of the personal data you previously shared with us\n' +
            'Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")\n' +
            'FlipTok has not sold any personal data to third parties for business or commercial purposes. FlipTok will not sell personal data in the future belonging to website visitors, users, and other consumers.\n' +
            '\n' +
            'Exercise your rights provided under the Virginia CDPA\n' +
            '\n' +
            'More information about our data collection and sharing practices can be found in this privacy notice.\n' +
            '\n' +
            'You may contact us by email at fliptokapp@gmail.com,, or by referring to the contact details at the bottom of this document.\n' +
            '\n' +
            'If you are using an authorized agent to exercise your rights, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.\n' +
            '\n' +
            'Verification process\n' +
            '\n' +
            "We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request.\n" +
            '\n' +
            'Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.\n' +
            '\n' +
            'Right to appeal\n' +
            '\n' +
            'If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at fliptokapp@gmail.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions..\n' +
            '\n' +
            '13. DO WE MAKE UPDATES TO THIS NOTICE?\n' +
            '\n' +
            'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.\n' +
            '\n' +
            'We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.\n' +
            '\n' +
            '14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\n' +
            '\n' +
            'If you have questions or comments about this notice, you may email us at fliptokapp@gmail.com\n' +
            '\n' +
            '\n' +
            '15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\n' +
            '\n' +
            'Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it.'}
        </Text>
      </ScrollView>
    </View>
  );
};
