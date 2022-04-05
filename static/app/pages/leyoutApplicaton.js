import defaultSectionComponent from "../components/sectionsLayout/defaultSection.js";
import menuPanelSection from "../components/sectionsLayout/menuPanelSection.js";

const listSectionComponents = new Map();
listSectionComponents.set('defaultSectionComponent', defaultSectionComponent);
listSectionComponents.set('menuPanelSection', menuPanelSection);

const renderLayout = (leyoutChildren) => {
  const children = [];

  for (const section of leyoutChildren) {
    let el = defaultSectionComponent({ height: section.height });
    if (section.component && listSectionComponents.has(section.component)) {
      el = listSectionComponents.get(section.component)({ height: section.height });
    };
    if (section.children.length > 0) el.children = renderLayout(section.children);
    children.push(el);
  };

  return children;
};

/** @returns {Schema} */
export default () => ({
  tag: 'section',
  attrs: {
  },
  styles: {
    border: '2px solid #0033DD',
    height: '100%',
    marginLeft: '10px',
  },
  hooks: {
  },
  children: renderLayout(leyoutApplicaton.children),
});
