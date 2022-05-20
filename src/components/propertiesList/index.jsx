import Property from "./property";

function PropertiesList({ list }) {  
  return (
    <div className="propertiesList-container">
      {list.map(p => <Property key={p._id} {...p} />)}
    </div>
  );
}

export default PropertiesList;