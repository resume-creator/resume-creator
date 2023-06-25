import { useCallback } from 'react';
import { ResumeState } from './types';

const loadFromUrl = async (): Promise<ResumeState | undefined> => {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('data')) {
      const response = await fetch(searchParams.get('data') || '');
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const loadFromLocaStorage = (): ResumeState | undefined => {
  try {
    const dataString = window.localStorage.getItem('data');
    return JSON.parse(dataString || '');
  } catch (error) {
    console.error(error);
  }
};

const loadFromWindow = (): ResumeState | undefined => {
  try {
    return JSON.parse(JSON.stringify(window.__DATA__));
  } catch (error) {
    console.error(error);
  }
};

const loadFromDataJson = async (): Promise<ResumeState | undefined> => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const _loadResumeData = async (): Promise<ResumeState> => {
  const urlState = await loadFromUrl();
  if (urlState) {
    return urlState;
  }

  const localStorageState = loadFromLocaStorage();
  if (localStorageState) {
    return localStorageState;
  }

  const windowState = loadFromWindow();
  if (windowState) {
    return windowState;
  }

  const dataJsonState = await loadFromDataJson();
  if (dataJsonState) {
    return dataJsonState;
  }

  return { sections: [] };
};

export const useLoadResumeData = () => {
  const loadResumeData = useCallback(() => _loadResumeData(), []);

  return { loadResumeData };
};
