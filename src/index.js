import {
  baseHomeUrl,
  baseSetUrl
} from './constants';

import fetchData from './api';
import renderContent from './render';
import setupNavigation from './navigation';
import handleError from './errorHandler';

async function loadHomePage() {
  try {
    let homeData = await fetchData(baseHomeUrl);
    
    let containers = homeData?.data?.StandardCollection?.containers;
    if (!containers) {
      throw new Error('No homeData containers found');
    }
    
    let contentPromises = containers.map(async container => {
      const containerSet = container?.set;
      if (!containerSet) {
        throw new Error('No containerSet found');
      }
      
      const refId = containerSet?.refId;
      if (refId) {
        let refData = await fetchData(`${baseSetUrl}${refId}.json`);
        const refDataSet = refData?.data?.CuratedSet || refData?.data?.PersonalizedCuratedSet || refData?.data?.TrendingSet;
        if (!refDataSet) {
          throw new Error('No refDataSet found in refData');
        }
        
        // the text property was not copied over because some sets like 'Because You Watched Gordon Ramsay' will return a content for something different, like 'New to Disney+'.
        const refItemData = {
          items: refDataSet?.items,
          meta: refDataSet?.meta,
          setId: refDataSet?.setId,
          type: refDataSet?.type
        }
        
        // release refData references for garbage collection
        refData = null;
        
        return {
          ...container,
          set: {
            ...containerSet,
            ...refItemData
          }
        };
      } else {
        return container;
      }
    });
    
    const content = await Promise.all(contentPromises);
    
    renderContent(content);
    setupNavigation();
    
    // release data references for garbage collection
    homeData = null;
    containers = null;
    contentPromises = null;
  } catch (error) {
    handleError('loadHomePage', error);
  }
}

document.addEventListener('DOMContentLoaded', loadHomePage);