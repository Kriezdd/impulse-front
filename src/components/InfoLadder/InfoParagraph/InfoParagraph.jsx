import './InfoParagraph.scss';

const InfoParagraph = ({par}) => {
  console.log(par)

  return (
    <div className="paragraph-container">
      <div className="paragraph-info">
        <h3>{par.title}</h3>
        <p>{par.description}</p>
      </div>
      <img src={par.pic} className="paragraph-image" alt={`${Object.keys(par)[2]}`}/>
    </div>
  );
};

export default InfoParagraph;