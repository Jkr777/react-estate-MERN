import Property from "./property";

function Properties({ list }) {  
  return (
    <div className="properties-container__list">
      {list.map(p => <Property key={p._id} {...p} />)}
    </div>
  );
}

export default Properties;