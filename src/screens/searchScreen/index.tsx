import { Alert } from 'react-native';

import React, { useState } from 'react';

import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addIsActive, saveData, setText } from '../../store/actions';
import { getLoadData, getText } from '../../store/homeScreen/selectors';

import { SearchScreenView } from './searchScreenView';

export interface Data {
  music: {
    id: string;
    title: string;
    url: string;
  };
  video: {
    id: string;
    title: string;
    cover: string;
    url: string;
  };
}

export const SearchScreen = () => {
  const [link, setLink] = useState('');
  const dispatch = useAppDispatch();
  const getInputText = useAppSelector(getText);
  const getDataRedux: Data[] = useAppSelector(getLoadData);
  const [data, setData] = useState<Data | undefined>();

  const getData = () => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${getInputText}`;
    axios
      .get(apiUrl)
      .then((resp) => {
        const allPersons = resp.data;
        dispatch(saveData(allPersons));
      })
      .catch(() => null);
  };

  const dataRedux = () => {
    const dataRedux = getDataRedux;
    setData(dataRedux);
  };

  const setTextValue = () => {
    link ? dispatch(setText(link)) : Alert.alert('Enter your link please');
  };

  const setInputValue = () => {
    getData();
    setTextValue();
    dispatch(addIsActive(true));
    setTimeout(dataRedux, 3000);
  };

  return (
    <SearchScreenView
      text={link !== '' ? data?.music.title : ''}
      link={link}
      setLink={setLink}
      setInputValue={setInputValue}
    />
  );
};
