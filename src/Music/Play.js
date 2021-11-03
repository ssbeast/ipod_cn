import { PlayCircleFilled } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;
  const styles={
    'margin-top': '45px',
    'font-size' : '40px',
  }
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleFilled style={styles}  />
    </button>
  );
}
