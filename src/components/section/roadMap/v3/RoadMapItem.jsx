const RoadMapItem = ({ progressIcon, progress, title, text, thumb }) => {
  return (
    <div className="CleverMeta_roadmap_item"> 
      <div className="roadmap_parcentage">
        <span>{progress}</span>
        <span className="parcentage">%</span>
      </div> 
      <div className="CleverMeta_roadmap_content"> 
        <div className="CleverMeta_roadmap_text">
          <div className="roadmap_heading">
            <h5 className="mb-15"> {title} </h5>
            <img src={progressIcon} alt="CleverMeta nft progress" />
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="roadmap_img">
        <img src={thumb} alt="CleverMeta nft progress" />
      </div>
    </div>
  );
};

export default RoadMapItem;
