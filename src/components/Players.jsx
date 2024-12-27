import PropTypes from "prop-types";

import { Card } from "antd";
const { Meta } = Card;

function Players(props) {
  return (
    <Card hoverable cover={<img alt="Player Cards" src={props.image} />}>
      <Meta
        title={props.name}
        description={
          <div>
            <h1> {props.team}</h1>
            <p>{props.nationality}</p>
            <h3>{props.jrsnumber}</h3>
            <h2> {props.age}</h2>
          </div>
        }
      />
    </Card>
  );
}

Players.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jrsnumber: PropTypes.number,
  age: PropTypes.number,
};

export default Players;
