
export default function SectionHeader({sectionHeader, seeAll}:{sectionHeader:string, seeAll:string}) {
  return (
    <div className="section-header">
        <span className="larger-font">{sectionHeader}</span>
        <span className="smaller-font">{seeAll}</span>
    </div>
  );
};
