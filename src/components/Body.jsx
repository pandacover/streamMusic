import { List } from './List';
import './css/styles.css';

export const Body = ({songList}) => {
  
  return (
    <div className="container">
      <div className="exp-title">
        <div className="exp-title-txt">This is what's trending on YEEEET community!</div>
    </div>
    <div className="body-container">
      <div className="row">
        {songList.map((song) => (
          <List key={song.id} songs={song} />
        ))}
      </div>
    </div>      
  </div>

  )
}