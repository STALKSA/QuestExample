/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useShopNavbar1ResponsiveSize = () => {
  const [variant, setVariant] = React.useState('ScreenDesktopTypeQuest');

  React.useEffect(() => {
    const handlerScreenMobileTypeQuest = (e) =>
      setVariant((size) => (e.matches ? 'ScreenMobileTypeQuest' : size));

    const ScreenMobileTypeQuestSize = window.matchMedia('(max-width: 544px)');
    setVariant((size) =>
      ScreenMobileTypeQuestSize.matches ? 'ScreenMobileTypeQuest' : size
    );
    ScreenMobileTypeQuestSize.addEventListener(
      'change',
      handlerScreenMobileTypeQuest
    );

    const handlerScreenTabletTypeQuest = (e) =>
      setVariant((size) => (e.matches ? 'ScreenTabletTypeQuest' : size));

    const ScreenTabletTypeQuestSize = window.matchMedia(
      '(min-width: 545px) and (max-width: 1086px)'
    );
    setVariant((size) =>
      ScreenTabletTypeQuestSize.matches ? 'ScreenTabletTypeQuest' : size
    );
    ScreenTabletTypeQuestSize.addEventListener(
      'change',
      handlerScreenTabletTypeQuest
    );

    const handlerScreenDesktopTypeQuest = (e) =>
      setVariant((size) => (e.matches ? 'ScreenDesktopTypeQuest' : size));

    const ScreenDesktopTypeQuestSize = window.matchMedia('(min-width: 1087px)');
    setVariant((size) =>
      ScreenDesktopTypeQuestSize.matches ? 'ScreenDesktopTypeQuest' : size
    );
    ScreenDesktopTypeQuestSize.addEventListener(
      'change',
      handlerScreenDesktopTypeQuest
    );
  }, []);

  return variant;
};

export default useShopNavbar1ResponsiveSize;
