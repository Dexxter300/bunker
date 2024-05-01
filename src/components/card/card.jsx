export const Card = ({ data }) => {
  return (
    <li>
      <ul>
        <li>name: {data.name}</li>
        <li>age: {data.age}</li>
        <li>health: {data.health}</li>
        <li>occupation: {data.occupation}</li>
        <li>inventory: {data.inventory}</li>
        <li>hobby: {data.hobby}</li>
        <li>phobia: {data.phobia}</li>
        <ul>
          <li>{data.wildcards}</li>
        </ul>
      </ul>
    </li>
  );
};
