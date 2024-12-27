import Players from "./Players";
import { players } from "../utils/data";

function PlayersList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
      {players.map((item) => {
        return (
          <Players
            name={item.player_name}
            image={item.player_image}
            team={item.player_team}
            nationality={item.player_nationality}
            jrsnumber={item.player_jsrnumber}
            age={item.player_age}
            key={item.player_id}
          />
        );
      })}
    </div>
  );
}

export default PlayersList;
